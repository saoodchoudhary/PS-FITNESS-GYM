
import Link from 'next/link';

export const metadata = {
  title: 'Reviews',
  description: 'See what 398 members say about PS FITNESS GYM, Gurugram. 5.0 star rated gym with outstanding results and top-class service.',
};

const reviews = [
  { name: 'Arjun Mehta', date: 'March 2025', stars: 5, text: 'Best gym in Gurugram! Lost 15 kg in just 4 months. The trainers are incredibly knowledgeable and always push you to your limits. The equipment is modern and well-maintained. Highly recommended!' },
  { name: 'Sneha Kapoor', date: 'February 2025', stars: 5, text: 'As a woman, I always felt intimidated by gyms, but PS FITNESS GYM is so welcoming and safe. The female trainers are amazing. I have toned up significantly in 3 months.' },
  { name: 'Rahul Verma', date: 'January 2025', stars: 5, text: 'Great value for money! The Pro plan gives you so much for ₹1,999. Personal trainer sessions included, group classes, and the nutrition guidance alone is worth the price.' },
  { name: 'Priya Nair', date: 'December 2024', stars: 5, text: 'Started as a complete beginner and never felt judged. Every trainer here genuinely cares about your progress. The vibe is positive and motivating every single day.' },
  { name: 'Karan Sethi', date: 'November 2024', stars: 5, text: 'I travel frequently and have trained in many gyms across India. PS FITNESS GYM ranks among the best in terms of equipment quality, cleanliness, and trainer expertise.' },
  { name: 'Anita Sharma', date: 'October 2024', stars: 5, text: 'The yoga sessions with Neha are absolutely transformative. She combines traditional yoga with modern sports science. My flexibility and mental clarity have improved massively.' },
  { name: 'Vikram Singh', date: 'September 2024', stars: 5, text: 'Gained 10 kg of muscle in 6 months under Amit\'s guidance. His bodybuilding program is intense but extremely effective. The nutrition plan made all the difference.' },
  { name: 'Deepika Joshi', date: 'August 2024', stars: 5, text: 'Postpartum fitness recovery was my goal and Pooja designed a perfect program for me. Gentle, effective, and empowering. I feel stronger than I did before pregnancy!' },
  { name: 'Suresh Patel', date: 'July 2024', stars: 5, text: 'Great gym with a great atmosphere. Clean, spacious, and never overcrowded even during peak hours. The staff is always friendly and helpful. 100% recommended.' },
  { name: 'Meera Reddy', date: 'June 2024', stars: 5, text: 'The HIIT classes with Vijay are insane but the results are incredible. Lost 8 kg and built visible muscle in just 2 months. Energy levels through the roof!' },
  { name: 'Aditya Kumar', date: 'May 2024', stars: 5, text: 'Very affordable plans for what you get. The facilities rival gyms charging 3x more. The trainers are certified and really know their stuff. Highly satisfied.' },
  { name: 'Ritu Agarwal', date: 'April 2024', stars: 5, text: 'The community at PS FITNESS GYM is what sets it apart. Everyone is supportive, the trainers are encouraging, and there is zero toxic gym culture here. Love it!' },
];

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0a0a0a 0%,#0f1a0f 50%,#0a0a0a 100%)' }}>
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#39ff14' }}>Google Reviews</p>
          <h1 className="section-title text-white mb-6">
            What Our <span className="gradient-text">Members Say</span>
          </h1>
          {/* Rating display */}
          <div className="inline-flex flex-col items-center gap-3 p-8 rounded-2xl glass-card"
            style={{ border: '1px solid rgba(57,255,20,0.2)' }}>
            <p className="text-7xl font-black" style={{ color: '#39ff14' }}>5.0</p>
            <div className="flex gap-2">
              {[1,2,3,4,5].map((s) => (
                <svg key={s} width="28" height="28" fill="#39ff14" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <p style={{ color: '#9ca3af' }}>Based on <strong className="text-white">398 Google Reviews</strong></p>
            <a
              href="https://www.google.com/maps/place/PS+FITNESS+GYM/@28.4736389,77.030209,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm px-6 py-2"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Rating Bars */}
      <section className="py-16" style={{ background: '#050505' }}>
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-xl font-bold text-white mb-8 text-center">Rating Breakdown</h2>
          {[
            { stars: 5, count: 380, pct: 96 },
            { stars: 4, count: 14, pct: 4 },
            { stars: 3, count: 3, pct: 1 },
            { stars: 2, count: 1, pct: 0 },
            { stars: 1, count: 0, pct: 0 },
          ].map(({ stars, count, pct }) => (
            <div key={stars} className="flex items-center gap-4 mb-3">
              <span className="text-sm w-6 text-right font-semibold" style={{ color: '#9ca3af' }}>{stars}</span>
              <svg width="14" height="14" fill="#39ff14" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <div className="flex-1 h-2.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <div
                  className="h-full rounded-full"
                  style={{ width: `${pct}%`, background: 'linear-gradient(90deg,#39ff14,#2dd10f)' }}
                />
              </div>
              <span className="text-sm w-8" style={{ color: '#9ca3af' }}>{count}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div
                key={r.name + r.date}
                className="glass-card p-6"
                style={{ border: '1px solid rgba(57,255,20,0.08)' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
                      style={{ background: 'linear-gradient(135deg,#39ff14,#2dd10f)', color: '#000' }}
                    >
                      {r.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{r.name}</p>
                      <p className="text-xs" style={{ color: '#6b7280' }}>{r.date}</p>
                    </div>
                  </div>
                  {/* Google G */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <svg key={i} width="14" height="14" fill="#39ff14" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#d1d5db' }}>"{r.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps CTA */}
      <section className="py-20" style={{ background: '#050505' }}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Happy with your experience?</h2>
          <p className="mb-8" style={{ color: '#9ca3af' }}>Leave us a review on Google and help others discover PS FITNESS GYM.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.google.com/maps/place/PS+FITNESS+GYM/@28.4736389,77.030209,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Write a Google Review
            </a>
            <Link href="/join" className="btn-secondary">Join Us Today</Link>
          </div>
        </div>
      </section>
    </>
  );
}
