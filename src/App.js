import { BenefitsSection } from './components/BenefitsSection';
import { BoostSection } from './components/BoostSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import './styles/global.scss';

function App() {
  return (
    <>
      <Header />
      <Hero />

      <BenefitsSection />
      <BoostSection />
      <Footer />
    </>
  );
}

export default App;
