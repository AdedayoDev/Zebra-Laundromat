import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import { GetHelp } from "../pages/GetHelp/GetHelp";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../sections/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import { Policy } from "../pages/Policy/Policy";

function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/get-help' element={<GetHelp />} />
        <Route path='/policy' element={<Policy />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </Router>
  );
}

export default AppRoutes;
