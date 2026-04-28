'use client';

import { useState } from 'react';
import Link from 'next/link';

const plans = {
  monthly: [
    {
      name: 'Basic',
      price: 999,
      desc: 'Perfect for beginners starting their fitness journey.',
      accentColor: '#9ca3af',
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
      accentColor: '#e11d1d',
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
      accentColor: '#ffffff',
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
      accentColor: '#9ca3af',
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
      accentColor: '#e11d1d',
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
      accentColor: '#ffffff',
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
      {/* ── Billing Toggle ── */}
      <div className="flex justify-center mb-12">
        <div
          className="inline-flex rounded-xl p-1.5"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {['monthly', 'yearly'].map((b) => (
            <button
              key={b}
              onClick={() => setBilling(b)}
              className="relative px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 capitalize"
              style={{
                background: billing === b ? '#e11d1d' : 'transparent',
                color: billing === b ? '#ffffff' : '#9ca3af',
                transition: 'all 0.2s ease',
              }}
            >
              {b === 'yearly' ? 'Yearly' : 'Monthly'}
              {b === 'yearly' && (
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-bold"
                  style={{
                    background: billing === 'yearly' ? 'rgba(255,255,255,0.2)' : 'rgba(225,29,29,0.15)',
                    color: billing === 'yearly' ? '#fff' : '#e11d1d',
                  }}
                >
                  −20%
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── Plan Cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
        {activePlans.map((plan) => (
          <div
            key={plan.name}
            className="relative rounded-2xl flex flex-col"
            style={{
              background: plan.popular
                ? 'linear-gradient(160deg, #1a0505 0%, #110000 100%)'
                : '#111',
              border: plan.popular
                ? '1px solid rgba(225,29,29,0.4)'
                : '1px solid rgba(255,255,255,0.07)',
              boxShadow: plan.popular ? '0 0 40px rgba(225,29,29,0.12)' : 'none',
              transform: plan.popular ? 'scale(1.03)' : 'scale(1)',
              transition: 'transform 0.3s ease',
            }}
          >
            {/* Popular badge */}
            {plan.popular && (
              <div
                className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap"
                style={{
                  background: '#e11d1d',
                  color: '#fff',
                  fontFamily: 'Oswald, sans-serif',
                  letterSpacing: '0.1em',
                  boxShadow: '0 0 16px rgba(225,29,29,0.5)',
                }}
              >
                ★ MOST POPULAR
              </div>
            )}

            <div className="p-7 flex flex-col flex-1">
              {/* Plan name */}
              <div className="flex items-center justify-between mb-1">
                <h3
                  className="text-lg font-bold"
                  style={{
                    fontFamily: 'Oswald, sans-serif',
                    letterSpacing: '0.05em',
                    color: plan.accentColor,
                  }}
                >
                  {plan.name}
                </h3>
                {plan.popular && (
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: 'rgba(225,29,29,0.15)',
                      color: '#e11d1d',
                      border: '1px solid rgba(225,29,29,0.25)',
                    }}
                  >
                    Best Value
                  </span>
                )}
              </div>

              <p className="text-sm mb-6" style={{ color: '#6b7280' }}>
                {plan.desc}
              </p>

              {/* Price */}
              <div className="mb-7">
                <div className="flex items-end gap-1">
                  <span
                    className="text-5xl font-black"
                    style={{
                      color: plan.popular ? '#e11d1d' : plan.accentColor,
                      fontFamily: 'Oswald, sans-serif',
                      lineHeight: 1,
                    }}
                  >
                    ₹{plan.price.toLocaleString()}
                  </span>
                  <span className="text-sm mb-1" style={{ color: '#6b7280' }}>
                    /month
                  </span>
                </div>
                {billing === 'yearly' && (
                  <p className="text-xs mt-1.5" style={{ color: '#4b5563' }}>
                    Billed ₹{(plan.price * 12).toLocaleString()} annually
                  </p>
                )}
              </div>

              {/* Included features */}
              <ul className="space-y-2.5 mb-4">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm"
                    style={{ color: '#d1d5db' }}
                  >
                    <svg
                      width="15" height="15" fill="none"
                      stroke="#e11d1d" strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      className="flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}

                {/* Not included */}
                {plan.notIncluded.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm"
                    style={{ color: '#374151' }}
                  >
                    <svg
                      width="15" height="15" fill="none"
                      stroke="#374151" strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      className="flex-shrink-0 mt-0.5"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round"/>
                      <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="flex-1" />
              <div
                className="my-5"
                style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }}
              />

              {/* CTA Button */}
              <Link
                href="/join"
                className="block w-full text-center py-3 rounded-xl font-bold text-sm"
                style={{
                  background: plan.popular ? '#e11d1d' : 'transparent',
                  color: plan.popular ? '#ffffff' : plan.accentColor,
                  border: `2px solid ${plan.popular ? '#e11d1d' : 'rgba(255,255,255,0.12)'}`,
                  fontFamily: 'Oswald, sans-serif',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (plan.popular) {
                    e.currentTarget.style.background = '#ff2222';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(225,29,29,0.4)';
                  } else {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.borderColor = plan.accentColor;
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.popular) {
                    e.currentTarget.style.background = '#e11d1d';
                    e.currentTarget.style.boxShadow = 'none';
                  } else {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                  }
                }}
              >
                Choose {plan.name}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <p className="text-center text-xs mt-8" style={{ color: '#4b5563' }}>
        All plans include free locker access · No contract lock-in · Cancel anytime
      </p>
    </>
  );
}

/* ─────────────────────────────────────
   FAQ SECTION
───────────────────────────────────── */
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
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-xl"
          style={{
            background: openFaq === i ? 'rgba(225,29,29,0.05)' : 'rgba(255,255,255,0.03)',
            border: openFaq === i
              ? '1px solid rgba(225,29,29,0.25)'
              : '1px solid rgba(255,255,255,0.06)',
            transition: 'border-color 0.2s ease, background 0.2s ease',
          }}
        >
          <button
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left"
          >
            <span
              className="font-semibold text-sm pr-4"
              style={{ color: openFaq === i ? '#ffffff' : '#d1d5db' }}
            >
              {faq.q}
            </span>
            {/* Animated chevron */}
            <span
              className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
              style={{
                background: openFaq === i ? 'rgba(225,29,29,0.2)' : 'rgba(255,255,255,0.05)',
                transition: 'background 0.2s ease',
              }}
            >
              <svg
                width="14" height="14" fill="none"
                stroke={openFaq === i ? '#e11d1d' : '#6b7280'}
                strokeWidth="2.5" viewBox="0 0 24 24"
                style={{
                  transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.25s ease, stroke 0.2s ease',
                }}
              >
                <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>

          {/* Answer with smooth expand */}
          <div
            style={{
              maxHeight: openFaq === i ? '200px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.3s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}