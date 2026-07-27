import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Aethera — Design anything. Ship it today.' },
      { name: 'description', content: 'Aethera is a fast, collaborative visual design tool for prototyping and shipping interfaces in minutes.' },
      { property: 'og:title', content: 'Aethera — Design anything. Ship it today.' },
      { property: 'og:description', content: 'A fast, collaborative visual design tool for prototyping and shipping interfaces in minutes.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: AetheraFrame,
})

function AetheraFrame() {
  return (
    <iframe
      src="/api/public/aethera"
      title="Aethera"
      style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', border: 0 }}
    />
  )
}
