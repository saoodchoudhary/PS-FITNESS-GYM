"use client"
import Link from 'next/link';

// export const metadata = {
//   title: 'Services',
//   description: 'Explore all fitness services at PS FITNESS GYM – Weight Training, Personal Training, Fat Loss, Muscle Gain, Cardio, Yoga and more in Gurugram.',
// };

const RED        = '#e11d1d';
const RED_BRIGHT = '#ff2222';
const RED_BORDER = 'rgba(225,29,29,0.22)';
const RED_SOFT   = 'rgba(225,29,29,0.10)';
const MUTED      = '#9ca3af';
const CARD_BG    = '#111111';

const mainServices = [
  {
    icon: '🏋️',
    title: 'Weight Training',
    tag: 'Most Popular',
    desc: 'Comprehensive strength training programs designed by certified coaches. From beginner to advanced, we build your program around your current level and goals.',
    benefits: ['Progressive overload programs', 'Free weights & machines', 'Strength & hypertrophy focus', 'Form coaching included'],
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
  },
  {
    icon: '👤',
    title: 'Personal Training',
    tag: 'Premium',
    desc: 'One-on-one sessions with a dedicated certified trainer who creates and evolves your program weekly based on your progress and feedback.',
    benefits: ['Fully personalised program', 'Flexible scheduling', 'Direct trainer accountability', 'Weekly plan adjustments'],
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
  },
  {
    icon: '🔥',
    title: 'Fat Loss Program',
    tag: 'Bestseller',
    desc: 'Science-backed fat loss programs combining HIIT, cardio, resistance training and nutrition guidance to maximise your caloric deficit safely.',
    benefits: ['HIIT & cardio protocols', 'Nutrition planning included', 'Body composition tracking', 'Sustainable lifestyle approach'],
    img: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80',
  },
  {
    icon: '💪',
    title: 'Muscle Gain',
    tag: 'Advanced',
    desc: 'Hypertrophy-focused training with optimised volume and intensity. Includes diet recommendations and supplement guidance for maximum muscle growth.',
    benefits: ['Hypertrophy-specific training', 'Diet & supplement guidance', 'Progress tracking system', 'Body measurement analysis'],
    img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80',
  },
];

const additionalServices = [
  { icon: '🚴', title: 'Cardio Training',      desc: 'Treadmills, bikes and rowing machines with guided programs for endurance and heart health.' },
  { icon: '🧘', title: 'Yoga & Flexibility',   desc: 'Structured yoga sessions for mobility, stress relief and active recovery between sessions.' },
  { icon: '🥗', title: 'Nutrition Consulting', desc: 'Personalised meal plans and macro calculations from our certified nutrition advisor.' },
  { icon: '👥', title: 'Group Classes',        desc: 'High-energy group sessions including Zumba, CrossFit-style WODs, and circuit training.' },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0a0a0a 0%,#1a0505 50%,#0a0a0a 100%)' }}
      >
        {/* Atmospheric glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(225,29,29,0.13) 0%, transparent 70%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p
              className="text-sm font-bold uppercase tracking-widest mb-3"
              style={{ color: RED, fontFamily: 'Oswald, sans-serif' }}
            >
              What We Offer
            </p>
            <h1
              className="text-white mb-5"
              style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
                fontWeight: 700,
                lineHeight: 1.05,
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
              }}
            >
              Our <span style={{ color: RED }}>Services</span>
            </h1>
            <div className="w-14 h-1 rounded mb-6" style={{ background: RED }} />
            <p className="text-base sm:text-lg max-w-xl leading-relaxed" style={{ color: MUTED }}>
              From beginner programs to elite performance training — every service is designed for real results.
            </p>
          </div>

          {/* Stat strip */}
          <div className="flex flex-wrap gap-5 mt-10">
            {[
              { n: '8+', label: 'Programs' },
              { n: '10+', label: 'Certified Trainers' },
              { n: '500+', label: 'Active Members' },
              { n: '30', label: 'Day Guarantee' },
            ].map(({ n, label }) => (
              <div key={label} className="flex items-baseline gap-1.5">
                <span
                  style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.6rem', fontWeight: 800, color: RED }}
                >
                  {n}
                </span>
                <span className="text-sm" style={{ color: '#6b7280' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Services — alternating split layout ── */}
      <section className="py-24" style={{ background: '#050505' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((s, i) => (
              <div
                key={s.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Content — alternates side */}
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  {/* Tag */}
                  <span
                    className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest"
                    style={{ background: RED_SOFT, border: `1px solid ${RED_BORDER}`, color: RED, fontFamily: 'Oswald, sans-serif' }}
                  >
                    {s.tag}
                  </span>

                  <h2
                    className="text-white mb-4"
                    style={{
                      fontFamily: 'Oswald, sans-serif',
                      fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em',
                      lineHeight: 1.1,
                    }}
                  >
                    {s.icon} {s.title}
                  </h2>

                  <p className="leading-relaxed mb-7 text-base" style={{ color: MUTED }}>{s.desc}</p>

                  {/* Benefits */}
                  <ul className="space-y-3 mb-8">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: RED_SOFT, border: `1px solid ${RED_BORDER}` }}
                        >
                          <svg width="11" height="11" fill="none" stroke={RED} strokeWidth="2.5" viewBox="0 0 24 24">
                            <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm" style={{ color: '#d1d5db' }}>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/join"
                    className="inline-flex items-center gap-2 rounded-xl font-bold"
                    style={{
                      background: RED,
                      color: '#fff',
                      fontFamily: 'Oswald, sans-serif',
                      letterSpacing: '0.09em',
                      textTransform: 'uppercase',
                      fontSize: '0.9rem',
                      padding: '13px 28px',
                      transition: 'background 0.2s ease, box-shadow 0.2s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = RED_BRIGHT; e.currentTarget.style.boxShadow = '0 0 24px rgba(225,29,29,0.4)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = RED; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    Get Started
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>

                {/* Image — alternates side */}
                <div className={`relative rounded-2xl overflow-hidden group ${i % 2 === 1 ? 'lg:order-1' : ''}`} style={{ aspectRatio: '4/3' }}>
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    style={{ filter: 'brightness(0.65)', transition: 'transform 0.6s ease, filter 0.4s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.filter = 'brightness(0.8)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'brightness(0.65)'; }}
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(135deg, rgba(225,29,29,0.12) 0%, transparent 60%, rgba(0,0,0,0.5) 100%)' }}
                  />
                  {/* Corner tag */}
                  <div
                    className="absolute top-4 left-4 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest"
                    style={{ background: RED, color: '#fff', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.07em' }}
                  >
                    {s.tag}
                  </div>
                  {/* Bottom title bar */}
                  <div
                    className="absolute bottom-0 left-0 right-0 px-5 py-4"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)' }}
                  >
                    <p
                      className="text-white font-bold"
                      style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}
                    >
                      {s.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div style={{ height: '2px', background: `linear-gradient(to right, transparent, ${RED}, transparent)` }} />

      {/* ── Additional Services ── */}
      <section className="py-24" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-14">
            <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: RED, fontFamily: 'Oswald, sans-serif' }}>
              More Options
            </p>
            <h2
              className="text-white"
              style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                lineHeight: 1.1,
              }}
            >
              Additional <span style={{ color: RED }}>Services</span>
            </h2>
            <div className="mt-3 w-14 h-1 rounded" style={{ background: RED }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {additionalServices.map((s, i) => (
              <div
                key={s.title}
                className="p-6 rounded-2xl relative overflow-hidden group cursor-default"
                style={{
                  background: CARD_BG,
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = RED_BORDER;
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(225,29,29,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Number watermark */}
                <div
                  className="absolute top-3 right-4 font-black pointer-events-none select-none"
                  style={{ fontFamily: 'Oswald, sans-serif', fontSize: '3.5rem', color: 'rgba(225,29,29,0.05)', lineHeight: 1 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-2xl"
                  style={{ background: RED_SOFT, border: `1px solid ${RED_BORDER}` }}
                >
                  {s.icon}
                </div>

                <h3
                  className="font-bold text-white mb-2"
                  style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.05rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden py-24" style={{ background: '#050505' }}>
        {/* Red glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(225,29,29,0.08) 0%, transparent 70%)' }}
        />

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: RED, fontFamily: 'Oswald, sans-serif' }}>
            Get Started
          </p>
          <h2
            className="text-white mb-5"
            style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              lineHeight: 1.05,
            }}
          >
            Ready To <span style={{ color: RED }}>Start?</span>
          </h2>
          <p className="text-base mb-10 max-w-lg mx-auto" style={{ color: MUTED }}>
            Book a free consultation and we&apos;ll design the perfect program for you — no commitment required.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/join"
              className="inline-flex items-center gap-2 rounded-xl font-bold"
              style={{
                background: RED,
                color: '#fff',
                fontFamily: 'Oswald, sans-serif',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontSize: '0.95rem',
                padding: '14px 32px',
                transition: 'background 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = RED_BRIGHT; e.currentTarget.style.boxShadow = '0 0 28px rgba(225,29,29,0.45)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = RED; e.currentTarget.style.boxShadow = 'none'; }}
            >
              🔥 Join Now — Free Trial
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl font-semibold"
              style={{
                background: 'transparent',
                color: '#fff',
                border: '1.5px solid rgba(255,255,255,0.2)',
                fontFamily: 'Oswald, sans-serif',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontSize: '0.9rem',
                padding: '14px 28px',
                transition: 'border-color 0.2s ease, background 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.background = 'transparent'; }}
            >
              Contact Us
            </Link>
          </div>

          <p className="text-xs mt-6" style={{ color: '#4b5563' }}>
            Free fitness assessment included · No joining fee this month
          </p>
        </div>
      </section>
    </>
  );
}