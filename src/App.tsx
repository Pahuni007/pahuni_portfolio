import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial page load animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-neutral-900 z-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-white font-bold tracking-tighter animate-pulse">
            PB.
          </h1>
          <div className="mt-4 h-1 w-24 bg-neutral-800 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-gold-500 animate-[drawLine_1.5s_ease-in-out_infinite]" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 selection:bg-gold-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;


