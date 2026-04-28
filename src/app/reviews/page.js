"use client"
import Link from 'next/link';

// export const metadata = {
//   title: 'Member Reviews — PS FITNESS GYM',
//   description:
//     'See what 398 members say about PS FITNESS GYM, Gurugram. 5.0 star rated gym with outstanding results and top-class service.',
// };

const reviews = [
  { name: 'Arjun Mehta',    date: 'March 2025',    stars: 5, text: 'Best gym in Gurugram! Lost 15 kg in just 4 months. The trainers are incredibly knowledgeable and always push you to your limits. The equipment is modern and well-maintained. Highly recommended!' },
  { name: 'Sneha Kapoor',   date: 'February 2025', stars: 5, text: 'As a woman, I always felt intimidated by gyms, but PS FITNESS GYM is so welcoming and safe. The female trainers are amazing. I have toned up significantly in 3 months.' },
  { name: 'Rahul Verma',    date: 'January 2025',  stars: 5, text: 'Great value for money! The Pro plan gives you so much for ₹1,999. Personal trainer sessions included, group classes, and the nutrition guidance alone is worth the price.' },
  { name: 'Priya Nair',     date: 'December 2024', stars: 5, text: 'Started as a complete beginner and never felt judged. Every trainer here genuinely cares about your progress. The vibe is positive and motivating every single day.' },
  { name: 'Karan Sethi',    date: 'November 2024', stars: 5, text: 'I travel frequently and have trained in many gyms across India. PS FITNESS GYM ranks among the best in terms of equipment quality, cleanliness, and trainer expertise.' },
  { name: 'Anita Sharma',   date: 'October 2024',  stars: 5, text: 'The yoga sessions with Neha are absolutely transformative. She combines traditional yoga with modern sports science. My flexibility and mental clarity have improved massively.' },
  { name: 'Vikram Singh',   date: 'September 2024',stars: 5, text: "Gained 10 kg of muscle in 6 months under Amit's guidance. His bodybuilding program is intense but extremely effective. The nutrition plan made all the difference." },
  { name: 'Deepika Joshi',  date: 'August 2024',   stars: 5, text: 'Postpartum fitness recovery was my goal and Pooja designed a perfect program for me. Gentle, effective, and empowering. I feel stronger than I did before pregnancy!' },
  { name: 'Suresh Patel',   date: 'July 2024',     stars: 5, text: 'Great gym with a great atmosphere. Clean, spacious, and never overcrowded even during peak hours. The staff is always friendly and helpful. 100% recommended.' },
  { name: 'Meera Reddy',    date: 'June 2024',     stars: 5, text: 'The HIIT classes with Vijay are insane but the results are incredible. Lost 8 kg and built visible muscle in just 2 months. Energy levels through the roof!' },
  { name: 'Aditya Kumar',   date: 'May 2024',      stars: 5, text: 'Very affordable plans for what you get. The facilities rival gyms charging 3x more. The trainers are certified and really know their stuff. Highly satisfied.' },
  { name: 'Ritu Agarwal',   date: 'April 2024',    stars: 5, text: 'The community at PS FITNESS GYM is what sets it apart. Everyone is supportive, the trainers are encouraging, and there is zero toxic gym culture here. Love it!' },
];

/* Avatar initials color palette — red shades only */
const avatarColors = [
  { bg: '#e11d1d', text: '#fff' },
  { bg: '#b91c1c', text: '#fff' },
  { bg: '#991b1b', text: '#fff' },
  { bg: '#7f1d1d', text: '#fff' },
  { bg: '#c0392b', text: '#fff' },
  { bg: '#e74c3c', text: '#fff' },
];

/* Star SVG */
function StarIcon({ filled = true, size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? '#f59e0b' : 'none'} stroke={filled ? 'none' : '#374151'}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}

/* Google G logo */
function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function ReviewsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0a0a0a 0%,#1a0505 50%,#0a0a0a 100%)' }}
      >
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute inset-0 bg-grid opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold"
            style={{
              background: 'rgba(225,29,29,0.1)',
              border: '1px solid rgba(225,29,29,0.25)',
              color: '#e11d1d',
            }}
          >
            <GoogleIcon />
            Google Reviews
          </div>

          <h1 className="section-title text-white mb-10">
            What Our <span className="gradient-text">Members Say</span>
          </h1>

          {/* Big rating card */}
          <div
            className="inline-flex flex-col items-center gap-4 px-12 py-8 rounded-3xl mx-auto"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(225,29,29,0.2)',
              boxShadow: '0 0 60px rgba(225,29,29,0.08)',
            }}
          >
            {/* Score */}
            <div className="flex items-end gap-3">
              <span
                style={{
                  fontSize: 'clamp(4rem,8vw,5.5rem)',
                  fontWeight: 900,
                  color: '#e11d1d',
                  fontFamily: 'Oswald, sans-serif',
                  lineHeight: 1,
                }}
              >
                5.0
              </span>
              <div className="pb-2 text-left">
                {/* Stars */}
                <div className="flex gap-1 mb-1">
                  {[1,2,3,4,5].map((s) => <StarIcon key={s} size={22} />)}
                </div>
                <p className="text-xs" style={{ color: '#6b7280' }}>Google Rating</p>
              </div>
            </div>

            <p style={{ color: '#9ca3af', fontSize: '0.95rem' }}>
              Based on{' '}
              <strong className="text-white font-bold">398 verified reviews</strong>
            </p>

            <a
              href="https://www.google.com/maps/place/PS+FITNESS+GYM/@28.4736389,77.030209,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#ffffff',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
            >
              <GoogleIcon />
              View on Google Maps
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── RATING BREAKDOWN ── */}
      <section className="py-16" style={{ background: '#050505' }}>
        <div className="max-w-lg mx-auto px-4">
          <h2
            className="text-center mb-8 font-bold text-white"
            style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.4rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}
          >
            Rating Breakdown
          </h2>

          <div className="space-y-3">
            {[
              { stars: 5, count: 380, pct: 96 },
              { stars: 4, count: 14,  pct: 4  },
              { stars: 3, count: 3,   pct: 1  },
              { stars: 2, count: 1,   pct: 0  },
              { stars: 1, count: 0,   pct: 0  },
            ].map(({ stars, count, pct }) => (
              <div key={stars} className="flex items-center gap-3">
                {/* Stars label */}
                <div className="flex items-center gap-1 w-16 flex-shrink-0 justify-end">
                  <span className="text-sm font-semibold" style={{ color: '#9ca3af' }}>{stars}</span>
                  <StarIcon size={13} filled={count > 0} />
                </div>

                {/* Bar */}
                <div
                  className="flex-1 h-2.5 rounded-full overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${pct}%`,
                      background: pct > 50
                        ? 'linear-gradient(90deg, #e11d1d, #ff4444)'
                        : pct > 0
                        ? 'rgba(225,29,29,0.5)'
                        : 'rgba(255,255,255,0.05)',
                      transition: 'width 0.6s ease',
                    }}
                  />
                </div>

                {/* Count */}
                <span
                  className="text-sm w-8 flex-shrink-0"
                  style={{ color: count > 0 ? '#9ca3af' : '#374151' }}
                >
                  {count}
                </span>
              </div>
            ))}
          </div>

          {/* Summary strip */}
          <div
            className="mt-8 grid grid-cols-3 rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.05)' }}
          >
            {[
              { label: 'Total Reviews', value: '398' },
              { label: '5-Star Reviews', value: '96%' },
              { label: 'Avg. Rating',    value: '5.0' },
            ].map(({ label, value }, i) => (
              <div
                key={label}
                className="text-center py-4"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  borderRight: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                }}
              >
                <p
                  className="font-black"
                  style={{ color: '#e11d1d', fontFamily: 'Oswald, sans-serif', fontSize: '1.4rem' }}
                >
                  {value}
                </p>
                <p className="text-xs mt-0.5" style={{ color: '#6b7280' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS GRID ── */}
      <section className="py-16" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="text-center mb-12">
            <h2
              className="text-white"
              style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: 'clamp(1.6rem,3vw,2.2rem)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              All <span className="gradient-text">Reviews</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r, i) => {
              const av = avatarColors[i % avatarColors.length];
              return (
                <div
                  key={r.name + r.date}
                  className="flex flex-col rounded-2xl p-5"
                  style={{
                    background: '#111',
                    border: '1px solid rgba(255,255,255,0.06)',
                    transition: 'border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(225,29,29,0.25)';
                    e.currentTarget.style.boxShadow   = '0 4px 24px rgba(225,29,29,0.08)';
                    e.currentTarget.style.transform   = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.boxShadow   = 'none';
                    e.currentTarget.style.transform   = 'translateY(0)';
                  }}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                        style={{ background: av.bg, color: av.text, fontFamily: 'Oswald, sans-serif' }}
                      >
                        {r.name[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm leading-tight">{r.name}</p>
                        <p className="text-xs mt-0.5" style={{ color: '#4b5563' }}>{r.date}</p>
                      </div>
                    </div>
                    <GoogleIcon />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: r.stars }).map((_, si) => (
                      <StarIcon key={si} size={13} />
                    ))}
                  </div>

                  {/* Review text */}
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: '#9ca3af' }}
                  >
                    &ldquo;{r.text}&rdquo;
                  </p>

                  {/* Verified tag */}
                  <div className="flex items-center gap-1.5 mt-4">
                    <svg width="11" height="11" fill="none" stroke="#e11d1d" strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-xs" style={{ color: '#4b5563' }}>Verified Google Review</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WRITE A REVIEW CTA ── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0d0d0d 0%,#1a0505 100%)' }}
      >
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 50% 70% at 50% 110%, rgba(225,29,29,0.1) 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-2xl mx-auto px-4 text-center">
          {/* Icon */}
          <div
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6"
            style={{
              background: 'rgba(225,29,29,0.1)',
              border: '1px solid rgba(225,29,29,0.25)',
            }}
          >
            <svg width="26" height="26" fill="none" stroke="#e11d1d" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <h2
            className="text-white mb-4"
            style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: 'clamp(1.6rem,4vw,2.4rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.03em',
            }}
          >
            Happy with your <span className="gradient-text">Experience?</span>
          </h2>

          <p className="text-lg mb-10 leading-relaxed" style={{ color: '#9ca3af' }}>
            Leave us a review on Google and help others discover PS FITNESS GYM.
            Your feedback means the world to us.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.google.com/maps/place/PS+FITNESS+GYM/@28.4736389,77.030209,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <GoogleIcon />
              Write a Google Review
            </a>
            <Link href="/join" className="btn-secondary">
              Join Us Today
            </Link>
          </div>

          {/* Social proof nudge */}
          <p className="mt-8 text-xs" style={{ color: '#374151' }}>
            Join 398+ members who already shared their transformation story
          </p>
        </div>
      </section>
    </>
  );
}