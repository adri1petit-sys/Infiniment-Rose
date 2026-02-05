import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Cause from './components/Cause';
import Info from './components/Info';
import Registration from './components/Registration';
import Donation from './components/Donation';
import Team from './components/Team';
import Edition2025 from './components/Edition2025';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <Cause />
        <Info />
        <Registration />
        <Donation />
        <Team />
        <Edition2025 />
      </main>
      <Footer />
    </div>
  );
};

export default App;