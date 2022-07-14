import { BenefitsSection } from './components/BenefitsSection';
import { BoostSection } from './components/BoostSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ShortenerForm } from './components/ShortenerForm';

import './styles/global.scss';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ShortenerForm />
      <BenefitsSection />
      <BoostSection />
      <Footer />
    </>
  );
}

export default App;
