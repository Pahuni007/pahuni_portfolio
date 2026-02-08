import React, { useState } from 'react';
import { SectionId } from '../../types';
import { EXPERIENCE_DATA } from '../../constants';
import { Briefcase, ChevronRight, Award, Users, Code2, PenTool } from 'lucide-react';
import Reveal from './Reveal';

const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const getIcon = (index: number) => {
    switch(index) {
      case 0: return <Users className="w-5 h-5" />;
      case 1: return <Briefcase className="w-5 h-5" />;
      case 2: return <Award className="w-5 h-5" />;
      case 3: return <Code2 className="w-5 h-5" />;
      default: return <PenTool className="w-5 h-5" />;
    }
  };

  return (
    <section id={SectionId.EXPERIENCE} className="py-24 bg-neutral-900 text-white relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-4">
            <Reveal>
              <h2 className="text-sm tracking-widest text-gold-500 font-bold uppercase mb-2">Experience</h2>
              <h3 className="font-serif text-4xl mb-6">Where I've Worked</h3>
              <p className="text-neutral-400 font-light">
                A showcase of my diverse roles, ranging from technical leadership to community building and creative content creation.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-8 space-y-4">
            {EXPERIENCE_DATA.map((item, index) => (
              <Reveal key={index} delay={index * 100} width="100%">
                <div 
                  className={`group border border-neutral-700 rounded-xl overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'bg-neutral-800 border-gold-500/50' : 'bg-transparent hover:bg-neutral-800/50'
                  }`}
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  <div className="p-6 cursor-pointer flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-lg transition-colors duration-300 ${
                        activeIndex === index ? 'bg-gold-500 text-white' : 'bg-neutral-700 text-neutral-400 group-hover:text-white'
                      }`}>
                        {getIcon(index)}
                      </div>
                      <div>
                        <h4 className={`font-serif text-lg ${activeIndex === index ? 'text-white' : 'text-neutral-300'}`}>
                          {item.role}
                        </h4>
                        <p className="text-sm text-neutral-500">{item.organization}</p>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-neutral-500 transition-transform duration-300 ${activeIndex === index ? 'rotate-90 text-gold-500' : ''}`} />
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="p-6 pt-0 border-t border-neutral-700/50 mt-2">
                      <p className="text-neutral-400 leading-relaxed pl-14">
                        {item.details}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;