'use client';

import { useMemo, useState } from 'react';
import { Play, Square, Bookmark } from 'lucide-react';
import PlayerControls from '@/components/ui/PlayerControls';
import VoicePicker from '@/components/ui/VoicePicker';

export default function ReaderPage() {
  const [text, setText] = useState('');
  const [speed, setSpeed] = useState(1);
  const [volume, setVolume] = useState(100);
  const charCount = useMemo(() => text.length, [text]);

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
      <section className="rounded-lg border border-border bg-secondary p-6 shadow-sm">
        <h1 className="text-2xl font-semibold">TTS Composer</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Enter text, pick a voice, and generate premium neural speech.
        </p>
        <div className="mt-6 flex flex-col gap-4">
          <textarea
            className="min-h-[180px] w-full resize-none rounded-md border border-border bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-primary"
            placeholder="Type or paste your script..."
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{charCount} characters</span>
            <button type="button" className="inline-flex items-center gap-2">
              <Bookmark className="h-3.5 w-3.5" />
              Save to bookmarks
            </button>
          </div>
          <VoicePicker />
          <PlayerControls
            speed={speed}
            volume={volume}
            onSpeedChange={setSpeed}
            onVolumeChange={setVolume}
          />
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white">
              <Play className="h-4 w-4" />
              Generate & Play
            </button>
            <button className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm">
              <Square className="h-4 w-4" />
              Stop
            </button>
          </div>
        </div>
      </section>
      <section className="rounded-lg border border-border bg-secondary p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Subtitle Preview</h2>
        <p className="mt-2 rounded-md border border-dashed border-border bg-background p-4 text-sm text-muted-foreground">
          Subtitles will appear here during playback.
        </p>
      </section>
    </div>
  );
}
