import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import MobileSuite from './components/MobileSuite';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import UnicornScene from 'unicornstudio-react';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      {/* Background (component) added by Aura */}
      <div 
        className="aura-background-component fixed top-0 w-full h-screen mix-blend-screen brightness-50 opacity-50 saturate-0 z-10 pointer-events-none" 
        style={{ maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)' }}
      >
        <div className="aura-background-component top-0 w-full -z-10 absolute h-full">
          <UnicornScene projectId="bKN5upvoulAmWvInmHza" sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js" className="absolute w-full h-full left-0 top-0 -z-10" />
        </div>
      </div>

      {/* Progressive Blur Top */}
      <div className="gradient-blur">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <Navigation />
      
      <main>
        <Hero />
        <Features />
        <MobileSuite />
        <Testimonials />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;