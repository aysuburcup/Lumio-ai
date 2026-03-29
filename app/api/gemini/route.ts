import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message, ageRange } = await request.json();

    const API_KEY = process.env.GOOGLE_API_KEY;
    console.log("GOOGLE_API_KEY var mı:", !!API_KEY);

    if (!API_KEY) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    const systemPrompt = `Sen Lumio adında empatik bir çocuk asistanısın.
Türkçe konuş.
Kısa ve sıcak cevap ver.
Teşhis koyma.
Yaş grubu: ${ageRange || '8-11'}.
Bu yaşa uygun, güven veren, doğal bir dil kullan.`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

    const payload = {
      contents: [
        {
          parts: [
            {
              text: `${systemPrompt}\n\nKullanıcı mesajı: ${message}`
            }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 600
      }
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    const responseData = await response.json();
    console.log("Google API response:", responseData);

    if (!response.ok) {
      console.error("Google API Error:", response.status, responseData);
      return NextResponse.json(
        {
          error: `Google API Error: ${response.status}`,
          details: responseData
        },
        { status: 500 }
      );
    }

    const text = responseData?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return NextResponse.json(
        {
          error: 'Invalid API response structure',
          details: responseData
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ reply: text });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Bir hata oluştu'
      },
      { status: 500 }
    );
  }
}