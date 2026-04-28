"use client"
import ContactForm from './ContactForm';

// export const metadata = {
//   title: 'Contact Us — PS FITNESS GYM',
//   description: 'Get in touch with PS FITNESS GYM in Sector 12, Gurugram. Call, WhatsApp or visit us today.',
// };

const contactCards = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="#e11d1d" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Address',
    subtitle: 'Visit us',
    lines: ['PS FITNESS GYM', 'Sector 12, Gurugram', 'Haryana 122001'],
    href: 'https://www.google.com/maps/place/PS+FITNESS+GYM/@28.4736389,77.030209,17z',
    external: true,
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="#e11d1d" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.82 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Phone',
    subtitle: 'Call us directly',
    lines: ['+91 98765 43210'],
    href: 'tel:+919876543210',
    external: false,
  },
  {
    icon: (
      <svg width="22" height="22" fill="#25D366" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    ),
    title: 'WhatsApp',
    subtitle: 'Chat with us',
    lines: ['+91 98765 43210'],
    href: 'https://wa.me/919876543210',
    external: true,
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="#e11d1d" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Email',
    subtitle: 'Write to us',
    lines: ['info@psfitnessgym.com'],
    href: 'mailto:info@psfitnessgym.com',
    external: false,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0a0a0a 0%,#1a0505 50%,#0a0a0a 100%)' }}
      >
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute inset-0 bg-grid opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 text-sm font-semibold"
            style={{
              background: 'rgba(225,29,29,0.1)',
              border: '1px solid rgba(225,29,29,0.25)',
              color: '#e11d1d',
            }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: '#e11d1d', boxShadow: '0 0 6px #e11d1d' }} />
            Get In Touch
          </div>

          <h1 className="section-title text-white mb-5">
            Contact <span className="gradient-text">Us</span>
          </h1>

          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#9ca3af' }}>
            Have questions? We'd love to hear from you. Reach out via phone,
            WhatsApp, or fill in the form below.
          </p>
        </div>
      </section>

      {/* ── CONTACT CARDS ── */}
      <section className="py-16" style={{ background: '#050505' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactCards.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener noreferrer' : undefined}
                className="flex flex-col items-center text-center rounded-2xl p-6 group"
                style={{
                  background: '#111',
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(225,29,29,0.3)';
                  e.currentTarget.style.boxShadow   = '0 4px 24px rgba(225,29,29,0.08)';
                  e.currentTarget.style.transform   = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.boxShadow   = 'none';
                  e.currentTarget.style.transform   = 'translateY(0)';
                }}
              >
                {/* Icon container */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: 'rgba(225,29,29,0.08)',
                    border: '1px solid rgba(225,29,29,0.15)',
                  }}
                >
                  {c.icon}
                </div>

                {/* Subtitle */}
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#4b5563' }}>
                  {c.subtitle}
                </p>

                <h3 className="font-bold text-white mb-2" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.04em' }}>
                  {c.title}
                </h3>

                {c.lines.map((l) => (
                  <p key={l} className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>{l}</p>
                ))}

                {/* Arrow on hover */}
                <div
                  className="mt-3 flex items-center gap-1 text-xs font-semibold"
                  style={{ color: '#e11d1d' }}
                >
                  <span>Open</span>
                  <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + MAP ── */}
      <section className="py-24" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Form column */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: '#e11d1d' }}>
                Drop a Message
              </p>
              <h2
                className="text-white mb-8"
                style={{
                  fontFamily: 'Oswald, sans-serif',
                  fontSize: 'clamp(1.6rem,3vw,2.2rem)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                }}
              >
                Send Us a <span className="gradient-text">Message</span>
              </h2>
              <ContactForm />
            </div>

            {/* Map + Hours column */}
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: '#e11d1d' }}>
                  Location
                </p>
                <h2
                  className="text-white mb-6"
                  style={{
                    fontFamily: 'Oswald, sans-serif',
                    fontSize: 'clamp(1.6rem,3vw,2.2rem)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em',
                  }}
                >
                  Find <span className="gradient-text">Us Here</span>
                </h2>

                {/* Map */}
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{ border: '1px solid rgba(225,29,29,0.15)' }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.3888!2d77.030209!3d28.473639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19c06f10a08d%3A0xd12c732b55426341!2sPS%20FITNESS%20GYM!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="280"
                    style={{ border: 0, display: 'block', filter: 'grayscale(30%) contrast(1.1)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="PS FITNESS GYM Location"
                  />
                </div>
              </div>

              {/* Opening Hours */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: '#111',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <h3
                  className="font-bold text-white mb-5 flex items-center gap-2.5"
                  style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.04em' }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(225,29,29,0.1)', border: '1px solid rgba(225,29,29,0.2)' }}
                  >
                    <svg width="16" height="16" fill="none" stroke="#e11d1d" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  Opening Hours
                </h3>

                <div className="space-y-0">
                  {[
                    { day: 'Monday – Friday', hours: '5:00 AM – 10:00 PM', active: true },
                    { day: 'Saturday',         hours: '5:00 AM – 10:00 PM', active: true },
                    { day: 'Sunday',           hours: '6:00 AM – 8:00 PM',  active: false },
                  ].map(({ day, hours, active }, i, arr) => (
                    <div
                      key={day}
                      className="flex justify-between items-center py-3"
                      style={{
                        borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: active ? '#e11d1d' : '#374151' }}
                        />
                        <span className="text-sm" style={{ color: '#d1d5db' }}>{day}</span>
                      </div>
                      <span
                        className="text-sm font-semibold"
                        style={{ color: active ? '#e11d1d' : '#6b7280' }}
                      >
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Elite note */}
                <div
                  className="mt-4 px-4 py-3 rounded-xl flex items-center gap-2.5"
                  style={{
                    background: 'rgba(225,29,29,0.06)',
                    border: '1px solid rgba(225,29,29,0.12)',
                  }}
                >
                  <svg width="14" height="14" fill="none" stroke="#e11d1d" strokeWidth="2.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  <p className="text-xs" style={{ color: '#9ca3af' }}>
                    <strong className="text-white">Elite members</strong> enjoy 24/7 gym access
                  </p>
                </div>
              </div>

              {/* Quick response note */}
              <div
                className="flex items-center gap-3 px-5 py-4 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(37,211,102,0.1)' }}
                >
                  <svg width="16" height="16" fill="#25D366" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <p className="text-sm" style={{ color: '#9ca3af' }}>
                  Fastest response via{' '}
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold"
                    style={{ color: '#25D366' }}
                  >
                    WhatsApp
                  </a>
                  {' '}— we typically reply within 30 mins
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}