'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

/* ─── Animation variants ─── */
const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};
/* ✅ FIX: x-based animations replaced with y-only on mobile via custom variant */
const fadeLeft = {
  hidden:  { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};
const fadeRight = {
  hidden:  { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};
/* Safe fade — no x/y movement, only opacity. Used for mobile-sensitive sections */
const fadeSafe = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const RED        = '#e11d1d';
const RED_BRIGHT = '#ff2222';
const RED_SOFT   = 'rgba(225,29,29,0.12)';
const RED_BORDER = 'rgba(225,29,29,0.22)';
const MUTED      = '#6b7280';
const CARD_BG    = '#111111';

/* ─── Animated counter ─── */
function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step  = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

function Star({ size = 14, color = '#f59e0b' }) {
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}

/* ─── Data ─── */
const features = [
  { icon: '🏋️', title: 'Expert Trainers',    desc: 'Certified professionals with years of experience transforming bodies and lives across all fitness levels.' },
  { icon: '⚡',  title: 'Modern Equipment',   desc: 'State-of-the-art machines and free weights to power every kind of workout — from beginner to elite athlete.' },
  { icon: '🛡️', title: 'Beginner Friendly',  desc: 'No experience needed. Our trainers guide you from day one with a fully personalised training plan.' },
  { icon: '💰',  title: 'Affordable Plans',   desc: 'Premium fitness without premium price tags. Plans starting from just ₹999/month with no hidden costs.' },
  { icon: '📊',  title: 'Progress Tracking',  desc: 'Weekly body measurements, strength tracking and nutrition reviews to keep you on the fastest path forward.' },
  { icon: '🏆',  title: 'Results Guaranteed', desc: 'Visible results within 30 days or we extend your membership free. We stand by every program we run.' },
];

const services = [
  { title: 'Weight Training',   desc: 'Build strength and muscle with structured progressive overload programs designed by certified coaches.', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80', tag: 'Most Popular' },
  { title: 'Personal Training', desc: 'One-on-one sessions tailored exactly to your goals, schedule and current fitness level.', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80', tag: 'Premium' },
  { title: 'Fat Loss Program',  desc: 'Science-backed HIIT, cardio and nutrition plans engineered to burn fat while preserving muscle.', img: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80', tag: 'Bestseller' },
  { title: 'Muscle Gain',       desc: 'Hypertrophy-focused training with supplement guidance and diet plans tuned for maximum growth.', img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80', tag: 'Advanced' },
];

const stats = [
  { value: 500, suffix: '+',     label: 'Happy Members' },
  { value: 5,   suffix: '.0',    label: 'Google Rating' },
  { value: 10,  suffix: '+',     label: 'Expert Trainers' },
  { value: 3,   suffix: '+ Yrs', label: 'Of Excellence' },
];

const testimonials = [
  { name: 'Arjun Mehta',  role: 'IT Professional', text: 'Lost 15 kg in 4 months! The trainers are amazing. Equipment is top-notch and the atmosphere is incredibly motivating.' },
  { name: 'Sneha Sharma', role: 'Homemaker',       text: 'Best gym in Gurugram — no doubt. Very supportive environment. Ladies feel completely safe and welcomed here.' },
  { name: 'Rahul Verma',  role: 'Student',         text: 'Gained 8 kg of muscle in 3 months following their program. Affordable membership with world-class facilities.' },
];

export default function HomePage() {
  /* ✅ FIX: detect mobile once on mount */
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* On mobile, swap x-based variants with safe y-only variant */
  const leftVariant  = isMobile ? fadeSafe : fadeLeft;
  const rightVariant = isMobile ? fadeSafe : fadeRight;

  return (
    /*
     * ✅ KEY FIX: overflow-x-hidden on the root wrapper
     * This is the single most reliable fix — clips any element that
     * temporarily renders outside the viewport during x-animations.
     */
    <div style={{ overflowX: 'hidden' }}>

      {/* ════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85"
            alt="PS FITNESS GYM"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.2) saturate(0.9)' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.75) 45%, rgba(0,0,0,0.3) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 80% at 0% 60%, rgba(225,29,29,0.18) 0%, transparent 65%)' }} />
          <div className="absolute top-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 100%)' }} />
          <div className="absolute inset-0 bg-grid opacity-10" />
        </div>

        {/* Content */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24 lg:pt-32 lg:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left: Copy */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="lg:col-span-7"
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-7 text-sm font-semibold"
                style={{ background: 'rgba(225,29,29,0.12)', border: `1px solid ${RED_BORDER}`, color: RED }}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: RED, boxShadow: `0 0 8px ${RED}`, animation: 'pulse 2s infinite' }} />
                <span>⭐ 5.0 Rated · #1 Gym in Gurugram · 398 Reviews</span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                style={{
                  fontFamily: 'Oswald, sans-serif',
                  fontSize: 'clamp(3rem, 6.5vw, 7rem)',
                  fontWeight: 700,
                  lineHeight: 1.0,
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                  color: '#ffffff',
                }}
              >
                Transform
                <br />
                <span style={{ color: RED }}>Your Body.</span>
                <br />
                <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.72em' }}>Transform Your Life.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 mb-8 max-w-lg leading-relaxed"
                style={{ color: '#b0b0b0', fontSize: 'clamp(1rem, 1.4vw, 1.15rem)' }}
              >
                Gurugram&apos;s premier fitness destination — expert trainers, modern equipment &amp; proven programs. Located in Sector 12.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
                <Link
                  href="/join"
                  className="inline-flex items-center gap-2.5 rounded-xl font-bold"
                  style={{
                    background: RED, color: '#fff',
                    fontFamily: 'Oswald, sans-serif',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontSize: '0.95rem',
                    padding: '14px 32px',
                    transition: 'background 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = RED_BRIGHT; e.currentTarget.style.boxShadow = '0 0 30px rgba(225,29,29,0.5)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = RED; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2c0 0-5 4-5 9a5 5 0 0010 0c0-5-5-9-5-9zm0 14a3 3 0 01-3-3c0-2 1.5-4 3-5 1.5 1 3 3 3 5a3 3 0 01-3 3z"/>
                  </svg>
                  Join Now — Free Trial
                </Link>
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-2 rounded-xl font-semibold"
                  style={{
                    background: 'rgba(255,255,255,0.07)', color: '#fff',
                    border: '1px solid rgba(255,255,255,0.18)',
                    fontFamily: 'Oswald, sans-serif',
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase',
                    fontSize: '0.9rem',
                    padding: '14px 28px',
                    transition: 'background 0.2s ease, border-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.13)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; }}
                >
                  View Plans
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 rounded-xl font-semibold"
                  style={{
                    color: 'rgba(255,255,255,0.6)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.85rem',
                    padding: '14px 20px',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                >
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.82 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  +91 98765 43210
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                {['No Joining Fee', 'Free First Session', 'Cancel Anytime'].map((t) => (
                  <div key={t} className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    <svg width="11" height="11" fill="none" stroke={RED} strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {t}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Stats — desktop only */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="lg:col-span-4 lg:col-start-9 hidden lg:grid grid-cols-2 gap-4"
            >
              {stats.map(({ value, suffix, label }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="flex flex-col items-center justify-center rounded-2xl py-7 px-4 text-center"
                  style={{ background: 'rgba(0,0,0,0.6)', border: `1px solid ${RED_BORDER}`, backdropFilter: 'blur(16px)' }}
                >
                  <p style={{ fontFamily: 'Oswald, sans-serif', fontSize: '2.4rem', fontWeight: 800, color: RED, lineHeight: 1 }}>
                    <Counter target={value} suffix={suffix} />
                  </p>
                  <p className="text-xs mt-2 leading-tight" style={{ color: MUTED }}>{label}</p>
                </motion.div>
              ))}
              <motion.div
                variants={fadeUp}
                className="col-span-2 flex items-center justify-between rounded-2xl px-5 py-4"
                style={{ background: 'rgba(0,0,0,0.6)', border: `1px solid ${RED_BORDER}`, backdropFilter: 'blur(16px)' }}
              >
                <div>
                  <p className="text-white font-bold text-sm">Google Reviews</p>
                  <div className="flex gap-0.5 mt-1">
                    {[1,2,3,4,5].map((s) => <Star key={s} size={13} color="#f59e0b"/>)}
                  </div>
                  <p className="text-xs mt-1" style={{ color: MUTED }}>398 verified reviews</p>
                </div>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '2.8rem', fontWeight: 800, color: RED }}>5.0</div>
              </motion.div>
            </motion.div>

            {/* Mobile stats */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="lg:hidden grid grid-cols-2 sm:grid-cols-4 gap-3 w-full"
            >
              {stats.map(({ value, suffix, label }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="text-center py-4 px-3 rounded-xl"
                  style={{ background: 'rgba(0,0,0,0.6)', border: `1px solid ${RED_BORDER}`, backdropFilter: 'blur(12px)' }}
                >
                  <p style={{ color: RED, fontFamily: 'Oswald, sans-serif', fontSize: '1.6rem', fontWeight: 800 }}>
                    <Counter target={value} suffix={suffix} />
                  </p>
                  <p className="text-xs mt-1" style={{ color: MUTED }}>{label}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5" style={{ animation: 'bounce 2s infinite' }}>
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>Scroll</span>
          <svg width="18" height="18" fill="none" stroke={RED} strokeWidth="2.5" viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FEATURE STRIP
      ════════════════════════════════════════════ */}
      <div style={{ background: '#080808', borderTop: `2px solid ${RED}`, borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {['No Contract Lock-in', 'Free Trial Session', '10+ Certified Trainers', 'Open 5 AM – 10 PM', 'AC Gym Floor', 'Locker & Shower Included'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm" style={{ color: '#c4c4c4' }}>
                <svg width="13" height="13" fill="none" stroke={RED} strokeWidth="2.5" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          WHY CHOOSE US
      ════════════════════════════════════════════ */}
      <section style={{ background: '#0a0a0a', padding: 'clamp(4rem, 8vw, 7rem) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="mb-14"
          >
            <motion.p variants={fadeUp} className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: RED, fontFamily: 'Oswald, sans-serif' }}>
              Why Choose Us
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-white"
              style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, lineHeight: 1.1, textTransform: 'uppercase' }}
            >
              Everything You Need To <span style={{ color: RED }}>Succeed</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="mt-3 w-14 h-1 rounded" style={{ background: RED }} />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl relative overflow-hidden cursor-default"
                style={{ background: CARD_BG, border: '1px solid rgba(255,255,255,0.06)', transition: 'border-color 0.25s ease, box-shadow 0.25s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = RED_BORDER; e.currentTarget.style.boxShadow = '0 4px 24px rgba(225,29,29,0.08)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div className="absolute top-4 right-5 font-black pointer-events-none select-none"
                  style={{ fontFamily: 'Oswald, sans-serif', fontSize: '4rem', color: 'rgba(225,29,29,0.05)', lineHeight: 1 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-2xl"
                  style={{ background: RED_SOFT, border: `1px solid ${RED_BORDER}` }}>
                  {f.icon}
                </div>
                <h3 className="font-bold text-white text-lg mb-2" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.03em' }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SERVICES
      ════════════════════════════════════════════ */}
      <section style={{ background: '#060606', padding: 'clamp(4rem, 8vw, 7rem) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
          >
            <div>
              <motion.p variants={fadeUp} className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: RED, fontFamily: 'Oswald, sans-serif' }}>
                What We Offer
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-white"
                style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, lineHeight: 1.1, textTransform: 'uppercase' }}
              >
                Our <span style={{ color: RED }}>Services</span>
              </motion.h2>
              <motion.div variants={fadeUp} className="mt-3 w-14 h-1 rounded" style={{ background: RED }} />
            </div>
            <motion.div variants={fadeUp}>
              <Link href="/services" className="btn-secondary text-sm">View All Services →</Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="rounded-2xl overflow-hidden cursor-default flex flex-col"
                style={{ background: CARD_BG, border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="relative overflow-hidden" style={{ height: '200px' }}>
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    style={{ transition: 'transform 0.5s ease, filter 0.5s ease', filter: 'brightness(0.7)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.filter = 'brightness(0.85)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'brightness(0.7)'; }}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 60%)' }} />
                  <span className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded"
                    style={{ background: RED, color: '#fff', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.06em' }}>
                    {s.tag}
                  </span>
                  <h3 className="absolute bottom-3 left-4 font-bold text-white"
                    style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.15rem', letterSpacing: '0.03em', textTransform: 'uppercase' }}>
                    {s.title}
                  </h3>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-sm leading-relaxed flex-1" style={{ color: MUTED }}>{s.desc}</p>
                  <Link
                    href="/services"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold"
                    style={{ color: RED, transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = RED_BRIGHT; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = RED; }}
                  >
                    Learn More
                    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          TRANSFORMATION — ✅ isMobile-aware variants
      ════════════════════════════════════════════ */}
      <section style={{ background: '#0a0a0a', padding: 'clamp(4rem, 8vw, 7rem) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={leftVariant}
            >
              <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: RED, fontFamily: 'Oswald, sans-serif' }}>
                Real Results
              </p>
              <h2 className="text-white mb-6"
                style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, lineHeight: 1.1, textTransform: 'uppercase' }}>
                Real People,{' '}
                <span style={{ color: RED }}>Real Transformations</span>
              </h2>
              <p className="mb-8 leading-relaxed" style={{ color: '#9ca3af' }}>
                Our members achieve incredible results through disciplined training, expert guidance, and nutrition plans crafted for their body type and goals.
              </p>
              <ul className="space-y-3.5 mb-10">
                {[
                  'Personalised fitness assessment on Day 1',
                  'Weekly progress tracking & body measurements',
                  'Custom diet & nutrition plans',
                  'Visible results guaranteed within 30 days',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: RED_SOFT, border: `1px solid ${RED_BORDER}` }}>
                      <svg width="11" height="11" fill="none" stroke={RED} strokeWidth="2.5" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-sm leading-relaxed" style={{ color: '#d1d5db' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/join"
                className="inline-flex items-center gap-2 rounded-xl font-bold"
                style={{
                  background: RED, color: '#fff',
                  fontFamily: 'Oswald, sans-serif',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '14px 32px',
                  transition: 'background 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = RED_BRIGHT; e.currentTarget.style.boxShadow = '0 0 24px rgba(225,29,29,0.4)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = RED; e.currentTarget.style.boxShadow = 'none'; }}
              >
                Start Your Transformation
              </Link>
            </motion.div>

            {/* Right: Image grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={rightVariant}
              className="grid grid-cols-2 gap-3"
            >
              {[
                { src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&q=80', label: 'Strength',    tall: true  },
                { src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&q=80', label: 'Results',     tall: true  },
                { src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80', label: 'Cardio',      tall: false },
                { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&q=80', label: 'Flexibility', tall: false },
              ].map(({ src, label, tall }) => (
                <div key={label} className="relative overflow-hidden rounded-2xl group"
                  style={{ aspectRatio: tall ? '3/4' : '1/1' }}>
                  <img src={src} alt={label} className="w-full h-full object-cover" loading="lazy"
                    style={{ filter: 'brightness(0.75)', transition: 'transform 0.5s ease' }} />
                  <div className="absolute inset-0 group-hover:opacity-0"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)', transition: 'opacity 0.3s ease' }} />
                  <span className="absolute bottom-3 left-3 text-xs font-bold px-2 py-1 rounded"
                    style={{ background: 'rgba(225,29,29,0.85)', color: '#fff', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════════════ */}
      <section style={{ background: '#060606', padding: 'clamp(4rem, 8vw, 7rem) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="mb-14"
          >
            <motion.p variants={fadeUp} className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: RED, fontFamily: 'Oswald, sans-serif' }}>
              Member Stories
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-white"
              style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, lineHeight: 1.1, textTransform: 'uppercase' }}
            >
              What Our <span style={{ color: RED }}>Members Say</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mt-4">
              {[1,2,3,4,5].map((s) => <Star key={s} size={17} color="#f59e0b" />)}
              <span className="font-bold ml-1 text-white">5.0</span>
              <span className="text-sm" style={{ color: MUTED }}>· 398 Google Reviews</span>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 rounded-2xl flex flex-col"
                style={{ background: CARD_BG, border: '1px solid rgba(255,255,255,0.06)', transition: 'border-color 0.25s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = RED_BORDER; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
              >
                <div style={{ color: 'rgba(225,29,29,0.2)', fontSize: '4rem', lineHeight: 0.8, fontFamily: 'Georgia, serif', fontWeight: 900, marginBottom: '12px' }}>
                  &ldquo;
                </div>
                <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: '#d1d5db' }}>{t.text}</p>
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map((s) => <Star key={s} size={13} color="#f59e0b"/>)}
                </div>
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                    style={{ background: RED, color: '#fff', fontFamily: 'Oswald, sans-serif' }}>
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

      {/* ════════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ padding: 'clamp(5rem, 10vw, 8rem) 0' }}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1600&q=80"
            alt="gym"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.12)' }}
          />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(225,29,29,0.1) 0%, transparent 70%)' }} />
          <div className="absolute inset-0 bg-grid opacity-15" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold"
              style={{ background: RED_SOFT, border: `1px solid ${RED_BORDER}`, color: RED }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: RED, boxShadow: `0 0 6px ${RED}` }} />
              Limited Spots Available
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-white mb-6"
              style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, lineHeight: 1.0, textTransform: 'uppercase' }}
            >
              Ready To<br/>
              <span style={{ color: RED }}>Transform?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg mb-10 leading-relaxed" style={{ color: '#9ca3af' }}>
              Join 500+ members already living their best lives. Start with a{' '}
              <strong className="text-white">FREE trial session</strong> — no commitment required.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/join"
                className="inline-flex items-center gap-2 rounded-xl font-bold"
                style={{
                  background: RED, color: '#fff',
                  fontFamily: 'Oswald, sans-serif',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontSize: '1rem',
                  padding: '16px 36px',
                  transition: 'background 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = RED_BRIGHT; e.currentTarget.style.boxShadow = '0 0 40px rgba(225,29,29,0.5)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = RED; e.currentTarget.style.boxShadow = 'none'; }}
              >
                🔥 Claim Your Free Trial
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl font-semibold"
                style={{
                  background: 'transparent', color: '#fff',
                  border: '2px solid rgba(255,255,255,0.25)',
                  fontFamily: 'Oswald, sans-serif',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontSize: '0.9rem',
                  padding: '15px 32px',
                  transition: 'border-color 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.55)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
              >
                📞 Talk to Us
              </Link>
            </motion.div>
            <motion.p variants={fadeUp} className="text-xs mt-6" style={{ color: '#374151' }}>
              No credit card required · Cancel anytime · Free fitness assessment included
            </motion.p>
          </motion.div>
        </div>
      </section>

    </div> 
  );
}