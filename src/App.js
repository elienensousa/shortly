import { BenefitsSection } from './components/BenefitsSection';
import { BoostSection } from './components/BoostSection';
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
    </>
  );
}

export default App;
