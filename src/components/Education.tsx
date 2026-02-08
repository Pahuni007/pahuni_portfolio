import React from 'react';
import { SectionId } from '../../types';
import { EDUCATION_DATA } from '../../constants';
import Reveal from './Reveal';

const Education: React.FC = () => {
  return (
    <section id={SectionId.EDUCATION} className="py-24 bg-neutral-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1a1a1a 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-sm tracking-widest text-gold-500 font-bold uppercase mb-2">Education</h2>
            <h3 className="font-serif text-4xl text-neutral-900">What I've Learned</h3>
          </Reveal>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-neutral-300" />

          <div className="space-y-12">
            {EDUCATION_DATA.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-gold-500 rounded-full z-10 shadow-sm" />

                {/* Content Card */}
                <div className="ml-8 md:ml-0 md:w-1/2 px-4 md:px-12 w-full">
                  <Reveal delay={index * 200}>
                    <div className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 border border-neutral-100 group`}>
                      <span className="inline-block px-3 py-1 bg-neutral-100 text-xs font-semibold tracking-wide text-neutral-600 rounded-full mb-3 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                        {item.year}
                      </span>
                      <h4 className="font-serif text-xl font-bold text-neutral-900 mb-1">{item.title}</h4>
                      <p className="text-neutral-600 font-medium mb-2">{item.subtitle}</p>
                      {item.grade && (
                        <p className="text-sm text-gold-600 font-bold mt-2">Grade: {item.grade}</p>
                      )}
                      {item.description && (
                        <p className="text-sm text-neutral-500 mt-2 leading-relaxed">{item.description}</p>
                      )}
                    </div>
                  </Reveal>
                </div>
                
                {/* Empty Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;