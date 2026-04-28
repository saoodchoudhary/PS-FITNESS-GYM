import Link from 'next/link';

export const metadata = {
  title: 'About Us',
  description: 'Learn about PS FITNESS GYM – Gurugram\'s top-rated gym in Sector 12. Our story, mission, and why we\'re the best choice for your fitness journey.',
};

const whyChooseUs = [
  { icon: '🏆', title: 'Proven Track Record', desc: '3+ years of transforming lives with 500+ success stories and a flawless 5.0 rating on Google.' },
  { icon: '👨‍🏫', title: 'Expert Guidance', desc: 'Our certified trainers create personalised plans backed by science, not guesswork.' },
  { icon: '🔒', title: 'Safe & Hygienic', desc: 'Sanitised equipment, clean changing rooms, and a respectful atmosphere for all members.' },
  { icon: '📍', title: 'Prime Location', desc: 'Conveniently situated in Sector 12, Gurugram with easy access from all parts of the city.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0a0a0a 0%,#150505 50%,#0a0a0a 100%)' }}
      >
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#e11d1d' }}>About Us</p>
          <h1 className="section-title text-white mb-6">
            About <span className="gradient-text">PS FITNESS GYM</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#9ca3af' }}>
            Gurugram\'s most-loved fitness destination – where hard work meets expert guidance to create extraordinary results.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24" style={{ background: '#050505' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#e11d1d' }}>Our Story</p>
              <h2 className="section-title text-white mb-6">
                Built With Passion,<br/>
                <span className="gradient-text">Driven by Results</span>
              </h2>
              <div className="space-y-4" style={{ color: '#9ca3af' }}>
                <p>PS FITNESS GYM was born from a simple belief: that premium fitness should be accessible to everyone. Founded in Sector 12, Gurugram, we started as a small community gym with big dreams and even bigger determination.</p>
                <p>Over three years, we\'ve grown into one of Gurugram\'s most trusted fitness centers, with over 500 active members and a team of 10+ certified trainers. Our 5.0 star rating across 398 Google reviews speaks for itself.</p>
                <p>We believe fitness is for every body – regardless of age, gender, experience, or background. That\'s why we\'re proudly beginner-friendly and LGBTQ+ inclusive.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Our Gym', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80' },
                { label: 'Equipment', img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&q=80' },
                { label: 'Training', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80' },
                { label: 'Community', img: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=400&q=80' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl aspect-square overflow-hidden relative"
                  style={{ border: '1px solid rgba(225,29,29,0.2)' }}
                >
                  <img src={item.img} alt={item.label} className="w-full h-full object-cover" style={{ filter: 'brightness(0.7)' }} />
                  <div className="absolute bottom-0 left-0 right-0 p-3" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                    <span className="text-xs font-bold px-2 py-1 rounded" style={{ background: 'rgba(225,29,29,0.8)', color: '#fff' }}>
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8" style={{ border: '1px solid rgba(225,29,29,0.15)' }}>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p style={{ color: '#9ca3af' }}>
                To make world-class fitness accessible to every individual in Gurugram. We combine expert coaching, modern equipment, and a supportive community to help our members achieve sustainable health transformations.
              </p>
            </div>
            <div className="glass-card p-8" style={{ border: '1px solid rgba(239,68,68,0.15)' }}>
              <div className="text-4xl mb-4">🔭</div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p style={{ color: '#9ca3af' }}>
                To become the most transformative fitness community in India – where every person who walks through our doors leaves stronger, healthier, and more confident than when they arrived.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24" style={{ background: '#050505' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#e11d1d' }}>Why PS FITNESS</p>
            <h2 className="section-title text-white">
              Why Choose <span className="gradient-text">Us?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="glass-card p-6 text-center" style={{ border: '1px solid rgba(225,29,29,0.1)' }}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm" style={{ color: '#9ca3af' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to Trainers */}
      <section className="py-20" style={{ background: '#0a0a0a' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Meet Our Expert <span className="gradient-text">Trainers</span>
          </h2>
          <p className="mb-8" style={{ color: '#9ca3af' }}>
            Get to know the certified professionals who will guide you on your transformation journey.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/trainers" className="btn-primary">Meet the Team</Link>
            <Link href="/join" className="btn-secondary">Start Today</Link>
          </div>
        </div>
      </section>
    </>
  );
}
