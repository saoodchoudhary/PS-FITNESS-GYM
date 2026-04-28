"use client"
import Link from 'next/link';

// export const metadata = {
//   title: 'Our Trainers — PS FITNESS GYM',
//   description:
//     'Meet the expert certified trainers at PS FITNESS GYM, Gurugram. Specializing in weight training, fat loss, yoga, nutrition, and more.',
// };

const trainers = [
  {
    name: 'Rahul Sharma',
    role: 'Head Trainer & Strength Coach',
    exp: '8 Years',
    specialization: 'Strength & Hypertrophy',
    certifications: ['ISSA Certified Personal Trainer', 'Strength & Conditioning Specialist'],
    emoji: '💪',
    bio: 'Rahul is a powerlifting enthusiast who has helped 200+ members build serious strength. Known for his technical expertise and motivating coaching style.',
    img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80',
  },
  {
    name: 'Priya Singh',
    role: 'Fat Loss Specialist',
    exp: '6 Years',
    specialization: 'Fat Loss & Cardio',
    certifications: ['ACE Certified', 'Nutrition Coaching Certified'],
    emoji: '🔥',
    bio: 'Priya specializes in sustainable fat loss and has transformed hundreds of clients through her evidence-based cardio and nutrition programs.',
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80',
  },
  {
    name: 'Amit Kumar',
    role: 'Bodybuilding Coach',
    exp: '10 Years',
    specialization: 'Muscle Building & Physique',
    certifications: ['NASM Certified', 'NPC Competitor', 'Sports Nutrition Specialist'],
    emoji: '🏆',
    bio: 'A competitive bodybuilder with 10 years of experience, Amit knows exactly how to sculpt physiques. His structured programs deliver measurable muscle gains.',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
  },
  {
    name: 'Neha Gupta',
    role: 'Yoga & Wellness Coach',
    exp: '7 Years',
    specialization: 'Yoga, Flexibility & Mindfulness',
    certifications: ['RYT-500 Yoga Alliance', 'Meditation Coach Certified'],
    emoji: '🧘',
    bio: 'Neha brings a holistic approach to fitness, combining yoga, breathwork and mindfulness. Perfect for recovery, stress relief and long-term wellness.',
    img: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=600&q=80',
  },
  {
    name: 'Vijay Yadav',
    role: 'Performance & HIIT Coach',
    exp: '5 Years',
    specialization: 'HIIT, CrossFit & Athletics',
    certifications: ['CrossFit Level 2 Trainer', 'NSCA-CPT Certified'],
    emoji: '⚡',
    bio: 'Vijay brings explosive energy to every session. His HIIT and functional fitness programs are challenging, fun, and highly effective.',
    img: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&q=80',
  },
  {
    name: 'Pooja Mehta',
    role: "Women's Fitness Specialist",
    exp: '6 Years',
    specialization: "Women's Fitness & Toning",
    certifications: ['ACSM Certified', 'Pre/Postnatal Fitness Expert'],
    emoji: '🌟',
    bio: "Pooja focuses on women's health, body toning and confidence-building. She creates safe, effective programs for all stages of a woman's fitness journey.",
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
  },
];

export default function TrainersPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0a0a0a 0%,#1a0505 50%,#0a0a0a 100%)' }}
      >
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute inset-0 bg-grid opacity-30" />

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
            Meet the Team
          </div>

          <h1 className="section-title text-white mb-5">
            Our Expert <span className="gradient-text">Trainers</span>
          </h1>

          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#9ca3af' }}>
            Certified professionals dedicated to helping you achieve your fitness goals
            safely, effectively, and faster than you thought possible.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-10 mt-10">
            {[
              { value: '10+', label: 'Expert Trainers' },
              { value: '40+', label: 'Certifications' },
              { value: '500+', label: 'Lives Changed' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p
                  className="text-3xl font-black"
                  style={{ color: '#e11d1d', fontFamily: 'Oswald, sans-serif' }}
                >
                  {value}
                </p>
                <p
                  className="text-xs uppercase tracking-widest mt-1"
                  style={{ color: '#6b7280' }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRAINER GRID ── */}
      <section className="py-24" style={{ background: '#050505' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((t) => (
              <div
                key={t.name}
                className="group overflow-hidden rounded-2xl flex flex-col"
                style={{
                  background: '#111',
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(225,29,29,0.35)';
                  e.currentTarget.style.boxShadow = '0 8px 40px rgba(225,29,29,0.12)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* ── Card Image / Avatar area ── */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: '220px' }}
                >
                  {/* Background image */}
                  <img
                    src={t.img}
                    alt={t.name}
                    width={600}
                    height={220}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    style={{
                      filter: 'brightness(0.45) saturate(0.8)',
                      transition: 'filter 0.4s ease, transform 0.4s ease',
                    }}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />

                  {/* Red gradient overlay at bottom */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to top, #111 0%, rgba(0,0,0,0.5) 50%, transparent 100%)',
                    }}
                  />

                  {/* Top-left: experience badge */}
                  <div
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: 'rgba(225,29,29,0.9)',
                      color: '#fff',
                      fontFamily: 'Oswald, sans-serif',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {t.exp}
                  </div>

                  {/* Top-right: emoji */}
                  <div
                    className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-lg"
                    style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
                  >
                    {t.emoji}
                  </div>

                  {/* Bottom: Name & Role overlaid on image */}
                  <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
                    <h3
                      className="text-lg font-bold text-white leading-tight"
                      style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.03em' }}
                    >
                      {t.name}
                    </h3>
                    <p
                      className="text-xs font-semibold mt-0.5"
                      style={{ color: '#e11d1d', letterSpacing: '0.04em' }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* ── Card Body ── */}
                <div className="flex flex-col flex-1 p-5 gap-4">

                  {/* Bio */}
                  <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
                    {t.bio}
                  </p>

                  {/* Specialisation chip */}
                  <div className="flex items-center gap-2">
                    <svg
                      width="13" height="13" fill="none"
                      stroke="#e11d1d" strokeWidth="2.5" viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        strokeLinecap="round" strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-xs font-semibold" style={{ color: '#d1d5db' }}>
                      {t.specialization}
                    </span>
                  </div>

                  {/* Divider */}
                  <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />

                  {/* Certifications */}
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-2.5"
                      style={{ color: '#4b5563' }}
                    >
                      Certifications
                    </p>
                    <ul className="space-y-1.5">
                      {t.certifications.map((c) => (
                        <li
                          key={c}
                          className="flex items-start gap-2 text-xs"
                          style={{ color: '#9ca3af' }}
                        >
                          {/* Red checkmark */}
                          <svg
                            width="13" height="13"
                            fill="none" stroke="#e11d1d"
                            strokeWidth="2.5" viewBox="0 0 24 24"
                            className="flex-shrink-0 mt-0.5"
                          >
                            <polyline
                              points="20 6 9 17 4 12"
                              strokeLinecap="round" strokeLinejoin="round"
                            />
                          </svg>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Book button — at bottom */}
                  <div className="mt-auto pt-2">
                    <Link
                      href="/join"
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold"
                      style={{
                        background: 'rgba(225,29,29,0.08)',
                        border: '1px solid rgba(225,29,29,0.2)',
                        color: '#e11d1d',
                        fontFamily: 'Oswald, sans-serif',
                        letterSpacing: '0.07em',
                        textTransform: 'uppercase',
                        transition: 'background 0.2s ease, box-shadow 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(225,29,29,0.18)';
                        e.currentTarget.style.boxShadow = '0 0 12px rgba(225,29,29,0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(225,29,29,0.08)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round"/>
                        <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round"/>
                        <line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round"/>
                      </svg>
                      Book a Session
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0d0d0d 0%,#1a0505 100%)' }}
      >
        <div className="absolute inset-0 bg-grid opacity-25" />

        {/* Glow spot */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(225,29,29,0.12) 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <div
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mx-auto mb-6"
            style={{
              background: 'rgba(225,29,29,0.12)',
              border: '1px solid rgba(225,29,29,0.25)',
            }}
          >
            <svg width="26" height="26" fill="none" stroke="#e11d1d" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23 21v-2a4 4 0 00-3-3.87" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <h2
            className="text-white mb-4"
            style={{
              fontFamily: 'Oswald, sans-serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.03em',
            }}
          >
            Train with the <span className="gradient-text">Best</span>
          </h2>

          <p className="text-lg mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: '#9ca3af' }}>
            Book a free trial session with one of our certified trainers and experience
            the PS FITNESS GYM difference firsthand.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/join" className="btn-primary">
              🔥 Book Free Trial
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>

          {/* Trust note */}
          <p className="mt-6 text-xs" style={{ color: '#4b5563' }}>
            No commitment · Free first session · Cancel anytime
          </p>
        </div>
      </section>
    </>
  );
}