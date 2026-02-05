import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { EVENT_DETAILS } from '../constants';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{days: number, hours: number, minutes: number, seconds: number}>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(EVENT_DETAILS.isoDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft(); // Initial call
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, '0');

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Image removed as requested to avoid broken link icon */}
        
        {/* Advanced gradient overlay for better text centering */}
        <div className="absolute inset-0 bg-slate-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/50 to-slate-900/80"></div>
      </div>

      {/* Main Centered Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 w-full flex flex-col items-center text-center pt-16">
        
        {/* Top Badge */}
        <div className="mb-8 animate-fade-in-down" style={{animationDelay: '0.1s'}}>
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-slate-200 text-xs font-bold tracking-[0.2em] uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink"></span>
            </span>
            {EVENT_DETAILS.date} • {EVENT_DETAILS.location.split(',')[0]}
          </div>
        </div>

        {/* Giant Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.9] mb-8 animate-fade-in-down drop-shadow-2xl" style={{animationDelay: '0.2s'}}>
          PLUS QU'UNE <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-pink-400 to-white">COURSE.</span>
        </h1>

        {/* Subtitle / Hook */}
        <p className="text-lg md:text-2xl text-slate-300 font-light max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-down" style={{animationDelay: '0.3s'}}>
          L'Infinity Trail solidaire de Saint-Avertin.<br/>
          <span className="text-white font-medium">Une boucle. Une heure. Jusqu'au bout.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16 animate-fade-in-down" style={{animationDelay: '0.4s'}}>
          <a 
            href="#inscription"
            onClick={(e) => handleScroll(e, '#inscription')}
            className="w-full sm:w-auto px-10 py-4 bg-brand-pink hover:bg-brand-pinkDark text-white rounded-full font-bold text-lg transition-all shadow-[0_0_40px_-10px_rgba(236,72,153,0.5)] hover:shadow-[0_0_60px_-10px_rgba(236,72,153,0.7)] hover:-translate-y-1 flex items-center justify-center gap-2 group cursor-pointer"
          >
            S'inscrire ({EVENT_DETAILS.price}€)
            <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#concept"
            onClick={(e) => handleScroll(e, '#concept')}
            className="w-full sm:w-auto px-10 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all backdrop-blur-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <Play size={18} fill="currentColor" className="opacity-80" />
            Découvrir le concept
          </a>
        </div>

        {/* Elegant Glass Countdown Bar */}
        <div className="w-full max-w-3xl animate-fade-in-down" style={{animationDelay: '0.5s'}}>
          <div className="grid grid-cols-4 divide-x divide-white/10 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-white/10 p-4 md:p-6 shadow-2xl">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-4xl font-bold font-mono text-white tabular-nums">{pad(timeLeft.days)}</span>
              <span className="text-[10px] md:text-xs font-bold text-brand-pink uppercase tracking-widest mt-1">Jours</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-4xl font-bold font-mono text-white tabular-nums">{pad(timeLeft.hours)}</span>
              <span className="text-[10px] md:text-xs font-bold text-brand-pink uppercase tracking-widest mt-1">Heures</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-4xl font-bold font-mono text-white tabular-nums">{pad(timeLeft.minutes)}</span>
              <span className="text-[10px] md:text-xs font-bold text-brand-pink uppercase tracking-widest mt-1">Min</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-4xl font-bold font-mono text-white tabular-nums">{pad(timeLeft.seconds)}</span>
              <span className="text-[10px] md:text-xs font-bold text-brand-pink uppercase tracking-widest mt-1">Sec</span>
            </div>
          </div>
        </div>

      </div>
      
      {/* Scroll indicator */}
      <a 
        href="#concept" 
        onClick={(e) => handleScroll(e, '#concept')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-30 hover:opacity-100 transition-opacity cursor-pointer p-4"
      >
         <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent"></div>
      </a>
    </section>
  );
};

export default Hero;