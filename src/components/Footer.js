'use client';

import Link from 'next/link';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/trainers', label: 'Our Trainers' },
  { href: '/membership', label: 'Membership' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

const services = [
  'Weight Training',
  'Personal Training',
  'Fat Loss Program',
  'Muscle Gain',
  'Cardio Training',
  'Nutrition Consulting',
];

export default function Footer() {
  return (
    <footer style={{ background: '#050505', borderTop: '1px solid rgba(57,255,20,0.1)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-black"
                style={{ background: 'linear-gradient(135deg,#39ff14,#2dd10f)' }}
              >
                PS
              </div>
              <span className="font-black text-xl">
                <span style={{ color: '#39ff14' }}>PS</span> FITNESS GYM
              </span>
            </Link>
            <p className="text-sm mb-4" style={{ color: '#9ca3af' }}>
              Transform Your Body, Transform Your Life! Gurugram&apos;s premier fitness destination with expert trainers and modern equipment.
            </p>
            <div className="flex items-center gap-1 mb-6">
              {[1,2,3,4,5].map((s) => (
                <svg key={s} width="16" height="16" fill="#39ff14" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
              <span className="text-sm font-semibold ml-1" style={{ color: '#39ff14' }}>5.0</span>
              <span className="text-sm ml-1" style={{ color: '#9ca3af' }}>(398 reviews)</span>
            </div>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { label: 'Facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                { label: 'Instagram', path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19h11a3 3 0 003-3V8a3 3 0 00-3-3h-11a3 3 0 00-3 3v8a3 3 0 003 3z' },
                { label: 'YouTube', path: 'M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z' },
              ].map(({ label, path }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ background: 'rgba(57,255,20,0.1)', color: '#39ff14' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(57,255,20,0.2)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(57,255,20,0.1)'; }}
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d={path} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-5 text-base tracking-wide uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 flex items-center gap-2"
                    style={{ color: '#9ca3af' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#39ff14'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#9ca3af'; }}
                  >
                    <span style={{ color: '#39ff14' }}>›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-5 text-base tracking-wide uppercase">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm transition-colors duration-200 flex items-center gap-2"
                    style={{ color: '#9ca3af' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#39ff14'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#9ca3af'; }}
                  >
                    <span style={{ color: '#39ff14' }}>›</span>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-5 text-base tracking-wide uppercase">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <svg width="18" height="18" fill="none" stroke="#39ff14" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0 mt-0.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sm" style={{ color: '#9ca3af' }}>
                  Sector 12, Gurugram, Haryana 122001, India
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <svg width="18" height="18" fill="none" stroke="#39ff14" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.82 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href="tel:+919876543210" className="text-sm transition-colors" style={{ color: '#9ca3af' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#39ff14'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#9ca3af'; }}>
                  +91 98765 43210
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <svg width="18" height="18" fill="#25D366" viewBox="0 0 24 24" className="shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
                  className="text-sm transition-colors" style={{ color: '#9ca3af' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#25D366'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#9ca3af'; }}>
                  +91 98765 43210
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <svg width="18" height="18" fill="none" stroke="#39ff14" strokeWidth="2" viewBox="0 0 24 24" className="shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href="mailto:info@psfitnessgym.com" className="text-sm transition-colors" style={{ color: '#9ca3af' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#39ff14'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#9ca3af'; }}>
                  info@psfitnessgym.com
                </a>
              </li>
            </ul>
            <div className="mt-5 p-3 rounded-lg" style={{ background: 'rgba(57,255,20,0.05)', border: '1px solid rgba(57,255,20,0.15)' }}>
              <p className="text-xs font-semibold mb-1" style={{ color: '#39ff14' }}>Opening Hours</p>
              <p className="text-xs" style={{ color: '#9ca3af' }}>Mon – Sat: 5:00 AM – 10:00 PM</p>
              <p className="text-xs" style={{ color: '#9ca3af' }}>Sunday: 6:00 AM – 8:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm" style={{ color: '#6b7280' }}>
              © {new Date().getFullYear()} PS FITNESS GYM. All rights reserved.
            </p>
            <p className="text-sm" style={{ color: '#6b7280' }}>
              Sector 12, Gurugram, Haryana, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
