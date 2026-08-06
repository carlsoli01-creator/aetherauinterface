import { createFileRoute } from "@tanstack/react-router";

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
  return (
    <div>
      <HeroFuturistic />
      <iframe
        src="/api/public/aethera"
        title="Aethera"
        style={{ display: "block", width: "100%", height: "100svh", border: 0 }}
      />
    </div>
  );
}
