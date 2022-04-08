import './App.css';
import Header from './components/Layout/Header';
import OurServices from './components/Contents/OurServices';
import WhyUs from './components/Contents/WhyUs';
import Testimonial from './components/Contents/Testimonial';
import CtaBanner from './components/Contents/CtaBanner';
import Faq from './components/Contents/Faq';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <>
    <Header />
    <OurServices />
    <WhyUs />
    <Testimonial />
    <CtaBanner />
    <Faq />
    <Footer />
    </>
  );
}

export default App;
