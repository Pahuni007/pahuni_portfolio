import React from 'react';
import { SectionId } from '../../types';
import { CONTACT_INFO, SOCIAL_LINKS } from '../../constants';
import { Phone, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-sm tracking-widest text-gold-500 font-bold uppercase mb-2">Get in Touch</h2>
          <h3 className="font-serif text-5xl md:text-6xl text-neutral-900 mb-8">Let's Connect</h3>
          <p className="text-neutral-500 max-w-lg mx-auto mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
            <a 
              href={`tel:${CONTACT_INFO.phone}`} 
              className="flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-sm border border-neutral-200 hover:border-gold-500 hover:text-gold-500 transition-all duration-300 group"
            >
              <Phone className="w-5 h-5 text-neutral-400 group-hover:text-gold-500 transition-colors" />
              <span className="font-medium text-lg">{CONTACT_INFO.phone}</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex justify-center gap-6">
            {SOCIAL_LINKS.map((link, idx) => (
              <a 
                key={idx}
                href={link.url}
                className="group flex flex-col items-center gap-2"
              >
                <div className="p-4 bg-neutral-900 text-white rounded-full transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:bg-gold-500">
                  {link.icon}
                </div>
                <span className="text-xs font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
                  {link.platform}
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;