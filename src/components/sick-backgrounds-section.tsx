"use client";

import { type CSSProperties, useMemo, useState } from "react";

import { AnimatedGradient, type CustomConfig } from "@/components/ui/animated-gradient";
import { Slider } from "@/components/ui/slider";

const BASE_COLORS = {
  color1: "#0a001a",
  color2: "#1a0b2e",
  color3: "#f20089",
};

type ControlKey = "speed" | "distortion" | "swirl" | "scale";

interface SliderControl {
  key: ControlKey;
  label: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
}

const CONTROLS: SliderControl[] = [
  { key: "speed", label: "Speed", min: 2, max: 40, step: 1, defaultValue: 15 },
  { key: "distortion", label: "Distortion", min: 0, max: 80, step: 1, defaultValue: 40 },
  { key: "swirl", label: "Swirl", min: 0, max: 150, step: 1, defaultValue: 80 },
  { key: "scale", label: "Scale", min: 0.2, max: 1.4, step: 0.05, defaultValue: 0.6 },
];

// Rescopes the shared Slider primitive's theme tokens to stay legible over
// the busy gradient background, without touching the shared component.
const sliderPanelStyle = {
  "--primary": "oklch(1 0 0)",
  "--background": "oklch(1 0 0)",
} as CSSProperties;

export function SickBackgroundsSection() {
  const [values, setValues] = useState<Record<ControlKey, number>>(
    () =>
      Object.fromEntries(CONTROLS.map((c) => [c.key, c.defaultValue])) as Record<
        ControlKey,
        number
      >,
  );

  const config = useMemo<CustomConfig>(
    () => ({
      preset: "custom",
      ...BASE_COLORS,
      rotation: -45,
      proportion: 60,
      softness: 100,
      offset: 200,
      shape: "Edge",
      shapeSize: 50,
      speed: values.speed,
      distortion: values.distortion,
      swirl: values.swirl,
      scale: values.scale,
    }),
    [values],
  );

  return (
    <section className="relative flex h-svh w-full flex-col items-center justify-center overflow-hidden bg-black px-6">
      <AnimatedGradient config={config} />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />

      <div className="relative z-10 flex flex-col items-center gap-3 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60 [text-shadow:0_1px_8px_rgb(0_0_0_/_80%)]">
          Live preview
        </span>
        <h2 className="text-4xl font-extrabold uppercase text-white [text-shadow:0_2px_24px_rgb(0_0_0_/_90%),0_1px_4px_rgb(0_0_0_/_95%)] md:text-6xl xl:text-7xl">
          Sick A** Backgrounds
        </h2>
        <p className="max-w-md text-sm text-white/80 [text-shadow:0_2px_16px_rgb(0_0_0_/_90%)] md:text-base">
          Drag the sliders and watch it repaint live — the same engine powers every canvas in
          Aethera.
        </p>
      </div>

      <div
        style={sliderPanelStyle}
        className="relative z-10 mt-10 grid w-full max-w-md gap-5 rounded-2xl border border-white/15 bg-black/40 p-6 backdrop-blur-md"
      >
        {CONTROLS.map((control) => (
          <div key={control.key} className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wide text-white/70">
              <span>{control.label}</span>
              <span className="tabular-nums text-white">
                {values[control.key].toFixed(control.step < 1 ? 2 : 0)}
              </span>
            </div>
            <Slider
              value={[values[control.key]]}
              min={control.min}
              max={control.max}
              step={control.step}
              onValueChange={([next]) => setValues((prev) => ({ ...prev, [control.key]: next }))}
              aria-label={control.label}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default SickBackgroundsSection;
