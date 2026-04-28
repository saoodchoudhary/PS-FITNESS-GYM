'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/',           label: 'Home' },
  { href: '/about',      label: 'About' },
  { href: '/services',   label: 'Services' },
  { href: '/trainers',   label: 'Trainers' },
  { href: '/membership', label: 'Membership' },
  { href: '/reviews',    label: 'Reviews' },
  { href: '/gallery',    label: 'Gallery' },
  { href: '/contact',    label: 'Contact' },
];

const RED        = '#e11d1d';
const RED_BRIGHT = '#ff2222';
const RED_BORDER = 'rgba(225,29,29,0.25)';
const RED_SOFT   = 'rgba(225,29,29,0.10)';

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [mounted,   setMounted]   = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  const pathname = usePathname();
  const navRef   = useRef(null);
  const linksRef = useRef({});

  /* Mount flag — prevents SSR mismatch */
  useEffect(() => { setMounted(true); }, []);

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close drawer on route change */
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  /* Sliding active indicator for desktop */
  useEffect(() => {
    const el = linksRef.current[pathname];
    if (el && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const elRect  = el.getBoundingClientRect();
      setIndicatorStyle({ width: elRect.width, left: elRect.left - navRect.left, opacity: 1 });
    }
  }, [pathname, mounted]);

  /* Lock body scroll when drawer open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* ══════════════════════════════════════
          NAVBAR BAR
      ══════════════════════════════════════ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background:          scrolled ? 'rgba(5,5,5,0.97)'  : 'transparent',
          backdropFilter:      scrolled ? 'blur(20px)'        : 'none',
          WebkitBackdropFilter:scrolled ? 'blur(20px)'        : 'none',
          borderBottom:        scrolled ? `1px solid ${RED_BORDER}` : 'none',
          boxShadow:           scrolled ? '0 2px 40px rgba(0,0,0,0.85)' : 'none',
          transition:          'background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* ── LOGO ── */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${RED}, #b91c1c)`,
                  boxShadow: `0 0 0 1px ${RED_BORDER}`,
                  transition: 'box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 18px rgba(225,29,29,0.55), 0 0 0 1px ${RED_BORDER}`; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = `0 0 0 1px ${RED_BORDER}`; }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 4v16M18 4v16M4 8h4M16 8h4M4 16h4M16 16h4"/>
                </svg>
              </div>
              <div className="leading-none">
                <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.2rem', fontWeight: 700, letterSpacing: '0.06em', lineHeight: 1 }}>
                  <span style={{ color: RED }}>PS</span>
                  <span style={{ color: '#fff' }}> FITNESS</span>
                </div>
                <div style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '3px' }}>
                  GYM · GURUGRAM
                </div>
              </div>
            </Link>

            {/* ── DESKTOP NAV LINKS ── */}
            <div className="hidden lg:flex items-center gap-0.5 relative" ref={navRef}>
              {/* Sliding background pill */}
              <div
                className="absolute h-8 rounded-lg pointer-events-none"
                style={{
                  background: RED_SOFT,
                  border:     `1px solid ${RED_BORDER}`,
                  top:        '50%',
                  transform:  'translateY(-50%)',
                  transition: 'left 0.3s cubic-bezier(0.16,1,0.3,1), width 0.3s cubic-bezier(0.16,1,0.3,1)',
                  ...indicatorStyle,
                }}
              />
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    ref={(el) => { if (el) linksRef.current[link.href] = el; }}
                    className="relative px-3.5 py-2 rounded-lg text-sm font-medium z-10"
                    style={{
                      color:         isActive ? RED : 'rgba(255,255,255,0.6)',
                      fontFamily:    'Inter, sans-serif',
                      letterSpacing: '0.02em',
                      transition:    'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="absolute bottom-1 left-1/2 w-1 h-1 rounded-full"
                        style={{ background: RED, transform: 'translateX(-50%)', boxShadow: `0 0 5px ${RED}` }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* ── RIGHT: CTA + HAMBURGER ── */}
            <div className="flex items-center gap-2 flex-shrink-0">

              {/* Phone — md to lg only */}
              <a
                href="tel:+919876543210"
                className="hidden md:flex lg:hidden xl:flex items-center gap-1.5 text-xs"
                style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; }}
              >
                <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.82 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                +91 98765 43210
              </a>

              {/* Divider */}
              <div className="hidden xl:block w-px h-5" style={{ background: 'rgba(255,255,255,0.1)' }} />

              {/* ── JOIN NOW BUTTON (improved) ── */}
              <Link
                href="/join"
                className="hidden sm:inline-flex items-center gap-2 rounded-lg font-bold relative overflow-hidden"
                style={{
                  background:    RED,
                  color:         '#fff',
                  fontFamily:    'Oswald, sans-serif',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontSize:      '0.8rem',
                  padding:       '9px 18px',
                  border:        `1px solid rgba(255,80,80,0.3)`,
                  transition:    'background 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background  = RED_BRIGHT;
                  e.currentTarget.style.boxShadow   = `0 0 22px rgba(225,29,29,0.55), 0 0 0 1px rgba(255,80,80,0.4)`;
                  e.currentTarget.style.transform   = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background  = RED;
                  e.currentTarget.style.boxShadow   = 'none';
                  e.currentTarget.style.transform   = 'translateY(0)';
                }}
              >
                {/* Flame SVG */}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M12 2c0 0-5 4-5 9a5 5 0 0010 0c0-5-5-9-5-9zm0 14a3 3 0 01-3-3c0-2 1.5-4 3-5 1.5 1 3 3 3 5a3 3 0 01-3 3z"/>
                </svg>
                Join Now
                {/* Shine sweep on hover */}
                <span
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%)',
                    transform: 'translateX(-100%)',
                    transition: 'transform 0.4s ease',
                  }}
                  aria-hidden="true"
                />
              </Link>

              {/* ── HAMBURGER ── */}
              <button
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg"
                style={{
                  background: menuOpen ? RED_SOFT : 'rgba(255,255,255,0.06)',
                  border:     menuOpen ? `1px solid ${RED_BORDER}` : '1px solid rgba(255,255,255,0.08)',
                  color:      menuOpen ? RED : 'rgba(255,255,255,0.8)',
                  transition: 'all 0.2s ease',
                }}
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                <svg
                  width="18" height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {menuOpen ? (
                    <>
                      <line x1="18" y1="6"  x2="6"  y2="18" />
                      <line x1="6"  y1="6"  x2="18" y2="18" />
                    </>
                  ) : (
                    <>
                      <line x1="3"  y1="6"  x2="21" y2="6"  />
                      <line x1="3"  y1="12" x2="21" y2="12" />
                      <line x1="3"  y1="18" x2="21" y2="18" />
                    </>
                  )}
                </svg>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════
          BACKDROP — click to close
      ══════════════════════════════════════ */}
      <div
        className="fixed inset-0 z-40 lg:hidden"
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        style={{
          background:     'rgba(0,0,0,0.65)',
          backdropFilter: 'blur(3px)',
          opacity:        menuOpen ? 1 : 0,
          pointerEvents:  menuOpen ? 'auto' : 'none',
          transition:     'opacity 0.3s ease',
        }}
      />

      {/* ══════════════════════════════════════
          MOBILE DRAWER — slides in from RIGHT
      ══════════════════════════════════════ */}
      <aside
        className="fixed top-0 right-0 bottom-0 z-50 lg:hidden flex flex-col"
        style={{
          width:      'min(320px, 85vw)',
          background: '#0a0a0a',
          borderLeft: `1px solid ${RED_BORDER}`,
          boxShadow:  menuOpen ? '-8px 0 40px rgba(0,0,0,0.8)' : 'none',
          /* RIGHT → LEFT slide */
          transform:  menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
          overflowY:  'auto',
        }}
        aria-label="Mobile navigation"
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-5 py-4 flex-shrink-0"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          {/* Logo mini */}
          <Link href="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${RED}, #b91c1c)` }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 4v16M18 4v16M4 8h4M16 8h4M4 16h4M16 16h4"/>
              </svg>
            </div>
            <div className="leading-none">
              <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.06em' }}>
                <span style={{ color: RED }}>PS</span>
                <span style={{ color: '#fff' }}> FITNESS</span>
              </div>
              <div style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: '2px' }}>
                GYM · GURUGRAM
              </div>
            </div>
          </Link>

          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'rgba(255,255,255,0.7)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = RED_SOFT; e.currentTarget.style.borderColor = RED_BORDER; e.currentTarget.style.color = RED; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
            aria-label="Close menu"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-3 py-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium"
                  style={{
                    color:       isActive ? '#fff' : 'rgba(255,255,255,0.6)',
                    background:  isActive ? RED_SOFT : 'transparent',
                    borderLeft:  isActive ? `3px solid ${RED}` : '3px solid transparent',
                    fontFamily:  'Inter, sans-serif',
                    letterSpacing: '0.01em',
                    transition:  'all 0.15s ease',
                    /* Stagger: drawer links slide in slightly delayed */
                    transitionDelay: menuOpen ? `${i * 0.03}s` : '0s',
                  }}
                  onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = '#fff'; } }}
                  onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; } }}
                >
                  <span>{link.label}</span>
                  <svg
                    width="13" height="13"
                    fill="none"
                    stroke={isActive ? RED : 'rgba(255,255,255,0.2)'}
                    strokeWidth="2.5" viewBox="0 0 24 24"
                  >
                    <polyline points="9 18 15 12 9 6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Drawer footer */}
        <div
          className="px-4 pb-6 pt-4 flex-shrink-0 space-y-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          {/* Phone */}
          <a
            href="tel:+919876543210"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm"
            style={{
              color: 'rgba(255,255,255,0.5)',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
              fontFamily: 'Inter, sans-serif',
              transition: 'color 0.2s ease, background 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
          >
            <svg width="15" height="15" fill="none" stroke={RED} strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.82 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            +91 98765 43210
          </a>

          {/* Join CTA */}
          <Link
            href="/join"
            className="w-full flex items-center justify-center gap-2.5 rounded-xl font-bold"
            style={{
              background:    `linear-gradient(135deg, ${RED}, #b91c1c)`,
              color:         '#fff',
              fontFamily:    'Oswald, sans-serif',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontSize:      '0.9rem',
              padding:       '14px 20px',
              boxShadow:     `0 0 28px rgba(225,29,29,0.3)`,
              border:        `1px solid rgba(255,80,80,0.25)`,
              transition:    'box-shadow 0.2s ease, background 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 36px rgba(225,29,29,0.5)`; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = `0 0 28px rgba(225,29,29,0.3)`; }}
          >
            {/* Flame */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2c0 0-5 4-5 9a5 5 0 0010 0c0-5-5-9-5-9zm0 14a3 3 0 01-3-3c0-2 1.5-4 3-5 1.5 1 3 3 3 5a3 3 0 01-3 3z"/>
            </svg>
            🔥 Join Now — Free Trial
          </Link>

          <p className="text-center text-xs" style={{ color: '#4b5563' }}>
            No joining fee · Free fitness assessment
          </p>
        </div>
      </aside>
    </>
  );
}