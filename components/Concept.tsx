import React from 'react';
import { Timer, RotateCw, Flag, Trophy } from 'lucide-react';

const Concept: React.FC = () => {
  return (
    <section id="concept" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-pink font-bold tracking-wider uppercase text-sm mb-3">Le Format Infinity Trail</h2>
          <h3 className="text-4xl font-extrabold text-brand-blue mb-6">
            Une course contre la montre,<br />pas contre les autres.
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            Le principe est simple mais impitoyable. Il n'y a pas de ligne d'arrivée fixe. 
            La course s'arrête quand vous décidez d'arrêter... ou quand le chronomètre vous rattrape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="relative p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center hover:shadow-xl transition-shadow group">
            <div className="w-16 h-16 mx-auto bg-brand-pink/10 text-brand-pink rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-pink group-hover:text-white transition-colors">
              <RotateCw size={32} />
            </div>
            <h4 className="text-xl font-bold text-brand-blue mb-4">La Boucle</h4>
            <p className="text-slate-600">
              Un parcours de <strong>6,7 km</strong> à effectuer en moins d'une heure. 
              Peu importe votre vitesse, tant que vous finissez avant le bip.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center hover:shadow-xl transition-shadow group">
            <div className="w-16 h-16 mx-auto bg-brand-pink/10 text-brand-pink rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-pink group-hover:text-white transition-colors">
              <Timer size={32} />
            </div>
            <h4 className="text-xl font-bold text-brand-blue mb-4">Le Départ</h4>
            <p className="text-slate-600">
              Toutes les heures, un <strong>nouveau départ</strong> est donné. 
              Si vous finissez la boucle en 45 min, vous avez 15 min de repos.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center hover:shadow-xl transition-shadow group">
            <div className="w-16 h-16 mx-auto bg-brand-pink/10 text-brand-pink rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-pink group-hover:text-white transition-colors">
              <Flag size={32} />
            </div>
            <h4 className="text-xl font-bold text-brand-blue mb-4">L'Élimination</h4>
            <p className="text-slate-600">
              Si vous n'êtes pas sur la ligne de départ au coup de sifflet, c'est fini. 
              La course continue jusqu'au dernier.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-brand-blue rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="flex items-start gap-4">
            <Trophy className="text-brand-pink flex-shrink-0" size={48} />
            <div>
              <h4 className="text-2xl font-bold mb-2">Pas besoin d'être un ultra-traileur</h4>
              <p className="text-slate-300">
                L'objectif n'est pas de gagner, mais de se dépasser. Venez faire 1, 2 ou 3 boucles pour la cause. 
                Chaque kilomètre est une victoire contre la maladie.
              </p>
            </div>
          </div>
          <a 
            href="#inscription"
            className="px-8 py-3 bg-white text-brand-blue font-bold rounded-full hover:bg-brand-pink hover:text-white transition-colors whitespace-nowrap"
          >
            Je relève le défi
          </a>
        </div>
      </div>
    </section>
  );
};

export default Concept;