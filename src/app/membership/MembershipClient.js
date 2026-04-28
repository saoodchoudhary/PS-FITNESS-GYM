
'use client';

import { useState } from 'react';
import Link from 'next/link';

const plans = {
  monthly: [
    {
      name: 'Basic',
      price: 999,
      desc: 'Perfect for beginners starting their fitness journey.',
      color: '#9ca3af',
      features: [
        'Gym access (6 AM – 10 PM)',
        'All cardio equipment',
        'Basic strength machines',
        'Locker room access',
        'Monthly fitness assessment',
      ],
      notIncluded: ['Personal trainer sessions', 'Nutrition consulting', 'Group classes'],
    },
    {
      name: 'Pro',
      price: 1999,
      desc: 'Our most popular plan for serious fitness enthusiasts.',
      color: '#39ff14',
      popular: true,
      features: [
        'Unlimited gym access (5 AM – 10 PM)',
        'All equipment access',
        '4 personal trainer sessions/month',
        'Group classes included',
        'Weekly progress tracking',
        'Basic nutrition guidance',
        'Locker & towel service',
      ],
      notIncluded: ['Dedicated nutrition plan'],
    },
    {
      name: 'Elite',
      price: 3499,
      desc: 'The ultimate package for maximum results.',
      color: '#ef4444',
      features: [
        '24/7 gym access',
        'All equipment access',
        '12 personal trainer sessions/month',
        'All group classes included',
        'Full nutrition plan & consulting',
        'Body composition analysis',
        'Supplement guidance',
        'Priority booking & support',
        'Guest passes (2/month)',
      ],
      notIncluded: [],
    },
  ],
  yearly: [
    {
      name: 'Basic',
      price: 799,
      desc: 'Perfect for beginners starting their fitness journey.',
      color: '#9ca3af',
      features: [
        'Gym access (6 AM – 10 PM)',
        'All cardio equipment',
        'Basic strength machines',
        'Locker room access',
        'Monthly fitness assessment',
      ],
      notIncluded: ['Personal trainer sessions', 'Nutrition consulting', 'Group classes'],
    },
    {
      name: 'Pro',
      price: 1599,
      desc: 'Our most popular plan for serious fitness enthusiasts.',
      color: '#39ff14',
      popular: true,
      features: [
        'Unlimited gym access (5 AM – 10 PM)',
        'All equipment access',
        '4 personal trainer sessions/month',
        'Group classes included',
        'Weekly progress tracking',
        'Basic nutrition guidance',
        'Locker & towel service',
      ],
      notIncluded: ['Dedicated nutrition plan'],
    },
    {
      name: 'Elite',
      price: 2799,
      desc: 'The ultimate package for maximum results.',
      color: '#ef4444',
      features: [
        '24/7 gym access',
        'All equipment access',
        '12 personal trainer sessions/month',
        'All group classes included',
        'Full nutrition plan & consulting',
        'Body composition analysis',
        'Supplement guidance',
        'Priority booking & support',
        'Guest passes (2/month)',
      ],
      notIncluded: [],
    },
  ],
};

export function PricingSection() {
  const [billing, setBilling] = useState('monthly');
  const activePlans = plans[billing];

  return (
    <>
      {/* Toggle */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex rounded-xl p-1.5"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <button
            onClick={() => setBilling('monthly')}
            className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
            style={{
              background: billing === 'monthly' ? '#39ff14' : 'transparent',
              color: billing === 'monthly' ? '#000' : '#9ca3af',
            }}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling('yearly')}
            className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-2"
            style={{
              background: billing === 'yearly' ? '#39ff14' : 'transparent',
              color: billing === 'yearly' ? '#000' : '#9ca3af',
            }}
          >
            Yearly
            <span className="text-xs px-2 py-0.5 rounded-full font-bold"
              style={{
                background: billing === 'yearly' ? 'rgba(0,0,0,0.3)' : 'rgba(57,255,20,0.15)',
                color: billing === 'yearly' ? '#000' : '#39ff14',
              }}>
              -20%
            </span>
          </button>
        </div>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {activePlans.map((plan) => (
          <div
            key={plan.name}
            className="relative rounded-2xl p-px overflow-hidden"
            style={{
              background: plan.popular ? plan.color : 'rgba(255,255,255,0.05)',
              transform: plan.popular ? 'scale(1.03)' : 'scale(1)',
            }}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full text-xs font-bold z-10"
                style={{ background: '#39ff14', color: '#000' }}>
                MOST POPULAR
              </div>
            )}
            <div className="rounded-2xl p-8 h-full" style={{ background: '#111' }}>
              <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
              <p className="text-sm mb-6" style={{ color: '#9ca3af' }}>{plan.desc}</p>
              <div className="mb-6">
                <span className="text-5xl font-black" style={{ color: plan.color }}>₹{plan.price.toLocaleString()}</span>
                <span className="text-sm ml-1" style={{ color: '#9ca3af' }}>/month</span>
                {billing === 'yearly' && (
                  <p className="text-xs mt-1" style={{ color: '#6b7280' }}>Billed annually</p>
                )}
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm" style={{ color: '#d1d5db' }}>
                    <svg width="16" height="16" fill="none" stroke="#39ff14" strokeWidth="2.5" viewBox="0 0 24 24" className="shrink-0 mt-0.5">
                      <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
                {plan.notIncluded.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm" style={{ color: '#4b5563' }}>
                    <svg width="16" height="16" fill="none" stroke="#4b5563" strokeWidth="2.5" viewBox="0 0 24 24" className="shrink-0 mt-0.5">
                      <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round"/>
                      <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/join"
                className="block w-full text-center py-3 rounded-lg font-bold text-sm transition-all duration-200"
                style={{
                  background: plan.popular ? '#39ff14' : 'transparent',
                  color: plan.popular ? '#000' : plan.color,
                  border: `2px solid ${plan.color}`,
                }}
              >
                Choose {plan.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

const faqs = [
  { q: 'Is there a joining fee?', a: 'No joining fee for the first month! Sign up now and only pay the monthly membership fee.' },
  { q: 'Can I freeze my membership?', a: 'Yes, you can freeze your membership for up to 2 months per year at no extra charge.' },
  { q: 'Is there a free trial?', a: 'Absolutely! We offer a free one-day trial session. Contact us to book your slot.' },
  { q: 'What are the gym timings?', a: 'Basic & Pro: 5 AM – 10 PM (Mon–Sat), 6 AM – 8 PM (Sun). Elite members get 24/7 access.' },
  { q: 'Can I switch plans?', a: 'You can upgrade or downgrade your plan at any time. Changes take effect from the next billing cycle.' },
  { q: 'Is there a student discount?', a: 'Yes! Students get 15% off any plan with a valid student ID.' },
];

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div key={i} className="glass-card overflow-hidden" style={{ border: '1px solid rgba(57,255,20,0.1)' }}>
          <button
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left"
          >
            <span className="font-semibold text-white">{faq.q}</span>
            <svg
              width="20" height="20" fill="none" stroke="#39ff14" strokeWidth="2" viewBox="0 0 24 24"
              style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}
            >
              <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {openFaq === i && (
            <div className="px-5 pb-5 text-sm" style={{ color: '#9ca3af' }}>{faq.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}
