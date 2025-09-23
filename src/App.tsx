import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Vision from './components/Vision';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Signup from './components/Signup';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Vision />
        <Testimonials />
        <FAQ />
        <Signup />
      </main>
      <Footer />
    </div>
  );
}

export default App;