import React, { useState, useEffect } from 'react';
import { Participant, RegistrationStatus } from '../types';
import { EVENT_DETAILS } from '../constants';
import { CreditCard, Lock, CheckCircle, Users, Loader2, AlertCircle } from 'lucide-react';

// -------------------------------------------------------------------------
// CONFIGURATION API
// Pour connecter le site à HelloAsso/Make/Supabase :
// 1. Remplacez la chaîne vide ci-dessous par l'URL de votre Webhook (ex: Make.com ou Supabase Edge Function)
// 2. Le site basculera automatiquement en mode "Réel"
// -------------------------------------------------------------------------
const API_URL = ""; 
// Ex: "https://hook.eu1.make.com/votre-webhook-id"

const Registration: React.FC = () => {
  const [seatsRemaining, setSeatsRemaining] = useState(EVENT_DETAILS.maxParticipants);
  const [status, setStatus] = useState<RegistrationStatus>(RegistrationStatus.IDLE);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  // State du formulaire
  const [formData, setFormData] = useState<Participant>({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  // EFFET : Récupérer le nombre de places réelles au chargement
  useEffect(() => {
    const fetchSeatCount = async () => {
      if (!API_URL) return; // Si pas d'API configurée, on reste sur la valeur par défaut (200)

      try {
        const response = await fetch(`${API_URL}/count`);
        if (response.ok) {
          const data = await response.json();
          // On s'attend à recevoir { count: 143 } par exemple
          const realRemaining = EVENT_DETAILS.maxParticipants - (data.count || 0);
          setSeatsRemaining(Math.max(0, realRemaining));
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des places:", error);
        // En cas d'erreur, on échoue silencieusement et on garde la valeur par défaut
      }
    };

    fetchSeatCount();
    // Optionnel : Polling toutes les 30 secondes pour mettre à jour
    const interval = setInterval(fetchSeatCount, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(RegistrationStatus.SUBMITTING);
    setErrorMessage(null);

    // LOGIQUE DE SOUMISSION
    if (API_URL) {
      // MODE RÉEL : Envoi des données au Webhook
      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            event: EVENT_DETAILS.name,
            amount: EVENT_DETAILS.price,
            date: new Date().toISOString()
          }),
        });

        if (response.ok) {
          // Si le webhook renvoie une URL de paiement, on redirige
          const data = await response.json();
          if (data.paymentUrl) {
            window.location.href = data.paymentUrl;
          } else {
            setStatus(RegistrationStatus.SUCCESS);
            setSeatsRemaining(prev => Math.max(0, prev - 1)); // Optimistic UI update
          }
        } else {
          throw new Error("Erreur serveur");
        }
      } catch (error) {
        console.error("Erreur inscription:", error);
        setStatus(RegistrationStatus.ERROR);
        setErrorMessage("Une erreur est survenue lors de la connexion. Veuillez réessayer.");
      }
    } else {
      // MODE DÉMO / LOCAL (Simulation)
      setTimeout(() => {
        setStatus(RegistrationStatus.SUCCESS);
        setSeatsRemaining(prev => Math.max(0, prev - 1));
      }, 1500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Écran de succès
  if (status === RegistrationStatus.SUCCESS) {
    return (
      <section id="inscription" className="py-20 bg-brand-pink/5">
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl text-center animate-fade-in-down">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} />
            </div>
            <h3 className="text-3xl font-extrabold text-brand-blue mb-4">Inscription Confirmée !</h3>
            <p className="text-lg text-slate-600 mb-8">
              Merci {formData.firstName}. Votre paiement de 20€ a été validé.
              <br/>Vous faites désormais partie de l'aventure Infiniment Rose.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm text-slate-500 mb-8">
              Un email de confirmation vient d'être envoyé à <strong>{formData.email}</strong>.
            </div>
            <button 
              onClick={() => {
                setStatus(RegistrationStatus.IDLE);
                setFormData({ firstName: '', lastName: '', email: '', phone: '' });
              }}
              className="text-brand-pink font-semibold hover:text-brand-pinkDark underline"
            >
              Inscrire une autre personne
            </button>
          </div>
        </div>
      </section>
    );
  }

  const percentFull = Math.round(((EVENT_DETAILS.maxParticipants - seatsRemaining) / EVENT_DETAILS.maxParticipants) * 100);

  return (
    <section id="inscription" className="py-20 bg-gradient-to-br from-slate-900 to-brand-blue text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left: Urgency & Value */}
          <div className="lg:w-1/2">
            <h2 className="text-brand-pink font-bold tracking-wider uppercase text-sm mb-3">Rejoindre l'aventure</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6">
              Prenez votre dossard maintenant
            </h3>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Les places sont limitées à 200 participants pour garantir une sécurité optimale et une ambiance conviviale. 
              Ne tardez pas !
            </p>

            {/* Dynamic Counter */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 mb-8">
              <div className="flex justify-between items-end mb-2">
                <div className="flex items-center gap-2 text-brand-pink font-bold">
                  <Users size={20} />
                  <span>Places restantes</span>
                </div>
                <span className="text-3xl font-bold transition-all duration-500">{seatsRemaining}</span>
              </div>
              <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden">
                <div 
                  className="bg-brand-pink h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${percentFull}%` }}
                ></div>
              </div>
              <div className="text-right text-xs text-slate-400 mt-2">
                {percentFull}% complet
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-300">
                <CheckCircle className="text-brand-pink" size={20} />
                <span>Paiement 100% sécurisé</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <CheckCircle className="text-brand-pink" size={20} />
                <span>Validation immédiate</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:w-1/2">
            <div className="bg-white text-slate-800 p-8 rounded-3xl shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-2xl font-bold text-brand-blue">Inscription</h4>
                <span className="px-3 py-1 bg-brand-pink/10 text-brand-pink font-bold rounded-full text-sm">
                  {EVENT_DETAILS.price}€
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Prénom</label>
                    <input 
                      required
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 outline-none transition-all"
                      placeholder="Jean"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Nom</label>
                    <input 
                      required
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 outline-none transition-all"
                      placeholder="Dupont"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Email</label>
                  <input 
                    required
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 outline-none transition-all"
                    placeholder="jean.dupont@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Téléphone</label>
                  <input 
                    required
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 outline-none transition-all"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                {status === RegistrationStatus.ERROR && (
                   <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg flex items-center gap-2">
                     <AlertCircle size={16} />
                     {errorMessage}
                   </div>
                )}

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={status === RegistrationStatus.SUBMITTING || seatsRemaining === 0}
                    className="w-full py-4 bg-brand-pink hover:bg-brand-pinkDark text-white font-bold rounded-xl shadow-lg shadow-brand-pink/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {status === RegistrationStatus.SUBMITTING ? (
                      <>
                        <Loader2 className="animate-spin" size={20} /> Traitement en cours...
                      </>
                    ) : (
                      <>
                        <CreditCard size={20} className="group-hover:scale-110 transition-transform" /> 
                        Valider l'inscription ({EVENT_DETAILS.price}€)
                      </>
                    )}
                  </button>
                  <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mt-4">
                    <Lock size={12} />
                    <span>Redirection sécurisée vers la billetterie</span>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Registration;