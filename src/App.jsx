import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Component/layout/Navbar";
import Footer from "./Component/layout/Footer";
import Hero from "./Component/home/landingpage";
import About from "./Component/common/About/about";
import Contact from "./Component/common/CONTACT/contact";


// ✅ Import AI widget
import NgoAIFloatingWidget from "./Component/AI/NgoAiWidget";

function App() {
  return (
    <div className="max-w-full min-h-screen overflow-x-hidden">

      <Router>

        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* AI Widget */}
        <NgoAIFloatingWidget />
        <Footer />

        
      </Router>

    </div>
  );
}

export default App;