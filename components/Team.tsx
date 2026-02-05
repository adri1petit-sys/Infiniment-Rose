import React from 'react';

const Team: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-brand-blue">Les fondateurs du Saint-Avertin Run Club</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
            À l’origine d’Infiniment Rose : deux frères, une vision, une communauté
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Adrien PETIT */}
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-md transition-all duration-300">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-slate-100 shadow-inner group">
              <img 
                src="https://i.postimg.cc/g0BPMqbT/IMG-5155-3.jpg" 
                alt="Adrien PETIT" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
              />
            </div>
            <h3 className="font-bold text-xl text-slate-800 mb-2">Adrien PETIT</h3>
            <p className="text-brand-pink text-sm font-bold uppercase tracking-wide mb-6">
              Co-fondateur · Endurance & vision sportive
            </p>
            <p className="text-slate-600 leading-relaxed">
              Ultra-trail runner et entrepreneur local, Adrien est à l’origine de la création du Saint-Avertin Run Club.
              Il porte la vision sportive et solidaire du club, avec l’ambition de rassembler, inspirer et dépasser les limites à travers l’endurance.
            </p>
          </div>

          {/* Vincent PETIT */}
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-md transition-all duration-300">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-slate-100 shadow-inner">
              <img 
                src="https://i.postimg.cc/jj2pJwnN/0-2433-18344-98-11303698-t6c-Hnr.jpg" 
                alt="Vincent PETIT" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
              />
            </div>
            <h3 className="font-bold text-xl text-slate-800 mb-2">Vincent PETIT</h3>
            <p className="text-brand-pink text-sm font-bold uppercase tracking-wide mb-6">
              Co-fondateur · Organisation & communauté
            </p>
            <p className="text-slate-600 leading-relaxed">
              Passionné de course à pied et profondément attaché au tissu local, Vincent structure et anime la communauté du Saint-Avertin Run Club.
              Il veille à l’organisation, à l’accueil et à l’esprit humain qui font l’ADN du club.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;