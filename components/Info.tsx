import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { EVENT_DETAILS } from '../constants';

const Info: React.FC = () => {
  return (
    <section id="infos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-brand-blue">Infos Pratiques</h2>
          <p className="mt-4 text-slate-600">Tout ce qu'il faut savoir pour le jour J</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Location Card */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-brand-blue text-white rounded-lg">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-blue">Lieu de départ</h3>
            </div>
            <div className="space-y-4 flex-grow">
              <p className="text-slate-700 font-medium">{EVENT_DETAILS.location}</p>
              <p className="text-slate-600">{EVENT_DETAILS.address}</p>
              <div className="h-48 w-full bg-slate-200 rounded-lg overflow-hidden relative">
                <iframe 
                  title="Map Saint-Avertin"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2703.953503893344!2d0.7247713766768346!3d47.33471097116606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fcd3a69a477385%3A0x7d287162985f9498!2s35%20Rue%20G%C3%A9n%C3%A9ral%20Mocquery%2C%2037550%20Saint-Avertin!5e0!3m2!1sfr!2sfr!4v1715000000000!5m2!1sfr!2sfr" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Schedule Card */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-brand-blue text-white rounded-lg">
                <Calendar size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-blue">Programme - {EVENT_DETAILS.date}</h3>
            </div>
            <ul className="space-y-6 relative border-l-2 border-slate-200 ml-3 pl-8 pb-4">
              <li className="relative">
                <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-brand-pink border-4 border-white"></div>
                <span className="block text-sm font-bold text-brand-pink">10h00</span>
                <span className="block font-bold text-slate-800">Retrait des dossards</span>
                <span className="text-slate-600 text-sm">Départ Agence LaFORÊT</span>
              </li>
              <li className="relative">
                <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-slate-300 border-4 border-white"></div>
                <span className="block text-sm font-bold text-brand-pink">11h30</span>
                <span className="block font-bold text-slate-800">Briefing Course</span>
                <span className="text-slate-600 text-sm">Rappel des règles Infinity</span>
              </li>
              <li className="relative">
                <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-brand-blue border-4 border-white"></div>
                <span className="block text-sm font-bold text-brand-pink">12h00</span>
                <span className="block font-bold text-slate-800">Départ Boucle 1</span>
                <span className="text-slate-600 text-sm">C'est parti !</span>
              </li>
              <li className="relative">
                <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-slate-300 border-4 border-white"></div>
                <span className="block text-sm font-bold text-brand-pink">Chaque heure</span>
                <span className="block font-bold text-slate-800">Nouveau départ</span>
                <span className="text-slate-600 text-sm">Jusqu'à épuisement</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Info;