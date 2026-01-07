'use client';

import * as Slider from '@radix-ui/react-slider';

type PlayerControlsProps = {
  speed: number;
  volume: number;
  onSpeedChange: (value: number) => void;
  onVolumeChange: (value: number) => void;
};

export default function PlayerControls({
  speed,
  volume,
  onSpeedChange,
  onVolumeChange
}: PlayerControlsProps) {
  return (
    <div className="grid gap-4 rounded-md border border-border bg-background p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Speed</span>
        <span className="text-xs text-muted-foreground">{speed.toFixed(2)}x</span>
      </div>
      <Slider.Root
        className="relative flex h-4 w-full touch-none items-center"
        value={[speed]}
        min={0.25}
        max={4}
        step={0.05}
        onValueChange={(value) => onSpeedChange(value[0] ?? 1)}
      >
        <Slider.Track className="relative h-1 w-full grow rounded-full bg-muted">
          <Slider.Range className="absolute h-full rounded-full bg-primary" />
        </Slider.Track>
        <Slider.Thumb className="block h-4 w-4 rounded-full bg-primary" />
      </Slider.Root>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Volume</span>
        <span className="text-xs text-muted-foreground">{volume}%</span>
      </div>
      <Slider.Root
        className="relative flex h-4 w-full touch-none items-center"
        value={[volume]}
        min={0}
        max={100}
        step={1}
        onValueChange={(value) => onVolumeChange(value[0] ?? 100)}
      >
        <Slider.Track className="relative h-1 w-full grow rounded-full bg-muted">
          <Slider.Range className="absolute h-full rounded-full bg-primary" />
        </Slider.Track>
        <Slider.Thumb className="block h-4 w-4 rounded-full bg-primary" />
      </Slider.Root>
    </div>
  );
}
