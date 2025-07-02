import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const webhookUrl = process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_URL;
  
  console.log('Webhook URL:', webhookUrl);
  
  if (!webhookUrl) {
    return NextResponse.json({ 
      error: 'No webhook URL found', 
      envVar: 'NEXT_PUBLIC_ZAPIER_WEBHOOK_URL',
      value: webhookUrl 
    });
  }

  try {
    const testData = {
      sessionId: 'test_' + Date.now(),
      timestamp: new Date().toISOString(),
      currentStep: 1,
      totalSteps: 9,
      isComplete: false,
      source: 'test',
      progressPercentage: 11,
      stepName: 'Test Step',
      name: 'Test User',
      email: 'test@example.com',
      phone: '555-123-4567',
      followers: '',
      niche: '',
      monetization: '',
      monthlyIncome: '',
      investmentBudget: '',
      whyWorkWithUs: ''
    };

    console.log('Sending test data:', testData);

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    const responseText = await response.text();
    
    console.log('Zapier response status:', response.status);
    console.log('Zapier response:', responseText);

    return NextResponse.json({
      success: true,
      webhookUrl: webhookUrl,
      zapierResponse: {
        status: response.status,
        statusText: response.statusText,
        body: responseText
      },
      testData: testData
    });

  } catch (error) {
    console.error('Test webhook error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      webhookUrl: webhookUrl
    });
  }
} 