import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const webhookUrl = process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_URL;

    if (!webhookUrl) {
      return NextResponse.json(
        { error: 'Zapier webhook URL not configured' },
        { status: 500 }
      );
    }

    console.log('Proxying to Zapier:', { webhookUrl, data });

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseText = await response.text();
    
    console.log('Zapier response:', {
      status: response.status,
      statusText: response.statusText,
      body: responseText
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Zapier webhook failed', details: responseText },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      zapierResponse: responseText
    });

  } catch (error) {
    console.error('Error proxying to Zapier:', error);
    return NextResponse.json(
      { error: 'Failed to send to Zapier', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 