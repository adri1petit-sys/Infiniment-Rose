import React from 'react';
import { Heart } from 'lucide-react';
import { EVENT_DETAILS } from '../constants';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
          <div className="p-2 bg-brand-pink rounded-full text-white">
            <Heart size={16} fill="currentColor" />
          </div>
          <span className="font-bold text-slate-800 uppercase tracking-tight">
            {EVENT_DETAILS.name}
          </span>
        </div>

        <div className="text-sm text-slate-500 text-center md:text-right">
          <p>&copy; {year} Saint-Avertin Run Club. Tous droits réservés.</p>
          <div className="flex gap-4 justify-center md:justify-end mt-2">
            <span className="cursor-not-allowed opacity-70">Mentions Légales</span>
            <span className="cursor-not-allowed opacity-70">Politique de confidentialité</span>
            <a href="mailto:contact@infinimentrose.fr" className="hover:text-brand-pink transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;