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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(10,10,10,0.95)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(57,255,20,0.1)' : 'none',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-black text-sm"
              style={{ background: 'linear-gradient(135deg,#39ff14,#2dd10f)' }}
            >
              PS
            </div>
            <span className="font-black text-lg tracking-tight">
              <span style={{ color: '#39ff14' }}>PS</span>{' '}
              <span className="text-white">FITNESS</span>{' '}
              <span className="text-white/70">GYM</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  color: pathname === link.href ? '#39ff14' : 'rgba(255,255,255,0.8)',
                  background: pathname === link.href ? 'rgba(57,255,20,0.1)' : 'transparent',
                }}
                onMouseEnter={(e) => {
                  if (pathname !== link.href) {
                    e.currentTarget.style.color = '#39ff14';
                    e.currentTarget.style.background = 'rgba(57,255,20,0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== link.href) {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
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
            <Link href="/join" className="hidden sm:inline-flex btn-primary text-sm px-5 py-2.5">
              Join Now
            </Link>
            <button
              className="lg:hidden p-2 rounded-lg"
              style={{ color: '#39ff14' }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                {menuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
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
          maxHeight: menuOpen ? '400px' : '0',
          background: 'rgba(10,10,10,0.98)',
          borderBottom: menuOpen ? '1px solid rgba(57,255,20,0.15)' : 'none',
        }}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                color: pathname === link.href ? '#39ff14' : 'rgba(255,255,255,0.85)',
                background: pathname === link.href ? 'rgba(57,255,20,0.1)' : 'transparent',
                borderLeft: pathname === link.href ? '3px solid #39ff14' : '3px solid transparent',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/join" className="btn-primary mt-3 w-full justify-center">
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
