'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/trainers', label: 'Trainers' },
  { href: '/membership', label: 'Membership' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(8,8,8,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(225,29,29,0.15)' : 'none',
        boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.7)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* SVG Logo Mark */}
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: '#e11d1d' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 4v16M18 4v16M4 8h4M16 8h4M4 16h4M16 16h4"/>
              </svg>
            </div>
            <span className="font-black text-lg tracking-tight leading-none">
              <span style={{ color: '#e11d1d', fontFamily: 'Oswald, sans-serif', fontSize: '1.2rem', letterSpacing: '0.05em' }}>PS</span>{' '}
              <span style={{ color: '#ffffff', fontFamily: 'Oswald, sans-serif', fontSize: '1.2rem', letterSpacing: '0.05em' }}>FITNESS</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  color: pathname === link.href ? '#e11d1d' : 'rgba(255,255,255,0.75)',
                  background: pathname === link.href ? 'rgba(225,29,29,0.1)' : 'transparent',
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={(e) => {
                  if (pathname !== link.href) {
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== link.href) {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.75)';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/join"
              className="hidden sm:inline-flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-lg transition-all duration-200"
              style={{
                background: '#e11d1d',
                color: '#ffffff',
                fontFamily: 'Oswald, sans-serif',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontSize: '0.85rem',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#ff2222'; e.currentTarget.style.boxShadow = '0 0 20px rgba(225,29,29,0.4)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#e11d1d'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              Join Now
            </Link>
            <button
              className="lg:hidden p-2 rounded-lg"
              style={{ color: 'rgba(255,255,255,0.8)', background: 'rgba(255,255,255,0.06)' }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                {menuOpen ? (
                  <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                ) : (
                  <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? '500px' : '0',
          background: 'rgba(8,8,8,0.99)',
          borderBottom: menuOpen ? '1px solid rgba(225,29,29,0.2)' : 'none',
        }}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                color: pathname === link.href ? '#ffffff' : 'rgba(255,255,255,0.7)',
                background: pathname === link.href ? 'rgba(225,29,29,0.15)' : 'transparent',
                borderLeft: pathname === link.href ? '3px solid #e11d1d' : '3px solid transparent',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/join"
            className="mt-3 w-full flex items-center justify-center font-bold py-3 rounded-lg transition-all"
            style={{
              background: '#e11d1d',
              color: '#ffffff',
              fontFamily: 'Oswald, sans-serif',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
