import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy')({
  head: () => ({
    meta: [
      { title: 'Privacy Policy — Aethera UI' },
      { name: 'description', content: 'Aethera UI privacy policy: how we collect, use, and protect your information.' },
      { property: 'og:title', content: 'Privacy Policy — Aethera UI' },
      { property: 'og:description', content: 'Aethera UI privacy policy: how we collect, use, and protect your information.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: PrivacyPage,
})

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <Link to="/" className="text-sm font-extrabold tracking-tight text-white no-underline">
            Aethera UI
          </Link>
          <Link to="/" className="text-sm font-medium text-white/50 no-underline transition-colors hover:text-white">
            Back to app
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 pb-24 pt-28">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">
          Legal
        </p>
        <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mb-8 text-sm text-white/40">
          Last updated: July 25, 2026
        </p>

        <div className="space-y-8 text-base leading-relaxed text-white/70">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">1. Overview</h2>
            <p>
              This page is maintained by Aethera UI to explain how we handle information when you use our design tool.
              It describes what data we collect, why we collect it, and the choices you have.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">2. Information we collect</h2>
            <p>
              We collect information you provide directly, such as your name, email address, and account credentials when you register.
              We also collect information automatically when you use the service, including device and browser information, usage data, and error logs.
              If you use AI-powered features, prompts and outputs may be processed through third-party providers in accordance with their terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">3. How we use information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve Aethera UI, to communicate with you about your account, to respond to support requests, and to enforce our terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">4. Sharing and disclosure</h2>
            <p>
              We do not sell your personal information.
              We may share information with service providers who help us operate the platform, when required by law, or to protect our rights and users' safety.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">5. Cookies and analytics</h2>
            <p>
              We use cookies and similar technologies to keep you signed in, remember your preferences, and understand how the service is used.
              You can control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">6. Data retention</h2>
            <p>
              We retain your information for as long as your account is active or as needed to provide the service and comply with legal obligations.
              You can request deletion of your account and associated data by contacting us.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">7. Your choices</h2>
            <p>
              You can access, update, or delete your account information from your account settings.
              You may also contact us to request access to, correction of, or deletion of your personal data.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">8. Security</h2>
            <p>
              We take reasonable measures to protect your information, but no method of transmission over the internet or electronic storage is completely secure.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">9. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time.
              We will notify you of significant changes by posting the new policy on this page and updating the effective date.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">10. Contact us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us through the support channels provided in the app.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-white/40">
          © {new Date().getFullYear()} Aethera UI. All rights reserved.
          <span className="mx-2">·</span>
          <Link to="/tos" className="text-white/50 no-underline transition-colors hover:text-white">Terms of Service</Link>
        </div>
      </footer>
    </div>
  )
}
