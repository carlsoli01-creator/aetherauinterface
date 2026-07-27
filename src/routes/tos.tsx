import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/tos')({
  head: () => ({
    meta: [
      { title: 'Terms of Service — Aethera UI' },
      { name: 'description', content: 'Aethera UI terms of service and acceptable use policy.' },
      { property: 'og:title', content: 'Terms of Service — Aethera UI' },
      { property: 'og:description', content: 'Aethera UI terms of service and acceptable use policy.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: TermsPage,
})

function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="mb-8 text-sm text-white/40">
          Last updated: July 25, 2026
        </p>

        <div className="space-y-8 text-base leading-relaxed text-white/70">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">1. Agreement to terms</h2>
            <p>
              These Terms of Service govern your access to and use of Aethera UI and its associated services.
              By creating an account or using the service, you agree to be bound by these terms.
              If you do not agree, do not use the service.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">2. Description of service</h2>
            <p>
              Aethera UI is a visual design tool that helps users prototype and build interfaces.
              We may update, modify, or remove features from time to time.
              The service is provided on an "as is" and "as available" basis.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">3. User accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              You must provide accurate and complete information when registering and keep that information current.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">4. Acceptable use</h2>
            <p>
              You agree not to use the service to violate any laws, infringe intellectual property rights, distribute harmful code, harass others, or engage in any activity that disrupts the service or other users.
              We may suspend or terminate accounts that violate these rules.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">5. Content and intellectual property</h2>
            <p>
              You retain ownership of the designs and content you create using the service.
              You grant us a limited license to host, store, and process your content as necessary to operate the service.
              We do not claim ownership of your original work.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">6. Payment and subscriptions</h2>
            <p>
              Some features may require payment.
              Subscription fees, billing cycles, and cancellation terms are presented at the time of purchase.
              All fees are non-refundable except as required by law or as otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">7. Termination</h2>
            <p>
              You may stop using the service at any time.
              We may suspend or terminate your access if you violate these terms or if we discontinue the service.
              Upon termination, your right to use the service will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">8. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, Aethera UI and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the service.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">9. Changes to terms</h2>
            <p>
              We may revise these Terms of Service from time to time.
              The most current version will always be posted on this page.
              Continued use of the service after changes constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">10. Contact us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us through the support channels provided in the app.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-white/40">
          © {new Date().getFullYear()} Aethera UI. All rights reserved.
          <span className="mx-2">·</span>
          <Link to="/privacy" className="text-white/50 no-underline transition-colors hover:text-white">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  )
}
