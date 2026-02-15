
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Hero from './components/home/Hero';
import HowItWorks from './components/home/HowItWorks';
import Services from './components/home/Services';
import Reviews from './components/home/Reviews';
import Limits from './components/home/Limits';
import Faq from './components/home/Faq';
import SEO from './components/common/SEO';

function App() {
  return (
    <LanguageProvider>
      <SEO />
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth">
        <Navbar />
        <main>
          <Hero />
          <HowItWorks />
          <Services />
          <Reviews />
          <Limits />
          <Faq />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
