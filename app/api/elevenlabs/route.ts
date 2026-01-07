import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ message: 'ElevenLabs proxy not implemented yet.' }, { status: 501 });
}
