import { BenefitsSection } from './components/BenefitsSection';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import './styles/global.scss';

function App() {
  return (
    <>
      <Header />
      <Hero />

      <BenefitsSection />
    </>
  );
}

export default App;
