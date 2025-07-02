import { useState, useCallback } from 'react';

interface FormData {
  sessionId: string;
  timestamp: number;
  currentStep: number;
  totalSteps: number;
  responses: Record<string, any>;
  isComplete: boolean;
  completedAt?: number;
  source?: string;
}

interface UseFormTrackingOptions {
  totalSteps: number;
  source?: string;
  zapierWebhookUrl?: string;
}

export function useFormTracking({ totalSteps, source = 'qualification', zapierWebhookUrl }: UseFormTrackingOptions) {
  const [sessionId] = useState(() => 
    `${source}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  );

  // Save to localStorage for persistence
  const saveToLocalStorage = useCallback((data: FormData) => {
    try {
      localStorage.setItem(`form_${sessionId}`, JSON.stringify(data));
      
      // Also save to a general forms array for analytics
      const existingForms = JSON.parse(localStorage.getItem('all_forms') || '[]');
      const updatedForms = existingForms.filter((f: FormData) => f.sessionId !== sessionId);
      updatedForms.push(data);
      localStorage.setItem('all_forms', JSON.stringify(updatedForms));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [sessionId]);

  // Save to database (API endpoint)
  const saveToDatabase = useCallback(async (data: FormData) => {
    try {
      await fetch('/api/forms/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error('Error saving to database:', error);
    }
  }, []);

  // Send to Zapier (only for completed forms)
  const sendToZapier = useCallback(async (data: FormData) => {
    console.log('sendToZapier called with:', { zapierWebhookUrl, isComplete: data.isComplete });
    
    if (!zapierWebhookUrl) {
      console.warn('No Zapier webhook URL provided');
      return;
    }

    if (!data.isComplete) {
      console.log('Form not complete, skipping Zapier webhook');
      return;
    }

    const payload = {
      sessionId: data.sessionId,
      timestamp: new Date(data.timestamp).toISOString(),
      currentStep: data.currentStep,
      totalSteps: data.totalSteps,
      isComplete: data.isComplete,
      completedAt: data.completedAt ? new Date(data.completedAt).toISOString() : null,
      source: data.source,
      responses: data.responses,
      // Flatten common fields for easier Google Sheets mapping
      name: data.responses.name || '',
      email: data.responses.email || '',
      phone: data.responses.phone || '',
      followers: data.responses.followers || '',
      niche: data.responses.niche || '',
      monetization: data.responses.monetization || '',
      monthlyIncome: data.responses.monthlyIncome || '',
      investmentBudget: data.responses.investmentBudget || '',
      whyWorkWithUs: data.responses.whyWorkWithUs || '',
      // Progress tracking
      progressPercentage: Math.round((data.currentStep / data.totalSteps) * 100),
      stepName: getStepName(data.currentStep),
    };

    console.log('Sending to Zapier via API:', payload);

    try {
      const response = await fetch('/api/zapier', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();

      console.log('Zapier API response:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok,
        data: responseData
      });

      if (!response.ok) {
        console.error('Zapier API error:', responseData);
      } else {
        console.log('Successfully sent to Zapier!');
      }

    } catch (error) {
      console.error('Error sending to Zapier API:', error);
    }
  }, [zapierWebhookUrl]);

  // Helper function to get step names
  const getStepName = (step: number): string => {
    const stepNames = [
      'Name',
      'Email', 
      'Phone',
      'Followers',
      'Niche',
      'Monetization',
      'Monthly Income',
      'Investment Budget',
      'Why Work Together'
    ];
    return stepNames[step - 1] || 'Unknown Step';
  };

  // Main tracking function
  const trackFormProgress = useCallback(async (currentStep: number, responses: Record<string, any>, isComplete = false) => {
    console.log('trackFormProgress called:', { currentStep, responses, isComplete, sessionId });
    
    const formData: FormData = {
      sessionId,
      timestamp: Date.now(),
      currentStep,
      totalSteps,
      responses,
      isComplete,
      completedAt: isComplete ? Date.now() : undefined,
      source,
    };

    console.log('FormData created:', formData);

    // Always save locally and to database
    saveToLocalStorage(formData);
    await saveToDatabase(formData);

    // Send to Zapier only when form is complete
    if (isComplete) {
      console.log('Form is complete, sending to Zapier...');
      await sendToZapier(formData);
      console.log('sendToZapier completed');
    } else {
      console.log('Form not complete, skipping Zapier (saved locally only)');
    }

    return formData;
  }, [sessionId, totalSteps, source, saveToLocalStorage, saveToDatabase, sendToZapier]);

  // Get form analytics
  const getFormAnalytics = useCallback(() => {
    try {
      const allForms = JSON.parse(localStorage.getItem('all_forms') || '[]');
      const completed = allForms.filter((f: FormData) => f.isComplete);
      const incomplete = allForms.filter((f: FormData) => !f.isComplete);
      
      return {
        total: allForms.length,
        completed: completed.length,
        incomplete: incomplete.length,
        completionRate: allForms.length > 0 ? (completed.length / allForms.length) * 100 : 0,
        averageStepsCompleted: incomplete.length > 0 
          ? incomplete.reduce((sum: number, f: FormData) => sum + f.currentStep, 0) / incomplete.length 
          : 0,
      };
    } catch {
      return {
        total: 0,
        completed: 0,
        incomplete: 0,
        completionRate: 0,
        averageStepsCompleted: 0,
      };
    }
  }, []);

  return {
    sessionId,
    trackFormProgress,
    getFormAnalytics,
  };
} 