import { ArrowDown } from "lucide-react";
import { type ComponentType, useEffect, useState } from "react";

export interface HeroFuturisticProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const DEFAULT_TITLE = "Build Your Dreams";
const DEFAULT_SUBTITLE = "AI-powered creativity for the next generation.";

export const HeroFuturistic = ({
  title = DEFAULT_TITLE,
  subtitle = DEFAULT_SUBTITLE,
  className,
}: HeroFuturisticProps) => {
  const titleWords = title.split(" ");

  const [visibleWords, setVisibleWords] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [delays, setDelays] = useState<number[]>([]);
  const [subtitleDelay, setSubtitleDelay] = useState(0);
  const [Scene, setScene] = useState<ComponentType | null>(null);

  useEffect(() => {
    setDelays(titleWords.map(() => Math.random() * 0.07));
    setSubtitleDelay(Math.random() * 0.1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords((count) => count + 1), 600);
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(() => setSubtitleVisible(true), 800);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleWords]);

  useEffect(() => {
    // The 3D scene needs WebGPU and browser-only APIs, so it's loaded
    // lazily on the client and skipped entirely where WebGPU isn't supported.
    if (typeof navigator === "undefined" || !("gpu" in navigator)) return;

    let active = true;
    import("./hero-futuristic-scene").then((mod) => {
      if (active) setScene(() => mod.HeroFuturisticScene);
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className={`relative h-svh w-full overflow-hidden bg-black ${className ?? ""}`}>
      {Scene ? (
        <Scene />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-black to-neutral-950" />
      )}

      {/* Darkening vignette so the title stays legible over bright parts of the scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />

      <div className="absolute inset-0 z-10 flex w-full flex-col items-center justify-center px-10 uppercase pointer-events-none">
        <div className="text-3xl font-extrabold md:text-5xl xl:text-6xl 2xl:text-7xl">
          <div className="flex space-x-2 overflow-hidden text-white lg:space-x-6 [text-shadow:0_2px_24px_rgb(0_0_0_/_90%),0_1px_4px_rgb(0_0_0_/_95%)]">
            {titleWords.map((word, index) => (
              <div
                key={`${word}-${index}`}
                className={index < visibleWords ? "hero-futuristic-fade-in" : ""}
                style={{
                  animationDelay: `${index * 0.13 + (delays[index] || 0)}s`,
                  opacity: index < visibleWords ? undefined : 0,
                }}
              >
                {word}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2 text-xs font-bold text-white md:text-xl xl:text-2xl 2xl:text-3xl [text-shadow:0_2px_16px_rgb(0_0_0_/_90%),0_1px_3px_rgb(0_0_0_/_95%)]">
          <div
            className={subtitleVisible ? "hero-futuristic-fade-in-subtitle" : ""}
            style={{
              animationDelay: `${titleWords.length * 0.13 + 0.2 + subtitleDelay}s`,
              opacity: subtitleVisible ? undefined : 0,
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>

      <button
        type="button"
        className="hero-futuristic-explore-btn absolute inset-x-0 bottom-8 z-10 mx-auto flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white opacity-0 backdrop-blur-md transition-colors hover:bg-white/20"
        style={{ animationDelay: "2.2s" }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        Scroll to explore
        <ArrowDown className="hero-futuristic-arrow-bounce h-4 w-4" strokeWidth={2.5} />
      </button>

      <style>{`
        @keyframes hero-futuristic-fade-in-kf {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-futuristic-fade-in {
          animation: hero-futuristic-fade-in-kf 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .hero-futuristic-fade-in-subtitle {
          animation: hero-futuristic-fade-in-kf 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .hero-futuristic-explore-btn {
          animation: hero-futuristic-fade-in-kf 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes hero-futuristic-arrow-bounce-kf {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
        .hero-futuristic-arrow-bounce {
          animation: hero-futuristic-arrow-bounce-kf 1.6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroFuturistic;
