import React from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
export function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white selection:bg-cyan-500/30">
      <AnnouncementBar />
      <Header />

      <main>
        <Hero />
        <SocialProof />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>);

}