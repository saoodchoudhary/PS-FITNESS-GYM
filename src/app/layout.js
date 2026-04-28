import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata = {
  title: {
    default: 'PS FITNESS GYM | Premium Gym in Gurugram',
    template: '%s | PS FITNESS GYM',
  },
  description:
    "PS FITNESS GYM – Gurugram's top-rated fitness center in Sector 12. Expert trainers, modern equipment, affordable plans. Transform your body today! ⭐ 5.0 Rating | 398 Reviews.",
  keywords: [
    'gym in Gurugram',
    'fitness center Gurugram',
    'PS FITNESS GYM',
    'Sector 12 gym',
    'personal training Gurugram',
    'weight loss Gurugram',
    'muscle building gym',
    'best gym Haryana',
  ],
  authors: [{ name: 'PS FITNESS GYM' }],
  openGraph: {
    title: 'PS FITNESS GYM | Premium Gym in Gurugram',
    description:
      'Transform your body at PS FITNESS GYM, Gurugram. 5.0 ⭐ rated gym with expert trainers and modern equipment.',
    siteName: 'PS FITNESS GYM',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PS FITNESS GYM | Premium Gym in Gurugram',
    description: "Transform your body at PS FITNESS GYM – Gurugram's best fitness center.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0a0a0a] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
