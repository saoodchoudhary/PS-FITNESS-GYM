'use client';

import { useState } from 'react';

const RED        = '#e11d1d';
const RED_BRIGHT = '#ff2222';
const RED_BORDER = 'rgba(225,29,29,0.22)';
const RED_SOFT   = 'rgba(225,29,29,0.10)';
const ERROR      = '#ef4444';

const goals = [
  'Lose Fat / Weight Loss',
  'Build Muscle / Gain Mass',
  'Improve Strength & Fitness',
  'Improve Flexibility & Mobility',
  'General Health & Wellness',
  'Competitive / Athletic Training',
];

const plans = [
  'Basic (₹999/mo)',
  'Pro (₹1,999/mo)',
  'Elite (₹3,499/mo)',
  'Not Sure – Need Guidance',
];

/* Shared input style */
function inputStyle(hasError) {
  return {
    background: 'rgba(255,255,255,0.04)',
    border: hasError ? `1px solid ${ERROR}` : `1px solid rgba(255,255,255,0.1)`,
    borderRadius: '0.625rem',
    color: '#fff',
    fontSize: '0.9rem',
    width: '100%',
    padding: '12px 16px',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  };
}

export default function JoinForm() {
  const [form, setForm]         = useState({ name: '', phone: '', email: '', goal: '', plan: '' });
  const [errors, setErrors]     = useState({});
  const [focused, setFocused]   = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim() || !/^\+?[\d\s\-]{10,}$/.test(form.phone)) e.phone = 'Enter a valid phone number';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address';
    if (!form.goal) e.goal = 'Please select a fitness goal';
    if (!form.plan) e.plan = 'Please choose a plan';
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setLoading(true);
      setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
    }
  };

  /* Focus/blur handlers */
  const onFocus = (id) => (e) => {
    setFocused(id);
    e.currentTarget.style.borderColor = RED;
    e.currentTarget.style.boxShadow   = `0 0 0 3px rgba(225,29,29,0.12)`;
  };
  const onBlur = (id) => (e) => {
    setFocused('');
    e.currentTarget.style.borderColor = errors[id] ? ERROR : 'rgba(255,255,255,0.1)';
    e.currentTarget.style.boxShadow   = 'none';
  };

  /* ── Success state ── */
  if (submitted) {
    return (
      <div className="text-center py-6">
        {/* Animated checkmark */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: RED_SOFT, border: `2px solid ${RED_BORDER}` }}
        >
          <svg width="36" height="36" fill="none" stroke={RED} strokeWidth="2.5" viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h2
          className="text-white mb-2"
          style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}
        >
          You&apos;re In! 🎉
        </h2>
        <p className="mb-1 text-sm" style={{ color: '#9ca3af' }}>
          Welcome to PS FITNESS GYM, <strong className="text-white">{form.name}</strong>!
        </p>
        <p className="text-sm" style={{ color: '#9ca3af' }}>
          We&apos;ll call you at <strong className="text-white">{form.phone}</strong> within 2 hours.
        </p>

        <div
          className="mt-6 p-4 rounded-xl text-left"
          style={{ background: RED_SOFT, border: `1px solid ${RED_BORDER}` }}
        >
          <p className="text-sm font-bold mb-1" style={{ color: RED, fontFamily: 'Oswald, sans-serif', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Next Steps
          </p>
          <ul className="space-y-1.5">
            {[
              `Check ${form.email} for your confirmation`,
              'Our trainer will call you within 2 hours',
              'Arrive 10 mins early on your first day',
            ].map((step) => (
              <li key={step} className="flex items-start gap-2 text-xs" style={{ color: '#d1d5db' }}>
                <svg width="12" height="12" fill="none" stroke={RED} strokeWidth="2.5" viewBox="0 0 24 24" className="mt-0.5 flex-shrink-0">
                  <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  /* ── Form ── */
  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>

      {/* Text / Tel / Email fields */}
      {[
        { id: 'name',  label: 'Full Name',       type: 'text',  placeholder: 'Rahul Sharma' },
        { id: 'phone', label: 'Phone Number',    type: 'tel',   placeholder: '+91 98765 43210' },
        { id: 'email', label: 'Email Address',   type: 'email', placeholder: 'rahul@example.com' },
      ].map(({ id, label, type, placeholder }) => (
        <div key={id}>
          <label
            htmlFor={id}
            className="block text-xs font-bold mb-1.5 uppercase tracking-widest"
            style={{ color: focused === id ? RED : '#6b7280', transition: 'color 0.2s ease' }}
          >
            {label} <span style={{ color: RED }}>*</span>
          </label>
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            value={form[id]}
            onChange={set(id)}
            onFocus={onFocus(id)}
            onBlur={onBlur(id)}
            style={inputStyle(errors[id])}
            autoComplete={id === 'name' ? 'name' : id === 'email' ? 'email' : 'tel'}
          />
          {errors[id] && (
            <p className="text-xs mt-1 flex items-center gap-1" style={{ color: ERROR }}>
              <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              {errors[id]}
            </p>
          )}
        </div>
      ))}

      {/* Goal selector */}
      <div>
        <label
          htmlFor="goal"
          className="block text-xs font-bold mb-1.5 uppercase tracking-widest"
          style={{ color: focused === 'goal' ? RED : '#6b7280', transition: 'color 0.2s ease' }}
        >
          Fitness Goal <span style={{ color: RED }}>*</span>
        </label>
        <div className="relative">
          <select
            id="goal"
            value={form.goal}
            onChange={set('goal')}
            onFocus={onFocus('goal')}
            onBlur={onBlur('goal')}
            style={{ ...inputStyle(errors.goal), color: form.goal ? '#fff' : '#6b7280', appearance: 'none', cursor: 'pointer' }}
          >
            <option value="" style={{ background: '#111', color: '#6b7280' }}>Select your primary goal</option>
            {goals.map((g) => <option key={g} value={g} style={{ background: '#111', color: '#fff' }}>{g}</option>)}
          </select>
          {/* Chevron */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="14" height="14" fill="none" stroke="#6b7280" strokeWidth="2.5" viewBox="0 0 24 24">
              <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        {errors.goal && (
          <p className="text-xs mt-1 flex items-center gap-1" style={{ color: ERROR }}>
            <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            {errors.goal}
          </p>
        )}
      </div>

      {/* Plan selector */}
      <div>
        <label
          htmlFor="plan"
          className="block text-xs font-bold mb-1.5 uppercase tracking-widest"
          style={{ color: focused === 'plan' ? RED : '#6b7280', transition: 'color 0.2s ease' }}
        >
          Preferred Plan <span style={{ color: RED }}>*</span>
        </label>
        <div className="grid grid-cols-2 gap-2.5">
          {plans.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setForm({ ...form, plan: p })}
              className="text-left text-xs font-semibold px-3 py-3 rounded-xl transition-all duration-200"
              style={{
                background: form.plan === p ? RED_SOFT : 'rgba(255,255,255,0.04)',
                border: form.plan === p ? `1.5px solid ${RED}` : '1.5px solid rgba(255,255,255,0.08)',
                color: form.plan === p ? '#ffffff' : '#9ca3af',
                boxShadow: form.plan === p ? `0 0 12px rgba(225,29,29,0.15)` : 'none',
              }}
            >
              {p}
            </button>
          ))}
        </div>
        {errors.plan && (
          <p className="text-xs mt-1.5 flex items-center gap-1" style={{ color: ERROR }}>
            <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            {errors.plan}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2.5 rounded-xl font-bold"
        style={{
          background: loading ? 'rgba(225,29,29,0.6)' : RED,
          color: '#fff',
          fontFamily: 'Oswald, sans-serif',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          fontSize: '1rem',
          padding: '15px 24px',
          border: 'none',
          cursor: loading ? 'not-allowed' : 'pointer',
          transition: 'background 0.2s ease, box-shadow 0.2s ease',
          boxShadow: loading ? 'none' : undefined,
        }}
        onMouseEnter={(e) => { if (!loading) { e.currentTarget.style.background = RED_BRIGHT; e.currentTarget.style.boxShadow = '0 0 28px rgba(225,29,29,0.45)'; } }}
        onMouseLeave={(e) => { if (!loading) { e.currentTarget.style.background = RED; e.currentTarget.style.boxShadow = 'none'; } }}
      >
        {loading ? (
          <>
            {/* Spinner */}
            <svg className="animate-spin" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeOpacity="0.25"/>
              <path d="M12 2a10 10 0 0110 10" strokeLinecap="round"/>
            </svg>
            Submitting...
          </>
        ) : (
          <>
            🚀 Claim My FREE Trial Session
          </>
        )}
      </button>

      <p className="text-xs text-center" style={{ color: '#4b5563' }}>
        No credit card required · We&apos;ll call you within 2 hours
      </p>
    </form>
  );
}