import React from 'react';
import { NexoraHeader } from '@/components/nexora/header';
import { NexoraHeroSection } from '@/components/nexora/hero-section';
import { NexoraSolutionsSection } from '@/components/nexora/solutions-section';
import { NexoraDifferentialsAndProcessSection } from '@/components/nexora/differentials-process-section';
import { NexoraAboutFaqFooterSection } from '@/components/nexora/about-faq-footer-section';

export default function NexoraLandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFC] text-[#0B1933]">
      <NexoraHeader />
      <main className="flex-1">
        <NexoraHeroSection />
        <NexoraSolutionsSection />
        <NexoraDifferentialsAndProcessSection />
        <NexoraAboutFaqFooterSection />
      </main>
    </div>
  );
}
