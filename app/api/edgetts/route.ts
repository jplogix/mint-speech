import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ message: 'Edge TTS proxy not implemented yet.' }, { status: 501 });
}
