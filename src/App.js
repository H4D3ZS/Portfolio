import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update: Replace Switch with Routes
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop />
        <Routes>
          {' '}
          {/* Update: Use Routes instead of Switch */}
          <Route path="/about" element={<About />} />{' '}
          {/* Update: Use element prop */}
          <Route path="/contact" element={<Contact />} />{' '}
          {/* Update: Use element prop */}
          <Route path="/projects" element={<Projects />} />{' '}
          {/* Update: Use element prop */}
          <Route path="/" element={<Home />} /> {/* Update: Use element prop */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
