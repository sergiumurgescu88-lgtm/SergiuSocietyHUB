import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
});

import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'SSociety HUB — 61 Digital Projects',
  description: 'Discover 61 innovative digital projects built by Sergiu Murgescu — from smart restaurants to AI tools and solar energy.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${outfit.variable}`}>
      <body suppressHydrationWarning className="bg-[#05070f] text-[#e2e8ff] min-h-screen selection:bg-indigo-500/30">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
