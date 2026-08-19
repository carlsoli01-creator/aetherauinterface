import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/ui/hero-1";

export const Route = createFileRoute("/hero-demo")({
  head: () => ({
    meta: [{ title: "Hero Demo — Aethera UI" }],
  }),
  component: HeroDemo,
});

function HeroDemo() {
  return (
    <Hero
      title="Build smarter tools for modern teams"
      subtitle="Streamline your workflow and boost productivity with intuitive solutions. Security, speed, and simplicity—all in one platform."
      eyebrow="Next-Gen Productivity"
      ctaLabel="Get Started"
      ctaHref="#"
    />
  );
}
