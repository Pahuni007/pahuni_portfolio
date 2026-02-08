import React from 'react';
import { SOCIAL_LINKS } from '../../constants';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-neutral-50 overflow-hidden pt-20 md:pt-0"
    >
      {/* Abstract Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-2 md:order-1 space-y-6">
          <Reveal>
            <p className="text-sm tracking-[0.2em] text-neutral-500 uppercase font-medium">
              Hello, I'm
            </p>
          </Reveal>
          
          <Reveal delay={100}>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-neutral-900 leading-tight">
              Pahuni <br />
              <span className="text-gold-500 relative inline-block">
                Bartaria.
                <svg className="absolute w-full h-3 bottom-1 left-0 text-gold-500/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-lg md:text-xl text-neutral-600 font-light max-w-lg leading-relaxed">
              Undergraduate B.Tech Student @ <span className="font-medium text-neutral-800">USICT, GGSIPU Delhi</span>.
              Specializing in Artificial Intelligence.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex items-center space-x-6 pt-4">
              {SOCIAL_LINKS.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.url}
                  className="p-3 bg-white border border-neutral-200 rounded-full shadow-sm text-neutral-800 hover:text-gold-500 hover:border-gold-500 hover:shadow-md transition-all duration-300 group"
                  aria-label={link.platform}
                >
                  <span className="group-hover:scale-110 block transition-transform">
                    {link.icon}
                  </span>
                </a>
              ))}
              <div className="h-px w-12 bg-neutral-300" />
              <p className="text-sm font-medium text-neutral-500">+91 9411970085</p>
            </div>
          </Reveal>
        </div>

        {/* Profile Image */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
          <Reveal delay={200} className="relative z-10">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              {/* Decorative Frame */}
              <div className="absolute inset-0 border-2 border-gold-500/30 rounded-full transform translate-x-4 translate-y-4" />
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white bg-neutral-200">
                <img 
                  src="/Photo.jpg" 
                  alt="Pahuni Bartaria" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Glass Card Floating */}
              <div className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-8 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 animate-[bounce_3s_infinite]">
                <p className="text-xs font-bold text-neutral-900">AI Enthusiast</p>
                <p className="text-[10px] text-neutral-500">Computer Science</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-neutral-400">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;