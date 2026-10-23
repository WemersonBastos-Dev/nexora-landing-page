import type {Metadata, Viewport} from 'next';
import {Plus_Jakarta_Sans} from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const viewport: Viewport = {
  themeColor: '#0B1933',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'NEXORA — Desenvolvimento Web & Experiências Digitais',
  description:
    'Desenvolvemos Landing Pages, Redesign de Sites, Aplicações Web sob medida e E-commerce Interativo que unem design, funcionalidade e resultado desde 2022.',
  icons: {
    icon: [
      { url: '/favicon-nexora.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/assets/nexora/nexora-icon.png', type: 'image/png' },
    ],
    shortcut: '/favicon-nexora.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'NEXORA — Desenvolvimento Web & Experiências Digitais',
    description:
      'Desenvolvemos Landing Pages, Redesign de Sites, Aplicações Web sob medida e E-commerce Interativo que unem design, funcionalidade e resultado desde 2022.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXORA — Desenvolvimento Web & Experiências Digitais',
    description:
      'Desenvolvemos Landing Pages, Redesign de Sites, Aplicações Web sob medida e E-commerce Interativo que unem design, funcionalidade e resultado desde 2022.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={plusJakartaSans.variable}>
      <head>
        <link rel="icon" href="/favicon-nexora.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className={plusJakartaSans.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
