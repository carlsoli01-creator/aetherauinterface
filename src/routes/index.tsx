import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import { SickBackgroundsSection } from "@/components/sick-backgrounds-section";
import { HeroFuturistic } from "@/components/ui/hero-futuristic";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aethera — Design anything. Ship it today." },
      {
        name: "description",
        content:
          "Aethera is a fast, collaborative visual design tool for prototyping and shipping interfaces in minutes.",
      },
      { property: "og:title", content: "Aethera — Design anything. Ship it today." },
      {
        property: "og:description",
        content:
          "A fast, collaborative visual design tool for prototyping and shipping interfaces in minutes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AetheraFrame,
});

function AetheraFrame() {
  // The homepage is all-black (hero + gradient showcase + the embedded app),
  // but <body>'s theme background is light. Without this, overscroll bounce
  // and any hydration flash show white behind the black content.
  useEffect(() => {
    const previous = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#000";
    return () => {
      document.body.style.backgroundColor = previous;
    };
  }, []);

  return (
    <div className="bg-black">
      <HeroFuturistic />
      <SickBackgroundsSection />
      <iframe
        src="/api/public/aethera"
        title="Aethera"
        style={{ display: "block", width: "100%", height: "100svh", border: 0 }}
      />
    </div>
  );
}
