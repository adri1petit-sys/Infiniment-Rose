import React from 'react';
import { Play, Instagram, ArrowUpRight } from 'lucide-react';

const Edition2025: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section discret */}
        <div className="text-center mb-10">
          <span className="text-brand-pink font-bold tracking-wider uppercase text-sm mb-3 block">Rétrospective</span>
          <h2 className="text-3xl font-extrabold text-brand-blue">L'Esprit Infiniment Rose</h2>
        </div>

        {/* Carte Vidéo Immersive */}
        <a
          href="https://www.instagram.com/p/DPt4HcPjSx8/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block w-full rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.005] cursor-pointer"
          style={{ aspectRatio: '16/9', maxHeight: '650px' }}
        >
          {/* Background Image avec Zoom lent au survol */}
          <div className="absolute inset-0">
            <img
              src="https://i.postimg.cc/FHCQt845/Generated-Image-February-05-2026-4-57PM.jpg"
              alt="Ambiance Infiniment Rose Édition 2025"
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
            />
            {/* Gradient Overlay pour lisibilité texte */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>
          </div>

          {/* Contenu centré */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-12 text-white z-10">

            {/* Play Button Effet Glass */}
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-8 border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-pink group-hover:border-brand-pink group-hover:shadow-[0_0_40px_rgba(236,72,153,0.6)]">
              <Play size={32} fill="currentColor" className="ml-2 text-white opacity-90" />
            </div>

            <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tight drop-shadow-2xl">
              ÉDITION 2025
            </h3>
            
            <p className="text-lg md:text-2xl text-slate-100 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg mb-10 opacity-90 group-hover:opacity-100 transition-opacity">
              Plus qu'une course, une vague d'émotion collective. 
              <span className="hidden md:inline"><br/></span>
              Revivez l'énergie unique, les sourires et la solidarité de l'année passée.
            </p>

            {/* CTA Bouton */}
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-blue rounded-full font-bold text-sm md:text-base uppercase tracking-wide transition-all duration-300 group-hover:bg-brand-pink group-hover:text-white shadow-lg">
              <Instagram size={20} />
              <span>Voir la vidéo complète</span>
              <ArrowUpRight size={20} />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Edition2025;