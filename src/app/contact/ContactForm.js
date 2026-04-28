'use client';

import { useState } from 'react';

const fields = [
  { id: 'name',    label: 'Full Name',     type: 'text',  placeholder: 'Rahul Sharma',       icon: 'user' },
  { id: 'email',   label: 'Email Address', type: 'email', placeholder: 'rahul@example.com',  icon: 'mail' },
  { id: 'phone',   label: 'Phone Number',  type: 'tel',   placeholder: '+91 98765 43210',    icon: 'phone' },
];

function FieldIcon({ type }) {
  const s = { width: 15, height: 15, fill: 'none', stroke: 'currentColor', strokeWidth: 2, viewBox: '0 0 24 24' };
  if (type === 'user')  return <svg {...s}><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  if (type === 'mail')  return <svg {...s}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/><polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  if (type === 'phone') return <svg {...s}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.82 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  return null;
}

export default function ContactForm() {
  const [form, setForm]         = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors]     = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused]   = useState(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    if (!form.phone.trim() || !/^\+?[\d\s\-]{10,}$/.test(form.phone)) e.phone = 'Valid phone number required';
    if (!form.message.trim() || form.message.length < 10) e.message = 'Message must be at least 10 characters';
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) setSubmitted(true);
  };

  const getBorder = (id) => {
    if (errors[id])   return '1px solid #ef4444';
    if (focused === id) return '1px solid #e11d1d';
    return '1px solid rgba(255,255,255,0.08)';
  };

  const getGlow = (id) => {
    if (errors[id])     return '0 0 0 3px rgba(239,68,68,0.12)';
    if (focused === id) return '0 0 0 3px rgba(225,29,29,0.12)';
    return 'none';
  };

  /* ── Success state ── */
  if (submitted) {
    return (
      <div
        className="rounded-2xl p-10 text-center"
        style={{
          background: 'rgba(225,29,29,0.05)',
          border: '1px solid rgba(225,29,29,0.25)',
        }}
      >
        {/* Animated checkmark circle */}
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ background: 'rgba(225,29,29,0.12)', border: '2px solid rgba(225,29,29,0.3)' }}
        >
          <svg width="28" height="28" fill="none" stroke="#e11d1d" strokeWidth="2.5" viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3
          className="text-xl font-bold text-white mb-2"
          style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.04em' }}
        >
          Message Sent!
        </h3>
        <p className="text-sm leading-relaxed mb-6" style={{ color: '#9ca3af' }}>
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }); }}
          className="text-sm font-semibold px-5 py-2.5 rounded-xl"
          style={{
            background: 'rgba(225,29,29,0.1)',
            border: '1px solid rgba(225,29,29,0.2)',
            color: '#e11d1d',
            transition: 'background 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(225,29,29,0.18)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(225,29,29,0.1)'; }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>

      {fields.map(({ id, label, type, placeholder, icon }) => (
        <div key={id}>
          <label
            htmlFor={id}
            className="block text-sm font-semibold mb-1.5"
            style={{ color: focused === id ? '#e11d1d' : '#d1d5db', transition: 'color 0.2s ease' }}
          >
            {label}
          </label>
          <div className="relative">
            {/* Icon */}
            <div
              className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: focused === id ? '#e11d1d' : '#4b5563', transition: 'color 0.2s ease' }}
            >
              <FieldIcon type={icon} />
            </div>
            <input
              id={id}
              type={type}
              placeholder={placeholder}
              value={form[id]}
              onChange={(e) => {
                setForm({ ...form, [id]: e.target.value });
                if (errors[id]) setErrors({ ...errors, [id]: '' });
              }}
              onFocus={() => setFocused(id)}
              onBlur={() => setFocused(null)}
              className="w-full pl-10 pr-4 py-3 rounded-xl text-white text-sm outline-none"
              style={{
                background: focused === id ? 'rgba(225,29,29,0.04)' : 'rgba(255,255,255,0.04)',
                border: getBorder(id),
                boxShadow: getGlow(id),
                transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
              }}
            />
          </div>
          {errors[id] && (
            <p className="text-xs mt-1.5 flex items-center gap-1" style={{ color: '#ef4444' }}>
              <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              {errors[id]}
            </p>
          )}
        </div>
      ))}

      {/* Message textarea */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold mb-1.5"
          style={{ color: focused === 'message' ? '#e11d1d' : '#d1d5db', transition: 'color 0.2s ease' }}
        >
          Message
          <span className="ml-2 font-normal text-xs" style={{ color: '#4b5563' }}>
            ({form.message.length}/500)
          </span>
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell us about your fitness goals or any questions you have..."
          value={form.message}
          onChange={(e) => {
            if (e.target.value.length <= 500) {
              setForm({ ...form, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: '' });
            }
          }}
          onFocus={() => setFocused('message')}
          onBlur={() => setFocused(null)}
          className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none resize-none"
          style={{
            background: focused === 'message' ? 'rgba(225,29,29,0.04)' : 'rgba(255,255,255,0.04)',
            border: getBorder('message'),
            boxShadow: getGlow('message'),
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
          }}
        />
        {errors.message && (
          <p className="text-xs mt-1.5 flex items-center gap-1" style={{ color: '#ef4444' }}>
            <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            {errors.message}
          </p>
        )}
      </div>

      {/* Privacy note */}
      <p className="text-xs" style={{ color: '#374151' }}>
        🔒 Your information is safe with us. We never share your data.
      </p>

      {/* Submit */}
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm"
        style={{
          background: '#e11d1d',
          color: '#ffffff',
          fontFamily: 'Oswald, sans-serif',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          transition: 'background 0.2s ease, box-shadow 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background  = '#ff2222';
          e.currentTarget.style.boxShadow   = '0 0 24px rgba(225,29,29,0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background  = '#e11d1d';
          e.currentTarget.style.boxShadow   = 'none';
        }}
      >
        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <line x1="22" y1="2" x2="11" y2="13" strokeLinecap="round" strokeLinejoin="round"/>
          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
        Send Message
      </button>
    </form>
  );
}