import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GetHelp from "./pages/GetHelp/GetHelp";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./sections/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ScrollToTop from "./components/ScrollToTop";
import { Policy } from "./pages/Policy/Policy";
import About from "./sections/About";
import HowToUseOurMachines from "./pages/GetHelp/HowToUseOurMachines";
import MachineUsageGuidelines from "./pages/GetHelp/MachineUsageGuidelines";
import HealthAndSafety from "./pages/GetHelp/HealthAndSafety";
import CustomerResponsibilities from "./pages/GetHelp/CustomerResponsibilities";
import FAQs from "./pages/GetHelp/FAQs";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/get-help' element={<GetHelp />} />
        <Route
          path='/help/how-to-use-our-machines'
          element={<HowToUseOurMachines />}
        />
        <Route
          path='/help/machine-usage-guidelines'
          element={<MachineUsageGuidelines />}
        />
        <Route path='/help/health-and-safety' element={<HealthAndSafety />} />
        <Route
          path='/help/customer-responsibilities'
          element={<CustomerResponsibilities />}
        />
        <Route path='/help/faqs' element={<FAQs />} />
        <Route path='/about-zebra-laundromat' element={<About />} />
        <Route path='/policy' element={<Policy />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </Router>
  );
}

export default App;
