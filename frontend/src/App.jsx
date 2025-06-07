import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services'; 
import Testimonials from './components/Testimonials';
import Footer from './components/Footer'; 
import Features from './components/Features';
import FAQ from './components/FAQ';

import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features /> 
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}


export default App;
