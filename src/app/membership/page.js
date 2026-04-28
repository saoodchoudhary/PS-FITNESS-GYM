import { PricingSection, FaqSection } from './MembershipClient';

export const metadata = {
  title: 'Membership Plans — PS FITNESS GYM',
  description:
    'Flexible gym membership plans at PS FITNESS GYM, Gurugram. Basic ₹999/mo, Pro ₹1,999/mo, Elite ₹3,499/mo. No hidden fees.',
};

export default function MembershipPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0a0a0a 0%,#1a0505 50%,#0a0a0a 100%)' }}
      >
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute inset-0 bg-grid opacity-25" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 text-sm font-semibold"
            style={{
              background: 'rgba(225,29,29,0.1)',
              border: '1px solid rgba(225,29,29,0.25)',
              color: '#e11d1d',
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: '#e11d1d', boxShadow: '0 0 6px #e11d1d' }}
            />
            Pricing
          </div>

          <h1 className="section-title text-white mb-5">
            Membership <span className="gradient-text">Plans</span>
          </h1>

          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#9ca3af' }}>
            Transparent pricing, no hidden fees. Choose the plan that matches
            your goals and budget.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              { icon: '✓', text: 'No Joining Fee' },
              { icon: '✓', text: 'Free Trial Session' },
              { icon: '✓', text: 'Cancel Anytime' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm" style={{ color: '#6b7280' }}>
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: 'rgba(225,29,29,0.15)', color: '#e11d1d' }}
                >
                  {icon}
                </span>
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-16" style={{ background: '#050505' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingSection />
        </div>
      </section>

      {/* ── COMPARE FEATURES ── */}
      <section className="py-16" style={{ background: '#0a0a0a' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: '#e11d1d' }}
            >
              Compare
            </p>
            <h2 className="section-title text-white">
              What's <span className="gradient-text">Included</span>
            </h2>
          </div>

          {/* Simple comparison strip */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.06)' }}
          >
            {[
              { feature: 'Gym Access Hours', basic: '6 AM–10 PM', pro: '5 AM–10 PM', elite: '24/7' },
              { feature: 'All Equipment', basic: '✓', pro: '✓', elite: '✓' },
              { feature: 'Personal Trainer Sessions', basic: '—', pro: '4/month', elite: '12/month' },
              { feature: 'Group Classes', basic: '—', pro: '✓', elite: '✓' },
              { feature: 'Nutrition Consulting', basic: '—', pro: 'Basic', elite: 'Full Plan' },
              { feature: 'Body Composition Analysis', basic: '—', pro: '—', elite: '✓' },
              { feature: 'Guest Passes', basic: '—', pro: '—', elite: '2/month' },
            ].map((row, i) => (
              <div
                key={row.feature}
                className="grid grid-cols-4 text-sm"
                style={{
                  background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                  borderBottom: '1px solid rgba(255,255,255,0.04)',
                }}
              >
                <div className="px-4 py-3.5 font-medium" style={{ color: '#9ca3af' }}>{row.feature}</div>
                <div className="px-4 py-3.5 text-center" style={{ color: row.basic === '—' ? '#374151' : '#d1d5db' }}>{row.basic}</div>
                <div className="px-4 py-3.5 text-center font-semibold" style={{ color: row.pro === '—' ? '#374151' : '#e11d1d' }}>{row.pro}</div>
                <div className="px-4 py-3.5 text-center font-semibold" style={{ color: row.elite === '—' ? '#374151' : '#ffffff' }}>{row.elite}</div>
              </div>
            ))}

            {/* Header row */}
            <div
              className="grid grid-cols-4 text-xs font-bold uppercase tracking-wider order-first"
              style={{ background: 'rgba(225,29,29,0.08)', borderBottom: '1px solid rgba(225,29,29,0.15)' }}
            >
              <div className="px-4 py-3" style={{ color: '#6b7280' }}>Feature</div>
              <div className="px-4 py-3 text-center" style={{ color: '#9ca3af' }}>Basic</div>
              <div className="px-4 py-3 text-center" style={{ color: '#e11d1d' }}>Pro ★</div>
              <div className="px-4 py-3 text-center" style={{ color: '#ffffff' }}>Elite</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24" style={{ background: '#050505' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 text-sm font-semibold"
              style={{
                background: 'rgba(225,29,29,0.1)',
                border: '1px solid rgba(225,29,29,0.25)',
                color: '#e11d1d',
              }}
            >
              FAQ
            </div>
            <h2 className="section-title text-white">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>
          <FaqSection />
        </div>
      </section>
    </>
  );
}