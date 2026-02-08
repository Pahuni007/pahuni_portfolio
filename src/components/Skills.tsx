import React from 'react';
import { SectionId } from '../../types';
import { SKILLS_DATA, LANGUAGES } from '../../constants';
import Reveal from './Reveal';

const Skills: React.FC = () => {
  return (
    <section id={SectionId.SKILLS} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-sm tracking-widest text-gold-500 font-bold uppercase mb-2">Skills & Languages</h2>
            <h3 className="font-serif text-4xl text-neutral-900">What I Bring to the Table</h3>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Skills Grid */}
          <div>
             <h4 className="text-xl font-medium mb-8 text-neutral-400 border-b pb-2">Technical & Soft Skills</h4>
             <div className="grid grid-cols-1 gap-4">
               {SKILLS_DATA.map((skill, index) => (
                 <Reveal key={index} delay={index * 100}>
                   <div className="flex items-center p-4 bg-neutral-50 rounded-lg border border-neutral-100 hover:border-gold-500 hover:shadow-md transition-all duration-300 group">
                     <div className="text-neutral-400 group-hover:text-gold-500 transition-colors mr-4">
                       {skill.icon}
                     </div>
                     <span className="font-medium text-neutral-700 group-hover:text-neutral-900">{skill.title}</span>
                   </div>
                 </Reveal>
               ))}
             </div>
          </div>

          {/* Languages */}
          <div>
            <h4 className="text-xl font-medium mb-8 text-neutral-400 border-b pb-2">Languages</h4>
            <div className="flex flex-wrap gap-4">
              {LANGUAGES.map((lang, index) => (
                <Reveal key={index} delay={index * 150 + 400}>
                  <div className="relative group overflow-hidden rounded-xl">
                     <div className="px-8 py-6 bg-neutral-900 text-white rounded-xl relative z-10 transition-transform group-hover:-translate-y-1">
                       <span className="font-serif text-2xl font-bold">{lang}</span>
                       <div className="w-8 h-1 bg-gold-500 mt-2 rounded-full" />
                     </div>
                     <div className="absolute inset-0 bg-gold-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
                  </div>
                </Reveal>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
               <p className="text-sm text-blue-800 italic font-medium text-center">
                 "Communication is the bridge between confusion and clarity."
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;