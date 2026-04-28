
'use client';

import { useState } from 'react';

const goals = [
  'Lose Fat / Weight Loss',
  'Build Muscle / Gain Mass',
  'Improve Strength & Fitness',
  'Improve Flexibility & Mobility',
  'General Health & Wellness',
  'Competitive / Athletic Training',
];

const plans = ['Basic (₹999/mo)', 'Pro (₹1,999/mo)', 'Elite (₹3,499/mo)', 'Not Sure – Need Guidance'];

export default function JoinForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', goal: '', plan: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim() || !/^\+?[\d\s\-]{10,}$/.test(form.phone)) e.phone = 'Valid phone required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    if (!form.goal) e.goal = 'Please select a goal';
    if (!form.plan) e.plan = 'Please select a plan';
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
      <div className="text-center py-8">
        <div className="text-6xl mb-6">🎉</div>
        <h2 className="text-2xl font-bold text-white mb-3">You are In!</h2>
        <p className="mb-2" style={{ color: '#9ca3af' }}>
          Welcome to PS FITNESS GYM, <strong className="text-white">{form.name}</strong>!
        </p>
        <p style={{ color: '#9ca3af' }}>
          We will call you at <strong className="text-white">{form.phone}</strong> within 2 hours.
        </p>
        <div className="mt-6 p-4 rounded-xl" style={{ background: 'rgba(57,255,20,0.08)', border: '1px solid rgba(57,255,20,0.2)' }}>
          <p className="text-sm font-semibold" style={{ color: '#39ff14' }}>Next Steps:</p>
          <p className="text-sm mt-1" style={{ color: '#9ca3af' }}>Check your email at {form.email} for confirmation.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {[
        { id: 'name', label: 'Full Name *', type: 'text', placeholder: 'Rahul Sharma' },
        { id: 'phone', label: 'Phone Number *', type: 'tel', placeholder: '+91 98765 43210' },
        { id: 'email', label: 'Email Address *', type: 'email', placeholder: 'rahul@example.com' },
      ].map(({ id, label, type, placeholder }) => (
        <div key={id}>
          <label htmlFor={id} className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: '#9ca3af' }}>{label}</label>
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
        <label htmlFor="goal" className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: '#9ca3af' }}>Fitness Goal *</label>
        <select id="goal" value={form.goal} onChange={(e) => setForm({ ...form, goal: e.target.value })}
          className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 appearance-none cursor-pointer"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: errors.goal ? '1px solid #ef4444' : '1px solid rgba(57,255,20,0.2)',
            color: form.goal ? '#fff' : '#6b7280',
          }}>
          <option value="" style={{ background: '#111' }}>Select your primary goal</option>
          {goals.map((g) => <option key={g} value={g} style={{ background: '#111' }}>{g}</option>)}
        </select>
        {errors.goal && <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{errors.goal}</p>}
      </div>

      <div>
        <label htmlFor="plan" className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: '#9ca3af' }}>Preferred Plan *</label>
        <select id="plan" value={form.plan} onChange={(e) => setForm({ ...form, plan: e.target.value })}
          className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 appearance-none cursor-pointer"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: errors.plan ? '1px solid #ef4444' : '1px solid rgba(57,255,20,0.2)',
            color: form.plan ? '#fff' : '#6b7280',
          }}>
          <option value="" style={{ background: '#111' }}>Select a plan</option>
          {plans.map((p) => <option key={p} value={p} style={{ background: '#111' }}>{p}</option>)}
        </select>
        {errors.plan && <p className="text-xs mt-1" style={{ color: '#ef4444' }}>{errors.plan}</p>}
      </div>

      <button type="submit" className="btn-primary w-full justify-center py-4 text-base">
        🚀 Claim My FREE Trial Session
      </button>
      <p className="text-xs text-center" style={{ color: '#6b7280' }}>
        No credit card required · We will call you within 2 hours
      </p>
    </form>
  );
}
