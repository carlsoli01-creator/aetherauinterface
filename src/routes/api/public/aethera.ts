import { createFileRoute } from '@tanstack/react-router'
import aetheraHtml from '../../../aethera.html?raw'

export const Route = createFileRoute('/api/public/aethera')({
  server: {
    handlers: {
      GET: async () => {
        const key = process.env.GOOGLE_API_KEY ?? ''
        const rendered = aetheraHtml.replace('@secret:GOOGLE_API_KEY', key)
        return new Response(rendered, {
          headers: { 'content-type': 'text/html; charset=utf-8' },
        })
      },
    },
  },
})
