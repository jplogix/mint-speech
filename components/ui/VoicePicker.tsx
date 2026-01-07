'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const providers = [
  { id: 'edgetts', label: 'Edge TTS' },
  { id: 'gemini', label: 'Gemini' },
  { id: 'elevenlabs', label: 'ElevenLabs' }
];

export default function VoicePicker() {
  const [provider, setProvider] = useState('edgetts');
  const [voice, setVoice] = useState('Microsoft Jenny');

  return (
    <div className="grid gap-3 rounded-md border border-border bg-background p-4">
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-muted-foreground">Provider</label>
        <div className="flex gap-2">
          {providers.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setProvider(item.id)}
              className={`rounded-md px-3 py-2 text-xs font-medium transition ${
                provider === item.id
                  ? 'bg-primary text-white'
                  : 'border border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-muted-foreground">Voice</label>
        <button
          type="button"
          className="flex items-center justify-between rounded-md border border-border px-3 py-2 text-sm"
          aria-label="Select voice"
        >
          <span>{voice}</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
}
