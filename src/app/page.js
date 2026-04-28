'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

/* ─── Animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};
const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─── Animated counter ─── */
function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Feature data ─── */
const features = [
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Expert Trainers',
    desc: 'Certified professionals with years of experience in transforming bodies and lives.',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Modern Equipment',
    desc: 'State-of-the-art machines and free weights to power every kind of workout.',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Beginner Friendly',
    desc: 'No experience needed. Our trainers guide you from day one with a personalised plan.',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'LGBTQ+ Friendly',
    desc: 'An inclusive, welcoming space where everyone trains with respect and dignity.',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <line x1="12" y1="1" x2="12" y2="23" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Affordable Plans',
    desc: 'Premium fitness without premium price tags. Plans starting from just ₹999/month.',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Results Guaranteed',
    desc: 'Visible results within 30 days or we extend your membership free of charge.',
  },
];

/* ─── Services data ─── */
const services = [
  {
    title: 'Weight Training',
    desc: 'Build strength and muscle with structured progressive overload programs.',
    gradient: 'linear-gradient(135deg,#39ff14,#00ff88)',
    icon: '🏋️',
  },
  {
    title: 'Personal Training',
    desc: 'One-on-one sessions tailored exactly to your goals and fitness level.',
    gradient: 'linear-gradient(135deg,#ef4444,#f97316)',
    icon: '👤',
  },
  {
    title: 'Fat Loss',
    desc: 'Science-backed programs combining cardio, HIIT, and nutrition guidance.',
    gradient: 'linear-gradient(135deg,#8b5cf6,#ec4899)',
    icon: '🔥',
  },
  {
    title: 'Muscle Gain',
    desc: 'Hypertrophy-focused training with supplement and diet recommendations.',
    gradient: 'linear-gradient(135deg,#06b6d4,#3b82f6)',
    icon: '💪',
  },
];

/* ─── Testimonials ─── */
const testimonials = [
  { name: 'Arjun Mehta', role: 'IT Professional', text: 'Lost 15 kg in 4 months! The trainers at PS FITNESS are absolutely amazing. The atmosphere is motivating and the equipment is top notch.', stars: 5 },
  { name: 'Sneha Sharma', role: 'Homemaker', text: 'Best gym in Gurugram without doubt. Very supportive environment. The ladies feel completely safe and welcomed here.', stars: 5 },
  { name: 'Rahul Verma', role: 'Student', text: 'Affordable membership with world-class facilities. Gained 8 kg of muscle in 3 months following the program they designed for me.', stars: 5 },
  { name: 'Priya Nair', role: 'Software Engineer', text: 'Joined as a complete beginner and never felt judged. The trainers are patient, knowledgeable and truly care about your progress.', stars: 5 },
  { name: 'Karan Sethi', role: 'Businessman', text: 'I travel a lot and have tried many gyms, but PS FITNESS GYM stands apart in quality. The energy here is unmatched in Gurugram.', stars: 5 },
];

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-radial-glow" />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 80% 40%, rgba(239,68,68,0.08) 0%, transparent 60%)',
          }}
        />
        {/* Decorative orbs */}
        <div
          className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl float-animation"
          style={{ background: 'rgba(57,255,20,0.06)' }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'rgba(239,68,68,0.05)', animationDelay: '2s' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col items-center"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold" style={{ background: 'rgba(57,255,20,0.1)', border: '1px solid rgba(57,255,20,0.3)', color: '#39ff14' }}>
              <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
              ⭐ 5.0 Rated Gym in Gurugram · 398 Reviews
            </motion.div>

            {/* Main heading */}
            <motion.h1 variants={fadeUp} className="section-title text-white mb-4 max-w-4xl">
              Transform Your Body,{' '}
              <span className="gradient-text">Transform Your Life!</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg sm:text-xl mb-10 max-w-2xl" style={{ color: '#9ca3af' }}>
              Gurugram's premier fitness destination. Expert trainers, modern equipment & proven programs — all in Sector 12.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center mb-16">
              <Link href="/join" className="btn-primary text-base px-8 py-3.5">
                Join Now — Start Today
              </Link>
              <Link href="/membership" className="btn-secondary text-base px-8 py-3.5">
                View Plans
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div variants={stagger} initial="hidden" animate="visible" className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-3xl">
              {[
                { value: 500, suffix: '+', label: 'Happy Members' },
                { value: 5, suffix: '.0 ⭐', label: 'Star Rating' },
                { value: 10, suffix: '+', label: 'Expert Trainers' },
                { value: 3, suffix: '+ Yrs', label: 'Of Excellence' },
              ].map(({ value, suffix, label }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="glass-card-dark p-4 text-center"
                >
                  <p className="text-3xl font-black" style={{ color: '#39ff14' }}>
                    <Counter target={value} suffix={suffix} />
                  </p>
                  <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>{label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs" style={{ color: '#9ca3af' }}>Scroll</span>
          <svg width="20" height="20" fill="none" stroke="#39ff14" strokeWidth="2" viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="py-24 bg-grid" style={{ background: '#050505' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#39ff14' }}>Why Choose Us</motion.p>
            <motion.h2 variants={fadeUp} className="section-title text-white">
              Everything You Need to{' '}
              <span className="gradient-text">Succeed</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass-card p-6 group cursor-default"
                style={{ border: '1px solid rgba(57,255,20,0.1)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(57,255,20,0.1)', color: '#39ff14' }}
                >
                  {f.icon}
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-24" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#39ff14' }}>What We Offer</motion.p>
            <motion.h2 variants={fadeUp} className="section-title text-white">
              Our <span className="gradient-text">Services</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="relative rounded-2xl p-px overflow-hidden group"
                style={{ background: s.gradient }}
              >
                <div className="rounded-2xl p-6 h-full" style={{ background: '#111111' }}>
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="font-bold text-white text-lg mb-2">{s.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#9ca3af' }}>{s.desc}</p>
                  <Link href="/services" className="text-sm font-semibold transition-colors" style={{ color: '#39ff14' }}
                    onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none'; }}>
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TRANSFORMATION ─── */}
      <section className="py-24 bg-grid" style={{ background: '#050505' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeft}
            >
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#39ff14' }}>Real Results</p>
              <h2 className="section-title text-white mb-6">
                Real People,{' '}
                <span className="gradient-text">Real Transformations</span>
              </h2>
              <p className="mb-8 leading-relaxed" style={{ color: '#9ca3af' }}>
                Our members achieve incredible results through disciplined training, expert guidance, and nutrition plans crafted specifically for their body type and goals.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Personalised fitness assessment on Day 1',
                  'Weekly progress tracking & body measurements',
                  'Custom diet & nutrition plans',
                  'Visible results guaranteed within 30 days',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg width="20" height="20" fill="none" stroke="#39ff14" strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ color: '#d1d5db' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/join" className="btn-primary">Start Your Transformation</Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeRight}
              className="grid grid-cols-2 gap-4"
            >
              {['Before', 'After', 'Training', 'Results'].map((label, i) => (
                <div
                  key={label}
                  className={`rounded-2xl flex items-end p-4 ${i === 0 ? 'aspect-[3/4]' : i === 1 ? 'aspect-[3/4]' : 'aspect-square'}`}
                  style={{
                    background: i % 2 === 0
                      ? 'linear-gradient(135deg,#1a1a1a,#111)'
                      : 'linear-gradient(135deg,#111,#1a2a1a)',
                    border: '1px solid rgba(57,255,20,0.1)',
                  }}
                >
                  <span
                    className="text-xs font-bold px-2 py-1 rounded"
                    style={{ background: 'rgba(57,255,20,0.15)', color: '#39ff14' }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#39ff14' }}>Member Stories</motion.p>
            <motion.h2 variants={fadeUp} className="section-title text-white">
              What Our <span className="gradient-text">Members Say</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mt-4">
              {[1,2,3,4,5].map((s) => (
                <svg key={s} width="20" height="20" fill="#39ff14" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
              <span className="font-bold ml-2" style={{ color: '#39ff14' }}>5.0</span>
              <span style={{ color: '#9ca3af' }}>(398 Google Reviews)</span>
            </motion.div>
          </motion.div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {testimonials.slice(0, 3).map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card p-6"
                style={{ border: '1px solid rgba(57,255,20,0.1)' }}
              >
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} width="14" height="14" fill="#39ff14" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#d1d5db' }}>"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                    style={{ background: 'linear-gradient(135deg,#39ff14,#2dd10f)', color: '#000' }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-xs" style={{ color: '#9ca3af' }}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/reviews" className="btn-secondary">Read All 398 Reviews</Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#050505 0%,#0f1a0f 50%,#050505 100%)' }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(57,255,20,0.08) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#39ff14' }}>
              Limited Spots Available
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-title text-white mb-6">
              Ready to{' '}
              <span className="gradient-text">Transform?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg mb-8" style={{ color: '#9ca3af' }}>
              Join 500+ members who are already living their best lives. Start with a FREE trial session — no commitment required.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Link href="/join" className="btn-primary text-base px-10 py-4">
                🚀 Claim Your Free Trial
              </Link>
              <Link href="/contact" className="btn-secondary text-base px-10 py-4">
                📞 Talk to Us
              </Link>
            </motion.div>
            <motion.p variants={fadeUp} className="text-sm mt-6" style={{ color: '#6b7280' }}>
              No credit card required · Cancel anytime · Free fitness assessment included
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
