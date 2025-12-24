import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Career from "./components/Career";
import Hero from "./components/Hero";
import Csr from "./components/Csr";
import ScrollToTop from "./components/ScrollToTop";
import Gallery from "./components/Gallery";

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Header visible on all pages */}
      <Header />

      {/* Define routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Csr" element={<Csr />} />
        <Route path="/hero" element={<Hero/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
