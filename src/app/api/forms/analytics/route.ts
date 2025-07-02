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
  savedAt?: string;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const format = searchParams.get('format') || 'json';
    const type = searchParams.get('type') || 'all'; // 'all', 'completed', 'incomplete'

    const formsDir = path.join(process.cwd(), 'data', 'forms');
    const logPath = path.join(formsDir, 'form_log.jsonl');

    // Check if log file exists
    try {
      await fs.access(logPath);
    } catch {
      return NextResponse.json({
        analytics: {
          total: 0,
          completed: 0,
          incomplete: 0,
          completionRate: 0,
          avgStepsCompleted: 0,
        },
        forms: []
      });
    }

    // Read and parse form data
    const logContent = await fs.readFile(logPath, 'utf-8');
    const forms: FormData[] = logContent
      .split('\n')
      .filter(line => line.trim())
      .map(line => JSON.parse(line));

    // Filter forms based on type
    let filteredForms = forms;
    if (type === 'completed') {
      filteredForms = forms.filter(f => f.isComplete);
    } else if (type === 'incomplete') {
      filteredForms = forms.filter(f => !f.isComplete);
    }

    // Calculate analytics
    const completed = forms.filter(f => f.isComplete);
    const incomplete = forms.filter(f => !f.isComplete);
    
    const analytics = {
      total: forms.length,
      completed: completed.length,
      incomplete: incomplete.length,
      completionRate: forms.length > 0 ? (completed.length / forms.length) * 100 : 0,
      avgStepsCompleted: incomplete.length > 0 
        ? incomplete.reduce((sum, f) => sum + f.currentStep, 0) / incomplete.length 
        : 0,
      dropoffByStep: calculateDropoffByStep(forms),
      responsesByField: calculateResponsesByField(completed),
    };

    if (format === 'csv') {
      // Return CSV format for easy Google Sheets import
      const csv = convertToCSV(filteredForms);
      return new Response(csv, {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename="forms_${type}_${new Date().toISOString().split('T')[0]}.csv"`
        }
      });
    }

    return NextResponse.json({
      analytics,
      forms: filteredForms
    });

  } catch (error) {
    console.error('Error getting form analytics:', error);
    return NextResponse.json(
      { error: 'Failed to get form analytics' },
      { status: 500 }
    );
  }
}

function calculateDropoffByStep(forms: FormData[]): Record<number, number> {
  const stepCounts: Record<number, number> = {};
  
  forms.forEach(form => {
    for (let step = 1; step <= form.currentStep; step++) {
      stepCounts[step] = (stepCounts[step] || 0) + 1;
    }
  });

  return stepCounts;
}

function calculateResponsesByField(completedForms: FormData[]): Record<string, Record<string, number>> {
  const fieldResponses: Record<string, Record<string, number>> = {};

  completedForms.forEach(form => {
    Object.entries(form.responses).forEach(([field, value]) => {
      if (!fieldResponses[field]) {
        fieldResponses[field] = {};
      }
      const stringValue = String(value);
      fieldResponses[field][stringValue] = (fieldResponses[field][stringValue] || 0) + 1;
    });
  });

  return fieldResponses;
}

function convertToCSV(forms: FormData[]): string {
  if (forms.length === 0) return 'No data available';

  // Get all possible response fields
  const allFields = new Set<string>();
  forms.forEach(form => {
    Object.keys(form.responses).forEach(field => allFields.add(field));
  });

  const headers = [
    'sessionId',
    'timestamp',
    'savedAt', 
    'currentStep',
    'totalSteps',
    'isComplete',
    'completedAt',
    'source',
    ...Array.from(allFields)
  ];

  const rows = forms.map(form => {
    return headers.map(header => {
      if (header === 'timestamp' || header === 'completedAt') {
        const value = form[header as keyof FormData];
        return value ? new Date(value as number).toISOString() : '';
      }
      if (allFields.has(header)) {
        return form.responses[header] || '';
      }
      return form[header as keyof FormData] || '';
    });
  });

  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
  ].join('\n');

  return csvContent;
} 