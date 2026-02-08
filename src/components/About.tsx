import React from 'react';
import { SectionId } from '../../types';
import Reveal from './Reveal';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Heading Column */}
          <div className="md:col-span-4">
            <Reveal>
              <h2 className="text-sm tracking-widest text-gold-500 font-bold uppercase mb-2">
                About
              </h2>
              <h3 className="font-serif text-4xl text-neutral-900 mb-6">
                My Background
              </h3>
              <div className="h-1 w-20 bg-gold-500/30 rounded-full" />
            </Reveal>
          </div>

          {/* Content Column */}
          <div className="md:col-span-8">
            <Reveal delay={200}>
              <div className="prose prose-lg text-neutral-600 font-light leading-relaxed">
                <p className="mb-6">
                  <span className="text-4xl float-left mr-2 font-serif text-gold-500 leading-[0.8]">I</span>
                  ’m a B.Tech undergraduate in Computer Science (AI) at USICT, GGSIPU, with a strong academic foundation and an insatiable curiosity for learning. 
                </p>
                <p>
                  My journey is driven by a passion for Artificial Intelligence and its application in solving real-world problems. 
                  Beyond academics, I actively engage in technical societies, hackathons, and community events, constantly seeking opportunities to grow, innovate, and contribute to the tech ecosystem.
                </p>
              </div>
              
              <div className="mt-8 flex gap-4">
                <div className="px-6 py-4 bg-neutral-50 border-l-4 border-gold-500">
                  <p className="font-serif italic text-neutral-700">
                    "Striving for excellence in code and creativity."
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;