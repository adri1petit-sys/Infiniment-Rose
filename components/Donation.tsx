import React, { useState } from 'react';
import { Heart, Gift, Loader2, ExternalLink } from 'lucide-react';

const Donation: React.FC = () => {
  const [amount, setAmount] = useState<number | ''>(10);
  const [custom, setCustom] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const predefinedAmounts = [5, 10, 20, 50];

  const handleDonate = () => {
    if (!amount) return;
    setIsLoading(true);
    
    // Simulation d'une redirection vers une plateforme de paiement externe (HelloAsso, PayPal, etc.)
    setTimeout(() => {
      setIsLoading(false);
      // URL fictive ou générique pour l'exemple, à remplacer par le lien réel de la cagnotte
      window.open('https://www.helloasso.com', '_blank'); 
    }, 1000);
  };

  return (
    <section id="don" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 bg-brand-light text-brand-pink rounded-full flex items-center justify-center mx-auto mb-6">
          <Gift size={32} />
        </div>
        
        <h2 className="text-3xl font-extrabold text-brand-blue mb-4">
          Je ne cours pas, mais je soutiens
        </h2>
        <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
          Vous ne pouvez pas être présent le 10 octobre ? Vous pouvez tout de même participer à la lutte contre le cancer du sein en faisant un don libre.
        </p>

        <div className="bg-white rounded-3xl border-2 border-slate-100 p-8 shadow-lg">
          <h3 className="font-bold text-slate-800 mb-6">Montant de votre don</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {predefinedAmounts.map((val) => (
              <button
                key={val}
                onClick={() => {
                  setAmount(val);
                  setCustom(false);
                }}
                className={`py-3 rounded-xl font-bold transition-all ${
                  !custom && amount === val
                    ? 'bg-brand-pink text-white shadow-md transform scale-105'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {val} €
              </button>
            ))}
          </div>

          <div className="mb-8">
            <button
              onClick={() => setCustom(true)}
              className={`text-sm font-semibold underline mb-2 ${custom ? 'text-brand-pink' : 'text-slate-500'}`}
            >
              Ou saisir un montant libre
            </button>
            {custom && (
              <div className="relative max-w-xs mx-auto">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full text-center text-2xl font-bold py-3 border-b-2 border-brand-pink outline-none"
                  placeholder="0"
                  autoFocus
                />
                <span className="absolute right-8 top-4 font-bold text-slate-400">€</span>
              </div>
            )}
          </div>

          <button 
            onClick={handleDonate}
            disabled={isLoading || !amount}
            className="w-full md:w-auto px-12 py-4 bg-brand-blue hover:bg-slate-800 text-white rounded-full font-bold transition-all flex items-center justify-center gap-2 mx-auto disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Redirection sécurisée...
              </>
            ) : (
              <>
                <Heart size={20} className="fill-current text-brand-pink" />
                Faire un don de {amount}€
                <ExternalLink size={16} className="ml-1 opacity-60" />
              </>
            )}
          </button>
          
          <p className="text-xs text-slate-400 mt-4">
            Vous serez redirigé vers notre plateforme de collecte sécurisée.
            <br/>Le don ouvre droit à une réduction d'impôt de 66%.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Donation;