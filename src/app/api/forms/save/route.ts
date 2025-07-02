import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

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

export async function POST(request: NextRequest) {
  try {
    const formData: FormData = await request.json();
    
    // Create forms directory if it doesn't exist
    const formsDir = path.join(process.cwd(), 'data', 'forms');
    try {
      await fs.mkdir(formsDir, { recursive: true });
    } catch (error) {
      // Directory might already exist
    }

    // Save individual form file
    const fileName = `${formData.sessionId}.json`;
    const filePath = path.join(formsDir, fileName);
    await fs.writeFile(filePath, JSON.stringify(formData, null, 2));

    // Also append to a master log file for easy analysis
    const logPath = path.join(formsDir, 'form_log.jsonl');
    const logEntry = JSON.stringify({
      ...formData,
      savedAt: new Date().toISOString()
    }) + '\n';
    
    try {
      await fs.appendFile(logPath, logEntry);
    } catch (error) {
      // If file doesn't exist, create it
      await fs.writeFile(logPath, logEntry);
    }

    // If it's a completed form, also save to a separate completed forms file
    if (formData.isComplete) {
      const completedPath = path.join(formsDir, 'completed_forms.jsonl');
      try {
        await fs.appendFile(completedPath, logEntry);
      } catch (error) {
        await fs.writeFile(completedPath, logEntry);
      }
    }

    return NextResponse.json({ 
      success: true, 
      sessionId: formData.sessionId,
      saved: true 
    });

  } catch (error) {
    console.error('Error saving form data:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save form data' },
      { status: 500 }
    );
  }
} 