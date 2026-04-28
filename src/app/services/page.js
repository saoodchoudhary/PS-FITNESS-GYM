
import Link from 'next/link';

export const metadata = {
  title: 'Services',
  description: 'Explore all fitness services at PS FITNESS GYM – Weight Training, Personal Training, Fat Loss, Muscle Gain, Cardio, Yoga and more in Gurugram.',
};

const mainServices = [
  {
    icon: '🏋️',
    title: 'Weight Training',
    desc: 'Comprehensive strength training programs designed by certified coaches. From beginner to advanced, we build your program around your current level and goals.',
    benefits: ['Progressive overload programs', 'Free weights & machines', 'Strength & hypertrophy focus', 'Form coaching included'],
    gradient: 'linear-gradient(135deg,#39ff14,#00ff88)',
  },
  {
    icon: '👤',
    title: 'Personal Training',
    desc: 'One-on-one sessions with a dedicated certified trainer who creates and evolves your program weekly based on your progress and feedback.',
    benefits: ['Fully personalised program', 'Flexible scheduling', 'Direct trainer accountability', 'Weekly plan adjustments'],
    gradient: 'linear-gradient(135deg,#ef4444,#f97316)',
  },
  {
    icon: '🔥',
    title: 'Fat Loss Program',
    desc: 'Science-backed fat loss programs combining HIIT, cardio, resistance training and nutrition guidance to maximise your caloric deficit safely.',
    benefits: ['HIIT & cardio protocols', 'Nutrition planning included', 'Body composition tracking', 'Sustainable lifestyle approach'],
    gradient: 'linear-gradient(135deg,#8b5cf6,#ec4899)',
  },
  {
    icon: '💪',
    title: 'Muscle Gain',
    desc: 'Hypertrophy-focused training with optimised volume and intensity. Includes diet recommendations and supplement guidance for maximum muscle growth.',
    benefits: ['Hypertrophy-specific training', 'Diet & supplement guidance', 'Progress tracking system', 'Body measurement analysis'],
    gradient: 'linear-gradient(135deg,#06b6d4,#3b82f6)',
  },
];

const additionalServices = [
  { icon: '🚴', title: 'Cardio Training', desc: 'Treadmills, bikes and rowing machines with guided programs for endurance and heart health.' },
  { icon: '🧘', title: 'Yoga & Flexibility', desc: 'Structured yoga sessions for mobility, stress relief and active recovery.' },
  { icon: '🥗', title: 'Nutrition Consulting', desc: 'Personalised meal plans and macro calculations from our certified nutrition advisor.' },
  { icon: '👥', title: 'Group Classes', desc: 'High-energy group sessions including Zumba, CrossFit-style WODs, and circuit training.' },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0a0a0a 0%,#0f1a0f 50%,#0a0a0a 100%)' }}>
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#39ff14' }}>What We Offer</p>
          <h1 className="section-title text-white mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#9ca3af' }}>
            From beginner programs to elite performance training, we have a service tailored for every goal and fitness level.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24" style={{ background: '#050505' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {mainServices.map((s, i) => (
              <div
                key={s.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="text-5xl mb-4">{s.icon}</div>
                  <h2 className="text-3xl font-bold text-white mb-4">{s.title}</h2>
                  <p className="leading-relaxed mb-6" style={{ color: '#9ca3af' }}>{s.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-3">
                        <svg width="18" height="18" fill="none" stroke="#39ff14" strokeWidth="2.5" viewBox="0 0 24 24">
                          <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span style={{ color: '#d1d5db' }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/join" className="btn-primary">Get Started</Link>
                </div>
                <div className={`rounded-2xl p-8 flex items-center justify-center min-h-64 ${i % 2 === 1 ? 'lg:order-1' : ''}`}
                  style={{
                    background: 'linear-gradient(135deg,#111,#1a1a1a)',
                    border: '1px solid rgba(57,255,20,0.1)',
                    boxShadow: '0 0 40px rgba(57,255,20,0.05)',
                  }}>
                  <span className="text-8xl">{s.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#39ff14' }}>More Options</p>
            <h2 className="section-title text-white">
              Additional <span className="gradient-text">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((s) => (
              <div key={s.title} className="glass-card p-6" style={{ border: '1px solid rgba(57,255,20,0.1)' }}>
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-white text-lg mb-2">{s.title}</h3>
                <p className="text-sm" style={{ color: '#9ca3af' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#050505' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to <span className="gradient-text">Start?</span>
          </h2>
          <p className="mb-8" style={{ color: '#9ca3af' }}>Book a free consultation and we'll design the perfect program for you.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/join" className="btn-primary">Join Now</Link>
            <Link href="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
