import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Vision from './components/Vision';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import NotFound from './components/NotFound';
import { useSeoMeta } from './hooks/useSeoMeta';

const HomePage = () => (
  <>
    <Hero />
    <Features />
    <Vision />
    <Testimonials />
    <FAQ />
    <Signup />
  </>
);

function App() {
  useSeoMeta();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/privacy"
            element={<Privacy onBack={() => window.history.back()} />}
          />
          <Route
            path="/terms"
            element={<Terms onBack={() => window.history.back()} />}
          />
          <Route
            path="*"
            element={<NotFound onBack={() => window.history.back()} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;