
'use client';

import { useState } from 'react';

const tabs = ['All', 'Equipment', 'Training', 'Events'];

const galleryItems = [
  { category: 'Equipment', label: 'Free Weights Area', color: '#1a2a1a' },
  { category: 'Training', label: 'Personal Training', color: '#1a1a2a' },
  { category: 'Equipment', label: 'Cardio Zone', color: '#2a1a1a' },
  { category: 'Training', label: 'Group Class', color: '#1a2a1a' },
  { category: 'Events', label: 'Transformation Event', color: '#2a2a1a' },
  { category: 'Equipment', label: 'Cable Machines', color: '#1a1a2a' },
  { category: 'Training', label: 'HIIT Session', color: '#2a1a1a' },
  { category: 'Events', label: 'Annual Championship', color: '#1a2a2a' },
  { category: 'Equipment', label: 'Dumbbell Rack', color: '#1a2a1a' },
  { category: 'Training', label: 'Strength Training', color: '#1a1a2a' },
  { category: 'Events', label: 'Nutrition Workshop', color: '#2a1a2a' },
  { category: 'Equipment', label: 'Smith Machine', color: '#1a2a1a' },
];

export default function GalleryClient() {
  const [activeTab, setActiveTab] = useState('All');
  const filtered = activeTab === 'All' ? galleryItems : galleryItems.filter((g) => g.category === activeTab);

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex justify-center gap-3 flex-wrap mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
            style={{
              background: activeTab === tab ? '#39ff14' : 'rgba(57,255,20,0.08)',
              color: activeTab === tab ? '#000' : '#9ca3af',
              border: activeTab === tab ? 'none' : '1px solid rgba(57,255,20,0.2)',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
        {filtered.map((item, i) => (
          <div
            key={`${item.label}-${i}`}
            className="break-inside-avoid rounded-xl overflow-hidden relative group cursor-pointer mb-4"
            style={{
              background: `linear-gradient(135deg,${item.color},#111)`,
              border: '1px solid rgba(57,255,20,0.1)',
              minHeight: '160px',
            }}
          >
            <div className="flex flex-col items-center justify-center gap-2 py-10">
              <span className="text-3xl">
                {item.category === 'Equipment' ? '🏋️' : item.category === 'Training' ? '💪' : '🏆'}
              </span>
              <span className="text-xs font-semibold px-2 py-1 rounded"
                style={{ background: 'rgba(57,255,20,0.15)', color: '#39ff14' }}>
                {item.category}
              </span>
            </div>
            <div className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ background: 'rgba(0,0,0,0.7)' }}>
              <span className="text-white text-sm font-semibold">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
