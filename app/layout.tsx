import type {Metadata} from 'next';
import {Plus_Jakarta_Sans} from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: 'NEXORA — Desenvolvimento Web & Experiências Digitais',
  description:
    'Desenvolvemos Landing Pages, Redesign de Sites, Aplicações Web sob medida e E-commerce Interativo que unem design, funcionalidade e resultado desde 2022.',
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
      <body className={plusJakartaSans.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
