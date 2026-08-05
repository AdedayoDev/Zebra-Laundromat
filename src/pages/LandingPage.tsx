
// import CTA from "../sections/CTA";
// import Contact from "../sections/Contact";
import FAQ from "../sections/FAQ";
// import FutureExpansion from "../sections/FutureExpansion";
import Hero from "../sections/Hero";
import HowItWorks from "../sections/HowItWorks";
import Location from "../sections/Location";
// import OurProcess from "../sections/OurProcess";
import Results from "../sections/Results";
import Services from "../sections/Services";
import TakeALook from "../sections/TakeALook";
import Testimonials from "../sections/Testimonials";

function LandingPage() {
  return (
    <>
     
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
      
      
    </>
  );
}

export default LandingPage;
