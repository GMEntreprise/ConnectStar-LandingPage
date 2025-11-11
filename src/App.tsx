import { Route, Routes } from "react-router-dom";
import Donations from "./components/Donations";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NotFound from "./components/NotFound";
import Privacy from "./components/Privacy";
import Signup from "./components/Signup";
import Terms from "./components/Terms";
import Testimonials from "./components/Testimonials";
import Vision from "./components/Vision";
import { useSeoMeta } from "./hooks/useSeoMeta";

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
          <Route path="/donations" element={<Donations />} />
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
