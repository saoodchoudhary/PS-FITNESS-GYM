import GalleryClient from './GalleryClient';

export const metadata = {
  title: 'Gallery — PS FITNESS GYM',
  description:
    "Explore the PS FITNESS GYM gallery – modern equipment, training sessions, events and the community at Gurugram's premier gym.",
};

export default function GalleryPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0a0a0a 0%,#1a0505 50%,#0a0a0a 100%)' }}
      >
        {/* Red radial glow */}
        <div className="absolute inset-0 bg-radial-glow" />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-grid opacity-40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 text-sm font-semibold"
            style={{
              background: 'rgba(225,29,29,0.12)',
              border: '1px solid rgba(225,29,29,0.25)',
              color: '#e11d1d',
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: '#e11d1d', animation: 'pulse-glow 2s ease-in-out infinite' }}
            />
            Our Gym — Sector 12, Gurugram
          </div>

          <h1 className="section-title text-white mb-5">
            Photo <span className="gradient-text">Gallery</span>
          </h1>

          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#9ca3af' }}>
            Take a visual tour of our world-class facilities, intense training sessions,
            and the vibrant PS FITNESS community.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {[
              { value: '500+', label: 'Members' },
              { value: '10+', label: 'Trainers' },
              { value: '5.0 ⭐', label: 'Rating' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-black" style={{ color: '#e11d1d', fontFamily: 'Oswald, sans-serif' }}>
                  {value}
                </p>
                <p className="text-xs uppercase tracking-widest mt-1" style={{ color: '#6b7280' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY GRID ── */}
      <section className="py-16" style={{ background: '#050505' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryClient />
        </div>
      </section>

      {/* ── VIDEO TOUR ── */}
      <section className="py-24" style={{ background: '#0a0a0a' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: '#e11d1d' }}
            >
              Video Tour
            </p>
            <h2 className="section-title text-white">
              See Us In <span className="gradient-text">Action</span>
            </h2>
            <p className="mt-4 max-w-lg mx-auto" style={{ color: '#9ca3af' }}>
              Watch a walkthrough of our facilities and meet the team that makes PS FITNESS GYM special.
            </p>
          </div>

          {/* Video placeholder — styled red/black */}
          <div
            className="rounded-2xl overflow-hidden flex items-center justify-center relative"
            style={{
              background: 'linear-gradient(135deg,#111 0%,#1a0505 50%,#111 100%)',
              border: '1px solid rgba(225,29,29,0.2)',
              aspectRatio: '16/9',
              boxShadow: '0 0 60px rgba(225,29,29,0.08), 0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            {/* Background pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 25% 50%, rgba(225,29,29,0.15) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(225,29,29,0.1) 0%, transparent 50%)',
              }}
            />

            {/* Play button group */}
            <div className="relative text-center">
              {/* Outer pulse ring */}
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-5 relative"
                style={{ background: 'rgba(225,29,29,0.08)', border: '1px solid rgba(225,29,29,0.2)' }}
              >
                {/* Inner circle */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    background: 'rgba(225,29,29,0.15)',
                    border: '2px solid #e11d1d',
                    boxShadow: '0 0 20px rgba(225,29,29,0.3)',
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    fill="#e11d1d"
                    viewBox="0 0 24 24"
                    style={{ marginLeft: '3px' }}
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>

              <p
                className="font-bold text-lg mb-1"
                style={{ color: '#ffffff', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.05em' }}
              >
                GYM TOUR VIDEO
              </p>
              <span
                className="inline-block text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest"
                style={{
                  background: 'rgba(225,29,29,0.15)',
                  border: '1px solid rgba(225,29,29,0.3)',
                  color: '#e11d1d',
                }}
              >
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0d0d0d 0%,#1a0505 100%)' }}
      >
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Like What You <span className="gradient-text">See?</span>
          </h2>
          <p className="mb-8 text-lg" style={{ color: '#9ca3af' }}>
            Visit us in person and experience PS FITNESS GYM firsthand — the equipment, the energy, the community.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/join" className="btn-primary">🔥 Join Now</a>
            <a href="/contact" className="btn-secondary">Book a Visit</a>
          </div>
        </div>
      </section>
    </>
  );
}