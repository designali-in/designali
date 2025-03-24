import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://api.lummi.ai/v1/images/random?limit=20', {
      headers: {
        'Authorization': `Bearer ${process.env.LUMMI_API_KEY}`
      }
    })
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 })
  }
}

