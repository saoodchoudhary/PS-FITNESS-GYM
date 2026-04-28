
import GalleryClient from './GalleryClient';

export const metadata = {
  title: 'Gallery',
  description: "Explore the PS FITNESS GYM gallery – modern equipment, training sessions, events and the community at Gurugram's premier gym.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0a0a0a 0%,#0f1a0f 50%,#0a0a0a 100%)' }}>
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#39ff14' }}>Our Gym</p>
          <h1 className="section-title text-white mb-6">
            Photo <span className="gradient-text">Gallery</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#9ca3af' }}>
            Take a visual tour of our world-class facilities, training sessions, and vibrant community.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16" style={{ background: '#050505' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryClient />
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24" style={{ background: '#0a0a0a' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#39ff14' }}>Video Tour</p>
            <h2 className="section-title text-white">
              See Us In <span className="gradient-text">Action</span>
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg,#111,#1a2a1a)',
              border: '1px solid rgba(57,255,20,0.15)',
              aspectRatio: '16/9',
            }}>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: 'rgba(57,255,20,0.15)', border: '2px solid #39ff14' }}>
                <svg width="24" height="24" fill="#39ff14" viewBox="0 0 24 24">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
              <p className="font-semibold" style={{ color: '#9ca3af' }}>Gym Tour Video</p>
              <p className="text-sm" style={{ color: '#4b5563' }}>Coming Soon</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
