
import { PricingSection, FaqSection } from './MembershipClient';

export const metadata = {
  title: 'Membership Plans',
  description: 'Flexible gym membership plans at PS FITNESS GYM, Gurugram. Basic ₹999/mo, Pro ₹1,999/mo, Elite ₹3,499/mo. No hidden fees.',
};

export default function MembershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0a0a0a 0%,#0f1a0f 50%,#0a0a0a 100%)' }}>
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#39ff14' }}>Pricing</p>
          <h1 className="section-title text-white mb-6">
            Membership <span className="gradient-text">Plans</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#9ca3af' }}>
            Transparent pricing, no hidden fees. Choose the plan that matches your goals and budget.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16" style={{ background: '#050505' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingSection />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" style={{ background: '#0a0a0a' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#39ff14' }}>FAQ</p>
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
