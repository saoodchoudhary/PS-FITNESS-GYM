'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

/* ─── Animation variants ─── */
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const fadeLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
const fadeRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const RED = '#e11d1d';
const RED_BRIGHT = '#ff2222';
const RED_SOFT = 'rgba(225,29,29,0.12)';
const RED_BORDER = 'rgba(225,29,29,0.2)';
const MUTED = '#6b7280';
const CARD_BG = '#111111';

/* ─── Animated counter ─── */
function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / (2000 / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); } else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Feature data ─── */
const features = [
  { icon: '🏋️', title: 'Expert Trainers', desc: 'Certified professionals with years of experience transforming bodies and lives across all fitness levels.' },
  { icon: '⚡', title: 'Modern Equipment', desc: 'State-of-the-art machines and free weights to power every kind of workout — from beginner to elite.' },
  { icon: '🛡️', title: 'Beginner Friendly', desc: 'No experience needed. Our trainers guide you from day one with a fully personalised training plan.' },
  { icon: '💰', title: 'Affordable Plans', desc: 'Premium fitness without premium price tags. Plans starting from just ₹999/month with no hidden costs.' },
  { icon: '📊', title: 'Progress Tracking', desc: 'Weekly body measurements, strength tracking and nutrition reviews to keep you on the fastest path.' },
  { icon: '🏆', title: 'Results Guaranteed', desc: 'Visible results within 30 days or we extend your membership free of charge. We stand by our programs.' },
];

/* ─── Services data ─── */
const services = [
  { title: 'Weight Training', desc: 'Build strength and muscle with structured progressive overload programs designed by certified coaches.', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80', tag: 'Most Popular' },
  { title: 'Personal Training', desc: 'One-on-one sessions tailored exactly to your goals, schedule and current fitness level.', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80', tag: 'Premium' },
  { title: 'Fat Loss Program', desc: 'Science-backed HIIT, cardio and nutrition plans engineered to burn fat while preserving muscle.', img: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80', tag: 'Bestseller' },
  { title: 'Muscle Gain', desc: 'Hypertrophy-focused training with supplement guidance and diet plans tuned for maximum growth.', img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80', tag: 'Advanced' },
];

/* ─── Stats ─── */
const stats = [
  { value: 500, suffix: '+', label: 'Happy Members' },
  { value: 5, suffix: '.0 ⭐', label: 'Star Rating' },
  { value: 10, suffix: '+', label: 'Expert Trainers' },
  { value: 3, suffix: '+ Yrs', label: 'Of Excellence' },
];

/* ─── Testimonials ─── */
const testimonials = [
  { name: 'Arjun Mehta', role: 'IT Professional', text: 'Lost 15 kg in 4 months! The trainers are amazing. The equipment is top notch and the atmosphere is incredibly motivating.', stars: 5 },
  { name: 'Sneha Sharma', role: 'Homemaker', text: 'Best gym in Gurugram — no doubt. Very supportive environment. Ladies feel completely safe and welcomed here.', stars: 5 },
  { name: 'Rahul Verma', role: 'Student', text: 'Gained 8 kg of muscle in 3 months following their program. Affordable membership with world-class facilities.', stars: 5 },
];

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════
          HERO — Full-bleed dark with gym image
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80"
            alt="PS FITNESS GYM interior"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.25)' }}
          />
          {/* Red gradient overlay */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.3) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 0% 50%, rgba(225,29,29,0.15) 0%, transparent 60%)' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">

            {/* Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold" style={{ background: 'rgba(225,29,29,0.15)', border: `1px solid ${RED_BORDER}`, color: RED }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: RED }} />
              ⭐ 5.0 Rated Gym in Gurugram · 398 Reviews
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-white mb-6"
              style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2.8rem, 7vw, 6rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '0.02em', textTransform: 'uppercase' }}
            >
              Transform Your Body,<br />
              <span style={{ color: RED }}>Transform Your Life.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg sm:text-xl mb-10 max-w-xl leading-relaxed" style={{ color: '#c4c4c4' }}>
              Gurugram&apos;s premier fitness destination — expert trainers, modern equipment &amp; proven programs in Sector 12.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-16">
              <Link
                href="/join"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold transition-all duration-200"
                style={{ background: RED, color: '#fff', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '1rem' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = RED_BRIGHT; e.currentTarget.style.boxShadow = '0 0 30px rgba(225,29,29,0.5)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = RED; e.currentTarget.style.boxShadow = 'none'; }}
              >
                🔥 Join Now — Start Today
              </Link>
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.08)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.06em', textTransform: 'uppercase', fontSize: '0.95rem' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.14)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
              >
                View Plans
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div variants={stagger} initial="hidden" animate="visible" className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
              {stats.map(({ value, suffix, label }) => (
                <motion.div key={label} variants={fadeUp} className="text-center py-4 px-3 rounded-xl" style={{ background: 'rgba(0,0,0,0.5)', border: `1px solid ${RED_BORDER}`, backdropFilter: 'blur(12px)' }}>
                  <p className="text-2xl font-black" style={{ color: RED, fontFamily: 'Oswald, sans-serif' }}>
                    <Counter target={value} suffix={suffix} />
                  </p>
                  <p className="text-xs mt-1" style={{ color: MUTED }}>{label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs" style={{ color: MUTED }}>Scroll</span>
          <svg width="20" height="20" fill="none" stroke={RED} strokeWidth="2" viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FEATURES STRIP — Dark section
      ═══════════════════════════════════════════════ */}
      <section style={{ background: '#080808', borderTop: `2px solid ${RED}`, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {['No Contract Lock-in', 'Free Trial Session', '10+ Certified Trainers', 'Open 5 AM – 10 PM', 'AC Gym Floor', 'Locker & Shower'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm" style={{ color: '#d1d5db' }}>
                <svg width="14" height="14" fill="none" stroke={RED} strokeWidth="2.5" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WHY CHOOSE US — Feature Cards
      ═══════════════════════════════════════════════ */}
      <section style={{ background: '#0a0a0a', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="mb-14">
            <motion.p variants={fadeUp} className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: RED, fontFamily: 'Oswald, sans-serif' }}>Why Choose Us</motion.p>
            <motion.h2 variants={fadeUp} className="text-white" style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.1, textTransform: 'uppercase' }}>
              Everything You Need To{' '}<span style={{ color: RED }}>Succeed</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="mt-3 w-16 h-1 rounded" style={{ background: RED }} />
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-6 rounded-xl group cursor-default"
                style={{ background: CARD_BG, border: '1px solid rgba(255,255,255,0.06)', transition: 'border-color 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = RED_BORDER; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-white text-lg mb-2" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.03em' }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SERVICES — Image cards
      ═══════════════════════════════════════════════ */}
      <section style={{ background: '#060606', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="mb-14">
            <motion.p variants={fadeUp} className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: RED, fontFamily: 'Oswald, sans-serif' }}>What We Offer</motion.p>
            <motion.h2 variants={fadeUp} className="text-white" style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.1, textTransform: 'uppercase' }}>
              Our <span style={{ color: RED }}>Services</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="mt-3 w-16 h-1 rounded" style={{ background: RED }} />
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="rounded-xl overflow-hidden group cursor-default"
                style={{ background: CARD_BG, border: '1px solid rgba(255,255,255,0.06)' }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)' }} />
                  {/* Tag */}
                  <span className="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded" style={{ background: RED, color: '#fff', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.05em' }}>
                    {s.tag}
                  </span>
                </div>
                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-white text-lg mb-2" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.03em' }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>{s.desc}</p>
                  <Link href="/services" className="text-sm font-semibold flex items-center gap-1 transition-colors" style={{ color: RED }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = RED_BRIGHT; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = RED; }}>
                    Learn More <span>→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn-secondary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TRANSFORMATION — Split layout with gym image
      ═══════════════════════════════════════════════ */}
      <section style={{ background: '#0a0a0a', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — Content */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeLeft}>
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: RED, fontFamily: 'Oswald, sans-serif' }}>Real Results</p>
              <h2 className="text-white mb-6" style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, lineHeight: 1.1, textTransform: 'uppercase' }}>
                Real People,{' '}<span style={{ color: RED }}>Real Transformations</span>
              </h2>
              <p className="mb-8 leading-relaxed text-base" style={{ color: '#9ca3af' }}>
                Our members achieve incredible results through disciplined training, expert guidance, and nutrition plans crafted for their body type and goals.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Personalised fitness assessment on Day 1',
                  'Weekly progress tracking & body measurements',
                  'Custom diet & nutrition plans',
                  'Visible results guaranteed within 30 days',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: RED_SOFT }}>
                      <svg width="12" height="12" fill="none" stroke={RED} strokeWidth="2.5" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-sm leading-relaxed" style={{ color: '#d1d5db' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/join"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold transition-all duration-200"
                style={{ background: RED, color: '#fff', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = RED_BRIGHT; e.currentTarget.style.boxShadow = '0 0 24px rgba(225,29,29,0.4)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = RED; e.currentTarget.style.boxShadow = 'none'; }}
              >
                Start Your Transformation
              </Link>
            </motion.div>

            {/* Right — Image Grid */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeRight} className="grid grid-cols-2 gap-4">
              {[
                { src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80', label: 'Strength', tall: true },
                { src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80', label: 'Results', tall: true },
                { src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80', label: 'Cardio', tall: false },
                { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80', label: 'Flexibility', tall: false },
              ].map(({ src, label, tall }) => (
                <div
                  key={label}
                  className="relative overflow-hidden rounded-xl"
                  style={{ aspectRatio: tall ? '3/4' : '1/1' }}
                >
                  <img src={src} alt={label} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)' }} />
                  <span
                    className="absolute bottom-3 left-3 text-xs font-bold px-2 py-1 rounded"
                    style={{ background: 'rgba(225,29,29,0.85)', color: '#fff', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.06em', textTransform: 'uppercase' }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════ */}
      <section style={{ background: '#060606', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="mb-14">
            <motion.p variants={fadeUp} className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: RED, fontFamily: 'Oswald, sans-serif' }}>Member Stories</motion.p>
            <motion.h2 variants={fadeUp} className="text-white" style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.1, textTransform: 'uppercase' }}>
              What Our <span style={{ color: RED }}>Members Say</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mt-4">
              {[1,2,3,4,5].map((s) => (
                <svg key={s} width="18" height="18" fill={RED} viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
              <span className="font-bold ml-2 text-white">5.0</span>
              <span style={{ color: MUTED }}>(398 Google Reviews)</span>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-6 rounded-xl"
                style={{ background: CARD_BG, border: '1px solid rgba(255,255,255,0.06)' }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} width="14" height="14" fill={RED} viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#d1d5db' }}>&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                    style={{ background: RED, color: '#fff', fontFamily: 'Oswald, sans-serif' }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-xs" style={{ color: MUTED }}>{t.role}</p>
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

      {/* ═══════════════════════════════════════════════
          CTA — Final call to action
      ═══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ padding: 'clamp(4rem, 8vw, 6rem) 0' }}>
        {/* BG image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1400&q=80"
            alt="gym background"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.15)' }}
          />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(225,29,29,0.12) 0%, transparent 70%)' }} />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: RED, fontFamily: 'Oswald, sans-serif' }}>
              Limited Spots Available
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-white mb-6"
              style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1.05, textTransform: 'uppercase' }}
            >
              Ready To <span style={{ color: RED }}>Transform?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg mb-10" style={{ color: '#9ca3af' }}>
              Join 500+ members already living their best lives. Start with a <strong className="text-white">FREE trial session</strong> — no commitment required.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/join"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-bold transition-all duration-200"
                style={{ background: RED, color: '#fff', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '1rem' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = RED_BRIGHT; e.currentTarget.style.boxShadow = '0 0 40px rgba(225,29,29,0.5)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = RED; e.currentTarget.style.boxShadow = 'none'; }}
              >
                🔥 Claim Your Free Trial
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-semibold transition-all duration-200"
                style={{ background: 'transparent', color: '#ffffff', border: '2px solid rgba(255,255,255,0.3)', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.95rem' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
              >
                📞 Talk to Us
              </Link>
            </motion.div>
            <motion.p variants={fadeUp} className="text-sm mt-6" style={{ color: '#4b5563' }}>
              No credit card required · Cancel anytime · Free fitness assessment included
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
