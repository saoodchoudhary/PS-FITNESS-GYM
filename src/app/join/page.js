
import JoinForm from './JoinForm';

export const metadata = {
  title: 'Join Now',
  description: 'Join PS FITNESS GYM today and start your transformation. Limited spots available. Free fitness assessment included.',
};

const benefits = [
  'Free fitness assessment (₹500 value)',
  'Personalised workout plan',
  'Expert trainer consultation',
  'No joining fee this month',
  'Cancel anytime, no lock-in',
  'Inclusive & welcoming community',
];

const badges = [
  { icon: '🏆', text: '5.0 Star Rated' },
  { icon: '✅', text: '398 Reviews' },
  { icon: '🔒', text: 'Safe & Secure' },
  { icon: '💯', text: 'Results Guaranteed' },
];

export default function JoinPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-10 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0a0a0a 0%,#0f1a0f 50%,#0a0a0a 100%)' }}>
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold"
            style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.4)', color: '#ef4444' }}>
            <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
            Limited Spots Available — Only 12 left this month!
          </div>
          <h1 className="section-title text-white mb-4">
            Start Your{' '}
            <span className="gradient-text">Transformation Today</span>
          </h1>
          <p className="text-lg max-w-xl mx-auto mb-8" style={{ color: '#9ca3af' }}>
            Join 500+ members at Gurugram's top-rated gym. Fill in the form and we'll get you started with a FREE session.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            {badges.map((b) => (
              <div key={b.text} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
                style={{ background: 'rgba(57,255,20,0.08)', border: '1px solid rgba(57,255,20,0.2)', color: '#d1d5db' }}>
                <span>{b.icon}</span>
                <span>{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Benefits */}
      <section className="py-16" style={{ background: '#050505' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="glass-card p-8" style={{ border: '1px solid rgba(57,255,20,0.2)' }}>
              <h2 className="text-xl font-bold text-white mb-6">
                Claim Your <span className="gradient-text">Free Trial</span>
              </h2>
              <JoinForm />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                What You <span className="gradient-text">Get</span>
              </h2>
              <ul className="space-y-4 mb-10">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(57,255,20,0.1)' }}>
                      <svg width="16" height="16" fill="none" stroke="#39ff14" strokeWidth="2.5" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span style={{ color: '#d1d5db' }}>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl p-6"
                style={{ background: 'linear-gradient(135deg,rgba(57,255,20,0.08),rgba(57,255,20,0.03))', border: '1px solid rgba(57,255,20,0.2)' }}>
                <div className="text-3xl mb-3">💯</div>
                <h3 className="font-bold text-white text-lg mb-2">30-Day Results Guarantee</h3>
                <p className="text-sm" style={{ color: '#9ca3af' }}>
                  If you do not see measurable progress within your first 30 days, we will extend your membership for free.
                </p>
              </div>
              <div className="mt-6 rounded-xl p-4"
                style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
                <p className="text-sm font-semibold" style={{ color: '#ef4444' }}>
                  Only 12 spots remaining for this month's intake
                </p>
                <p className="text-xs mt-1" style={{ color: '#6b7280' }}>
                  New batches start every month. Secure your spot today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
