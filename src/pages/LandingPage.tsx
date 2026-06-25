import Navbar from "../components/Navbar/Navbar";
import About from "../sections/About";
import CTA from "../sections/CTA";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import FutureExpansion from "../sections/FutureExpansion";
import Hero from "../sections/Hero";
import Location from "../sections/Location";
import OurProcess from "../sections/OurProcess";
import Results from "../sections/Results";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";
import WhyChooseUs from "../sections/WhyChooseUs";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <OurProcess />
      <Results />
      <Testimonials />
      <CTA backgroundImage='https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1600&q=80' />
      <Contact />
      <FutureExpansion />
      <Location />
      <Footer />
    </>
  );
}

export default LandingPage;
