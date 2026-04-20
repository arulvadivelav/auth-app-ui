import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <Hero />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default HomePage;