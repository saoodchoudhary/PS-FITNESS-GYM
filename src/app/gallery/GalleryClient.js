'use client';

import { useState, useEffect, useCallback } from 'react';

const tabs = ['All', 'Equipment', 'Training', 'Events'];

const galleryItems = [
  {
    category: 'Equipment',
    label: 'Free Weights Area',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
    tall: true,
  },
  {
    category: 'Training',
    label: 'Personal Training Session',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    tall: false,
  },
  {
    category: 'Equipment',
    label: 'Cardio Zone',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    tall: false,
  },
  {
    category: 'Training',
    label: 'Group Class Energy',
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80',
    tall: true,
  },
  {
    category: 'Events',
    label: 'Transformation Championship',
    img: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80',
    tall: false,
  },
  {
    category: 'Equipment',
    label: 'Cable Machine Station',
    img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80',
    tall: false,
  },
  {
    category: 'Training',
    label: 'HIIT Session',
    img: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&q=80',
    tall: true,
  },
  {
    category: 'Events',
    label: 'Annual Fitness Awards',
    img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80',
    tall: false,
  },
  {
    category: 'Equipment',
    label: 'Dumbbell Rack',
    img: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600&q=80',
    tall: false,
  },
  {
    category: 'Training',
    label: 'Strength & Conditioning',
    img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80',
    tall: false,
  },
  {
    category: 'Events',
    label: 'Nutrition Workshop',
    img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80',
    tall: true,
  },
  {
    category: 'Equipment',
    label: 'Smith Machine Area',
    img: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80',
    tall: false,
  },
];

const categoryIcons = { Equipment: '🏋️', Training: '💪', Events: '🏆' };

export default function GalleryClient() {
  const [activeTab, setActiveTab] = useState('All');
  const [lightbox, setLightbox] = useState(null); // { img, label, category }
  const [visible, setVisible] = useState(false);

  const filtered =
    activeTab === 'All'
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeTab);

  // Animate grid on tab change
  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, [activeTab]);

  useEffect(() => {
    setVisible(true);
  }, []);

  // Keyboard close for lightbox
  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight' && lightbox) {
        const idx = galleryItems.findIndex((g) => g.label === lightbox.label);
        const next = galleryItems[(idx + 1) % galleryItems.length];
        setLightbox(next);
      }
      if (e.key === 'ArrowLeft' && lightbox) {
        const idx = galleryItems.findIndex((g) => g.label === lightbox.label);
        const prev = galleryItems[(idx - 1 + galleryItems.length) % galleryItems.length];
        setLightbox(prev);
      }
    },
    [lightbox]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <>
      {/* ── FILTER TABS ── */}
      <div className="flex justify-center gap-3 flex-wrap mb-10">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                background: isActive ? '#e11d1d' : 'rgba(225,29,29,0.06)',
                color: isActive ? '#ffffff' : '#9ca3af',
                border: isActive ? '1px solid #e11d1d' : '1px solid rgba(225,29,29,0.18)',
                boxShadow: isActive ? '0 0 16px rgba(225,29,29,0.35)' : 'none',
                transform: isActive ? 'scale(1.05)' : 'scale(1)',
                fontFamily: 'Oswald, sans-serif',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              {tab !== 'All' && <span style={{ marginRight: '6px' }}>{categoryIcons[tab]}</span>}
              {tab}
            </button>
          );
        })}
      </div>

      {/* ── MASONRY GRID ── */}
      <div
        className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4"
        style={{ transition: 'opacity 0.25s ease', opacity: visible ? 1 : 0 }}
      >
        {filtered.map((item, i) => (
          <div
            key={`${item.label}-${i}`}
            className="break-inside-avoid rounded-2xl overflow-hidden relative group cursor-pointer mb-4"
            onClick={() => setLightbox(item)}
            style={{
              border: '1px solid rgba(225,29,29,0.12)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow =
                '0 8px 32px rgba(225,29,29,0.2), 0 0 0 1px rgba(225,29,29,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
            }}
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.label}
              width={600}
              height={item.tall ? 400 : 280}
              loading="lazy"
              decoding="async"
              className="w-full object-cover block"
              style={{
                height: item.tall ? '280px' : '200px',
                filter: 'brightness(0.85)',
                transition: 'filter 0.3s ease, transform 0.4s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'brightness(0.7)';
                e.currentTarget.style.transform = 'scale(1.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'brightness(0.85)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />

            {/* Category badge — always visible */}
            <div
              className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
              style={{
                background: 'rgba(0,0,0,0.7)',
                border: '1px solid rgba(225,29,29,0.3)',
                color: '#e11d1d',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span>{categoryIcons[item.category]}</span>
              {item.category}
            </div>

            {/* Hover overlay with label */}
            <div
              className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100"
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
                transition: 'opacity 0.25s ease',
              }}
            >
              <p
                className="text-white font-bold text-sm mb-1"
                style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.05em' }}
              >
                {item.label}
              </p>
              {/* Expand icon */}
              <div className="flex items-center gap-1.5">
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="#e11d1d"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-xs" style={{ color: '#e11d1d' }}>View full size</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── COUNT ── */}
      <p className="text-center mt-6 text-sm" style={{ color: '#4b5563' }}>
        Showing <span style={{ color: '#e11d1d', fontWeight: 600 }}>{filtered.length}</span> photos
        {activeTab !== 'All' && (
          <> in <span style={{ color: '#e11d1d', fontWeight: 600 }}>{activeTab}</span></>
        )}
      </p>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(12px)' }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(225,29,29,0.25)', boxShadow: '0 0 60px rgba(225,29,29,0.15)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <img
              src={lightbox.img.replace('w=600', 'w=1200')}
              alt={lightbox.label}
              width={1200}
              height={800}
              className="w-full object-cover"
              style={{ maxHeight: '75vh' }}
            />

            {/* Bottom info bar */}
            <div
              className="flex items-center justify-between px-5 py-4"
              style={{ background: '#111', borderTop: '1px solid rgba(225,29,29,0.15)' }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="px-2.5 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: 'rgba(225,29,29,0.15)',
                    border: '1px solid rgba(225,29,29,0.3)',
                    color: '#e11d1d',
                  }}
                >
                  {categoryIcons[lightbox.category]} {lightbox.category}
                </span>
                <p
                  className="text-white font-semibold text-sm"
                  style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.05em' }}
                >
                  {lightbox.label}
                </p>
              </div>

              {/* Arrow nav + Close */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const idx = galleryItems.findIndex((g) => g.label === lightbox.label);
                    setLightbox(galleryItems[(idx - 1 + galleryItems.length) % galleryItems.length]);
                  }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                  style={{ background: 'rgba(225,29,29,0.1)', border: '1px solid rgba(225,29,29,0.2)', color: '#e11d1d' }}
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <polyline points="15 18 9 12 15 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    const idx = galleryItems.findIndex((g) => g.label === lightbox.label);
                    setLightbox(galleryItems[(idx + 1) % galleryItems.length]);
                  }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                  style={{ background: 'rgba(225,29,29,0.1)', border: '1px solid rgba(225,29,29,0.2)', color: '#e11d1d' }}
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <polyline points="9 18 15 12 9 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  onClick={() => setLightbox(null)}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#9ca3af' }}
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" />
                    <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* ESC hint */}
          <p
            className="absolute bottom-4 text-xs"
            style={{ color: '#4b5563' }}
          >
            Press <kbd style={{ background: '#1a1a1a', border: '1px solid #333', padding: '2px 6px', borderRadius: '4px', color: '#9ca3af' }}>ESC</kbd> to close · <kbd style={{ background: '#1a1a1a', border: '1px solid #333', padding: '2px 6px', borderRadius: '4px', color: '#9ca3af' }}>←→</kbd> to navigate
          </p>
        </div>
      )}
    </>
  );
}