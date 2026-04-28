
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with PS FITNESS GYM in Sector 12, Gurugram. Call, WhatsApp or visit us today.',
};

const contactCards = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#39ff14" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Address',
    lines: ['PS FITNESS GYM', 'Sector 12, Gurugram', 'Haryana 122001, India'],
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#39ff14" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.82 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Phone',
    lines: ['+91 98765 43210'],
    link: 'tel:+919876543210',
  },
  {
    icon: (
      <svg width="24" height="24" fill="#25D366" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    ),
    title: 'WhatsApp',
    lines: ['+91 98765 43210'],
    link: 'https://wa.me/919876543210',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="#39ff14" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Email',
    lines: ['info@psfitnessgym.com'],
    link: 'mailto:info@psfitnessgym.com',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0a0a0a 0%,#0f1a0f 50%,#0a0a0a 100%)' }}>
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#39ff14' }}>Get In Touch</p>
          <h1 className="section-title text-white mb-6">
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#9ca3af' }}>
            Have questions? We would love to hear from you. Reach out via phone, WhatsApp, or fill in the form below.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16" style={{ background: '#050505' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((c) => (
              <div key={c.title} className="glass-card p-6 text-center" style={{ border: '1px solid rgba(57,255,20,0.1)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'rgba(57,255,20,0.08)' }}>
                  {c.icon}
                </div>
                <h3 className="font-bold text-white mb-2">{c.title}</h3>
                {c.lines.map((l) =>
                  c.link ? (
                    <a key={l} href={c.link}
                      target={c.link.startsWith('http') ? '_blank' : undefined}
                      rel={c.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block text-sm" style={{ color: '#9ca3af' }}>
                      {l}
                    </a>
                  ) : (
                    <p key={l} className="text-sm" style={{ color: '#9ca3af' }}>{l}</p>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-24" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">
                Send Us a <span className="gradient-text">Message</span>
              </h2>
              <ContactForm />
            </div>

            {/* Map + Hours */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Find <span className="gradient-text">Us Here</span>
                </h2>
                <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(57,255,20,0.15)' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.3888!2d77.030209!3d28.473639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19c06f10a08d%3A0xd12c732b55426341!2sPS%20FITNESS%20GYM!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%" height="300"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="PS FITNESS GYM Location"
                  />
                </div>
              </div>
              <div className="glass-card p-6" style={{ border: '1px solid rgba(57,255,20,0.1)' }}>
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                  <svg width="20" height="20" fill="none" stroke="#39ff14" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Opening Hours
                </h3>
                <div className="space-y-2">
                  {[
                    { day: 'Monday – Friday', hours: '5:00 AM – 10:00 PM' },
                    { day: 'Saturday', hours: '5:00 AM – 10:00 PM' },
                    { day: 'Sunday', hours: '6:00 AM – 8:00 PM' },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex justify-between items-center py-2"
                      style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <span className="text-sm" style={{ color: '#d1d5db' }}>{day}</span>
                      <span className="text-sm font-semibold" style={{ color: '#39ff14' }}>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
