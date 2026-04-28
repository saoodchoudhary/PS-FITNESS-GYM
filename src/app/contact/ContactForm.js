
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

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

  if (submitted) {
    return (
      <div className="glass-card p-8 text-center" style={{ border: '1px solid rgba(57,255,20,0.3)' }}>
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
        <p style={{ color: '#9ca3af' }}>Thank you for reaching out. We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {[
        { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Rahul Sharma' },
        { id: 'email', label: 'Email Address', type: 'email', placeholder: 'rahul@example.com' },
        { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210' },
      ].map(({ id, label, type, placeholder }) => (
        <div key={id}>
          <label htmlFor={id} className="block text-sm font-semibold mb-1.5" style={{ color: '#d1d5db' }}>{label}</label>
          <input
            id={id} type={type} placeholder={placeholder}
            value={form[id]}
            onChange={(e) => setForm({ ...form, [id]: e.target.value })}
            className="w-full px-4 py-3 rounded-lg text-white text-sm outline-none transition-all duration-200"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: errors[id] ? '1px solid #ef4444' : '1px solid rgba(57,255,20,0.2)',
            }}
            onFocus={(e) => { e.currentTarget.style.border = '1px solid #39ff14'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(57,255,20,0.1)'; }}
            onBlur={(e) => { e.currentTarget.style.border = errors[id] ? '1px solid #ef4444' : '1px solid rgba(57,255,20,0.2)'; e.currentTarget.style.boxShadow = 'none'; }}
          />
          {errors[id] && <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{errors[id]}</p>}
        </div>
      ))}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-1.5" style={{ color: '#d1d5db' }}>Message</label>
        <textarea
          id="message" rows={4} placeholder="How can we help you?"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 rounded-lg text-white text-sm outline-none transition-all duration-200 resize-none"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: errors.message ? '1px solid #ef4444' : '1px solid rgba(57,255,20,0.2)',
          }}
          onFocus={(e) => { e.currentTarget.style.border = '1px solid #39ff14'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(57,255,20,0.1)'; }}
          onBlur={(e) => { e.currentTarget.style.border = errors.message ? '1px solid #ef4444' : '1px solid rgba(57,255,20,0.2)'; e.currentTarget.style.boxShadow = 'none'; }}
        />
        {errors.message && <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{errors.message}</p>}
      </div>
      <button type="submit" className="btn-primary w-full justify-center py-3.5">
        Send Message
      </button>
    </form>
  );
}
