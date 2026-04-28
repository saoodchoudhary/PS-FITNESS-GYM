import JoinForm from './JoinForm';

export const metadata = {
  title: 'Join Now',
  description: 'Join PS FITNESS GYM today and start your transformation. Limited spots available. Free fitness assessment included.',
};

const RED        = '#e11d1d';
const RED_BORDER = 'rgba(225,29,29,0.22)';
const RED_SOFT   = 'rgba(225,29,29,0.10)';

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
  { icon: '✅', text: '398 Google Reviews' },
  { icon: '🔒', text: 'Safe & Secure' },
  { icon: '💯', text: 'Results Guaranteed' },
];

export default function JoinPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="pt-32 pb-14 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0a0a0a 0%,#1a0505 50%,#0a0a0a 100%)' }}
      >
        {/* Red atmospheric glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(225,29,29,0.13) 0%, transparent 70%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Urgency badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold"
            style={{ background: 'rgba(225,29,29,0.12)', border: `1px solid ${RED_BORDER}`, color: RED, fontFamily: 'Oswald, sans-serif', letterSpacing: '0.04em' }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: RED, boxShadow: `0 0 6px ${RED}`, animation: 'pulse 2s infinite' }} />
            🔥 Limited Spots — Only 12 Left This Month!
          </div>

          {/* Headline */}
          <h1
            className="text-white mb-5"
            style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}
          >
            Start Your{' '}
            <span style={{ color: RED }}>Transformation Today</span>
          </h1>

          <p className="text-base sm:text-lg max-w-xl mx-auto mb-8" style={{ color: '#9ca3af' }}>
            Join 500+ members at Gurugram&apos;s top-rated gym. Fill in the form and we&apos;ll get you started with a <strong className="text-white">FREE session</strong>.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {badges.map((b) => (
              <div
                key={b.text}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
                style={{
                  background: 'rgba(225,29,29,0.08)',
                  border: `1px solid ${RED_BORDER}`,
                  color: '#d1d5db',
                }}
              >
                <span>{b.icon}</span>
                <span>{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + Benefits ── */}
      <section className="py-20" style={{ background: '#050505' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Left: Form card */}
            <div
              className="rounded-2xl p-8"
              style={{
                background: '#0f0f0f',
                border: `1px solid ${RED_BORDER}`,
                boxShadow: '0 0 40px rgba(225,29,29,0.06)',
              }}
            >
              {/* Card header */}
              <div className="mb-6 pb-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: RED, fontFamily: 'Oswald, sans-serif' }}>
                  Free Trial
                </p>
                <h2 className="text-white font-bold" style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.6rem', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                  Claim Your Free Session
                </h2>
                <p className="text-sm mt-1" style={{ color: '#6b7280' }}>Takes less than 60 seconds to register</p>
              </div>

              <JoinForm />
            </div>

            {/* Right: Benefits */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: RED, fontFamily: 'Oswald, sans-serif' }}>Included</p>
              <h2
                className="text-white mb-7"
                style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em' }}
              >
                What You <span style={{ color: RED }}>Get</span>
              </h2>

              <ul className="space-y-4 mb-8">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-4">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(225,29,29,0.1)', border: '1px solid rgba(225,29,29,0.2)' }}
                    >
                      <svg width="15" height="15" fill="none" stroke={RED} strokeWidth="2.5" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-sm" style={{ color: '#d1d5db' }}>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Guarantee card */}
              <div
                className="rounded-2xl p-6 mb-5"
                style={{
                  background: 'linear-gradient(135deg,rgba(225,29,29,0.08) 0%,rgba(225,29,29,0.03) 100%)',
                  border: `1px solid ${RED_BORDER}`,
                }}
              >
                <div className="text-3xl mb-3">💯</div>
                <h3 className="font-bold text-white text-lg mb-2" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.03em', textTransform: 'uppercase' }}>
                  30-Day Results Guarantee
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
                  If you don&apos;t see measurable progress within your first 30 days, we will extend your membership for free. No questions asked.
                </p>
              </div>

              {/* Urgency card */}
              <div
                className="rounded-xl px-5 py-4 flex items-start gap-3"
                style={{ background: 'rgba(225,29,29,0.06)', border: `1px solid ${RED_BORDER}` }}
              >
                <span className="mt-0.5 w-2 h-2 rounded-full flex-shrink-0" style={{ background: RED, boxShadow: `0 0 6px ${RED}`, animation: 'pulse 2s infinite' }} />
                <div>
                  <p className="text-sm font-semibold" style={{ color: RED, fontFamily: 'Oswald, sans-serif', letterSpacing: '0.04em' }}>
                    Only 12 spots remaining for this month&apos;s intake
                  </p>
                  <p className="text-xs mt-1" style={{ color: '#6b7280' }}>
                    New batches start every month. Secure your spot today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}