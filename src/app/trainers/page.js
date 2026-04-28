
import Link from 'next/link';

export const metadata = {
  title: 'Our Trainers',
  description: 'Meet the expert certified trainers at PS FITNESS GYM, Gurugram. Specializing in weight training, fat loss, yoga, nutrition, and more.',
};

const trainers = [
  {
    name: 'Rahul Sharma',
    role: 'Head Trainer & Strength Coach',
    exp: '8 Years',
    specialization: 'Strength & Hypertrophy',
    certifications: ['ISSA Certified Personal Trainer', 'Strength & Conditioning Specialist'],
    emoji: '💪',
    bio: 'Rahul is a powerlifting enthusiast who has helped 200+ members build serious strength. Known for his technical expertise and motivating coaching style.',
  },
  {
    name: 'Priya Singh',
    role: 'Fat Loss Specialist',
    exp: '6 Years',
    specialization: 'Fat Loss & Cardio',
    certifications: ['ACE Certified', 'Nutrition Coaching Certified'],
    emoji: '🔥',
    bio: 'Priya specializes in sustainable fat loss and has transformed hundreds of clients through her evidence-based cardio and nutrition programs.',
  },
  {
    name: 'Amit Kumar',
    role: 'Bodybuilding Coach',
    exp: '10 Years',
    specialization: 'Muscle Building & Physique',
    certifications: ['NASM Certified', 'NPC Competitor', 'Sports Nutrition Specialist'],
    emoji: '🏆',
    bio: 'A competitive bodybuilder with 10 years of experience, Amit knows exactly how to sculpt physiques. His structured programs deliver measurable muscle gains.',
  },
  {
    name: 'Neha Gupta',
    role: 'Yoga & Wellness Coach',
    exp: '7 Years',
    specialization: 'Yoga, Flexibility & Mindfulness',
    certifications: ['RYT-500 Yoga Alliance', 'Meditation Coach Certified'],
    emoji: '🧘',
    bio: 'Neha brings a holistic approach to fitness, combining yoga, breathwork and mindfulness. Perfect for recovery, stress relief and long-term wellness.',
  },
  {
    name: 'Vijay Yadav',
    role: 'Performance & HIIT Coach',
    exp: '5 Years',
    specialization: 'HIIT, CrossFit & Athletics',
    certifications: ['CrossFit Level 2 Trainer', 'NSCA-CPT Certified'],
    emoji: '⚡',
    bio: 'Vijay brings explosive energy to every session. His HIIT and functional fitness programs are challenging, fun, and highly effective.',
  },
  {
    name: 'Pooja Mehta',
    role: 'Women\'s Fitness Specialist',
    exp: '6 Years',
    specialization: 'Women\'s Fitness & Toning',
    certifications: ['ACSM Certified', 'Pre/Postnatal Fitness Expert'],
    emoji: '🌟',
    bio: 'Pooja focuses on women\'s health, body toning and confidence-building. She creates safe, effective programs for all stages of a woman\'s fitness journey.',
  },
];

export default function TrainersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0a0a0a 0%,#0f1a0f 50%,#0a0a0a 100%)' }}>
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#39ff14' }}>Meet the Team</p>
          <h1 className="section-title text-white mb-6">
            Our Expert <span className="gradient-text">Trainers</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#9ca3af' }}>
            Certified professionals dedicated to helping you achieve your fitness goals safely and effectively.
          </p>
        </div>
      </section>

      {/* Trainer Grid */}
      <section className="py-24" style={{ background: '#050505' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((t) => (
              <div
                key={t.name}
                className="glass-card overflow-hidden group"
                style={{ border: '1px solid rgba(57,255,20,0.1)' }}
              >
                {/* Avatar */}
                <div
                  className="relative h-56 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg,#111,#1a2a1a)' }}
                >
                  <span className="text-8xl">{t.emoji}</span>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span
                      className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: 'rgba(57,255,20,0.15)', color: '#39ff14', border: '1px solid rgba(57,255,20,0.3)' }}
                    >
                      {t.exp} Experience
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{t.name}</h3>
                  <p className="text-sm font-semibold mb-3" style={{ color: '#39ff14' }}>{t.role}</p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#9ca3af' }}>{t.bio}</p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#6b7280' }}>Specialisation</p>
                    <span className="text-sm" style={{ color: '#d1d5db' }}>{t.specialization}</span>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#6b7280' }}>Certifications</p>
                    <ul className="space-y-1">
                      {t.certifications.map((c) => (
                        <li key={c} className="flex items-center gap-2 text-xs" style={{ color: '#9ca3af' }}>
                          <svg width="12" height="12" fill="none" stroke="#39ff14" strokeWidth="2.5" viewBox="0 0 24 24">
                            <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#0a0a0a' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Train with the <span className="gradient-text">Best</span>
          </h2>
          <p className="mb-8" style={{ color: '#9ca3af' }}>
            Book a free session with one of our trainers and experience the PS FITNESS GYM difference.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/join" className="btn-primary">Book Free Trial</Link>
            <Link href="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
