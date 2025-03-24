import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('query')
  const perPage = searchParams.get('perPage') || '3'

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 })
  }

  try {
    const response = await fetch(`https://api.lummi.ai/v1/images/search?query=${encodeURIComponent(query)}&perPage=${perPage}`, {
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

