import Navbar from "../components/Navbar/Navbar";
// import CTA from "../sections/CTA";
// import Contact from "../sections/Contact";
import FAQ from "../sections/FAQ";
import Footer from "../sections/Footer";
// import FutureExpansion from "../sections/FutureExpansion";
import Hero from "../sections/Hero";
import HowItWorks from "../sections/HowItWorks";
import Location from "../sections/Location";
// import OurProcess from "../sections/OurProcess";
import Results from "../sections/Results";
import Services from "../sections/Services";
import TakeALook from "../sections/TakeALook";
import Testimonials from "../sections/Testimonials";
import WhatsAppFloat from "../components/WhatsAppFloat";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Results />
      <Testimonials />
      <TakeALook />
      <Location />
      {/* <OurProcess />
      <CTA backgroundImage='hero-image.svg' />
      <Contact />
      <FutureExpansion /> */}
      <FAQ />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default LandingPage;
