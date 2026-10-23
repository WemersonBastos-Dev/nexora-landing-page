'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS, buildWhatsAppUrl } from '@/lib/nexora-data';

export function NexoraHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen]);

  const whatsappHref = buildWhatsAppUrl();

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
        scrolled
          ? 'bg-white/92 backdrop-blur-md border-b border-[#DCE6F2] shadow-[0_4px_20px_-8px_rgba(11,25,51,0.08)]'
          : 'bg-[#F7FAFC]/85 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Logo (preserved without distortion, recoloring, or filters) */}
        <a
          href="#topo"
          aria-label="NEXORA — Ir para o início"
          className="inline-flex items-center shrink-0 rounded-lg py-0.5"
        >
          <Image
            src="/assets/nexora/nexora-logo.png"
            alt="Logo NEXORA"
            width={164}
            height={42}
            priority
            referrerPolicy="no-referrer"
            className="h-8 w-auto sm:h-9 object-contain"
          />
        </a>

        {/* Zone 2: Desktop Navigation (Expanded on large screens; neatly collapsed in drawer on tablet/mobile) */}
        <nav
          aria-label="Navegação principal"
          className="hidden lg:flex items-center gap-6 xl:gap-8"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 text-sm font-semibold text-[#3B4E6B] hover:text-[#0B1933] transition-colors whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-[#214594] after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary CTA & Mobile Trigger */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar orçamento pelo WhatsApp (abre em nova aba)"
            className="nx-btn hidden sm:inline-flex items-center gap-2 rounded-full border-2 border-[#0B1933] bg-white px-3.5 sm:px-4 lg:px-5 py-2 lg:py-2.5 text-xs lg:text-sm font-bold text-[#0B1933] hover:bg-[#0B1933] hover:text-white whitespace-nowrap shrink-0"
          >
            <span>Solicitar orçamento</span>
            <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="nexora-mobile-menu"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="inline-flex lg:hidden h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-[#DCE6F2] bg-white text-[#0B1933] hover:bg-[#EEF5FB] transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="nexora-mobile-menu"
          role="region"
          aria-label="Menu mobile"
          className="lg:hidden border-b border-[#DCE6F2] bg-white px-4 pt-2 pb-5 shadow-lg"
        >
          <nav aria-label="Navegação mobile" className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-semibold text-[#0B1933] hover:bg-[#EEF5FB] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-3 border-t border-[#DCE6F2]">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="nx-btn flex w-full items-center justify-center gap-2 rounded-full bg-[#214594] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#152E69]"
            >
              <span>Solicitar orçamento no WhatsApp</span>
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
