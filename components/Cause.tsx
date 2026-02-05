import React from 'react';
import { Heart, Coins, Users } from 'lucide-react';

const Cause: React.FC = () => {
  return (
    <section id="cause" className="py-24 bg-brand-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Illustration Ruban Rose 3D Premium */}
          <div className="lg:w-1/2 flex justify-center items-center order-2 lg:order-1 relative min-h-[400px]">
            
            {/* Ambient Glow - Large diffuse soft light behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-pink/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
            
            {/* Main Container with Tilt and Animation */}
            <div className="transform -rotate-[15deg] hover:-rotate-[10deg] transition-transform duration-1000 ease-in-out relative z-10">
              <div className="animate-heartbeat filter drop-shadow-2xl">
                <svg 
                  width="380" 
                  height="450" 
                  viewBox="0 0 200 250" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ overflow: 'visible' }}
                >
                  <defs>
                    {/* Main Satin Gradient */}
                    <linearGradient id="satinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f472b6" /> {/* light pink */}
                      <stop offset="50%" stopColor="#db2777" /> {/* medium pink */}
                      <stop offset="100%" stopColor="#9d174d" /> {/* dark pink */}
                    </linearGradient>

                    {/* Highlight Gradient for 3D volume (simulates light reflection on tube/ribbon) */}
                    <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="white" stopOpacity="0" />
                      <stop offset="40%" stopColor="white" stopOpacity="0.4" />
                      <stop offset="60%" stopColor="white" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>

                    {/* Shadow for the crossover point */}
                    <filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
                      <feOffset dx="2" dy="4" result="offsetblur" />
                      <feComponentTransfer>
                        <feFuncA type="linear" slope="0.3" />
                      </feComponentTransfer>
                      <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* 
                    CONSTRUCTION DU RUBAN EN 2 PARTIES POUR L'EFFET 3D (OVER/UNDER)
                  */}

                  {/* PART 1: The "Under" Segment (Left leg going up and around the back) */}
                  <g>
                    {/* Base Color */}
                    <path 
                      d="M 60 220 C 80 180, 100 130, 100 130 C 100 130, 145 70, 145 50 C 145 25, 125 10, 100 10"
                      stroke="url(#satinGradient)" 
                      strokeWidth="32" 
                      strokeLinecap="round" 
                      fill="none"
                    />
                     {/* Highlight */}
                    <path 
                      d="M 60 220 C 80 180, 100 130, 100 130 C 100 130, 145 70, 145 50 C 145 25, 125 10, 100 10"
                      stroke="url(#highlightGradient)" 
                      strokeWidth="12" 
                      strokeLinecap="round" 
                      fill="none"
                      className="mix-blend-overlay"
                    />
                  </g>

                  {/* PART 2: The "Over" Segment (Top coming down, crossing OVER the first part, to right leg) */}
                  {/* Applied filter dropShadow to create depth where it crosses */}
                  <g filter="url(#dropShadow)">
                    {/* Base Color */}
                    <path 
                      d="M 100 10 C 75 10, 55 25, 55 50 C 55 80, 100 130, 100 130 C 100 130, 120 180, 140 220"
                      stroke="url(#satinGradient)" 
                      strokeWidth="32" 
                      strokeLinecap="round" 
                      fill="none"
                    />
                    {/* Highlight */}
                    <path 
                      d="M 100 10 C 75 10, 55 25, 55 50 C 55 80, 100 130, 100 130 C 100 130, 120 180, 140 220"
                      stroke="url(#highlightGradient)" 
                      strokeWidth="12" 
                      strokeLinecap="round" 
                      fill="none"
                      className="mix-blend-overlay"
                    />
                  </g>

                </svg>
              </div>
            </div>
          </div>

          {/* Contenu Texte */}
          <div className="lg:w-1/2 space-y-8 order-1 lg:order-2 relative z-10">
            <div>
              <h2 className="text-brand-pink font-bold tracking-wider uppercase text-sm mb-3">Pourquoi Infiniment Rose ?</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-brand-blue mb-6">
                Courir pour celles qui se battent
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Le cancer du sein touche 1 femme sur 8. Derrière ce chiffre, il y a des mères, des sœurs, des amies. 
                L'endurance requise pour un Infinity Trail fait écho à la résilience nécessaire pour affronter la maladie.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-2xl transition-colors hover:bg-white/50">
                <div className="p-3 bg-white rounded-xl shadow-md text-brand-pink ring-1 ring-brand-pink/10">
                  <Coins size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-blue">100% Reversé</h4>
                  <p className="text-slate-600 text-sm">Chaque centime de votre inscription (20€) et de vos dons est intégralement versé à Octobre Rose.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl transition-colors hover:bg-white/50">
                <div className="p-3 bg-white rounded-xl shadow-md text-brand-pink ring-1 ring-brand-pink/10">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-blue">Impact Local</h4>
                  <p className="text-slate-600 text-sm">Les fonds financeront la recherche et l'accompagnement des patientes.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl transition-colors hover:bg-white/50">
                <div className="p-3 bg-white rounded-xl shadow-md text-brand-pink ring-1 ring-brand-pink/10">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-blue">Esprit Communautaire</h4>
                  <p className="text-slate-600 text-sm">Une marée rose solidaire au cœur de Saint-Avertin pour sensibiliser et soutenir.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 pl-4">
              <a 
                href="#don"
                className="inline-flex items-center text-brand-pink font-bold text-lg hover:text-brand-pinkDark transition-colors group"
              >
                Je ne cours pas mais je souhaite donner 
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Cause;