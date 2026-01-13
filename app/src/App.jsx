import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import Career from './pages/Career';
import About from './pages/About';
import Contact from './pages/Contact';
import DearbornHeights from './pages/DearbornHeights';
import AllenPark from "./pages/AllenPark";
import './styles/global.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        width: '100%',
        margin: 0,
        padding: 0,
        fontFamily: 'Open Sans, sans-serif'
      }}>
        <Header />
        <main style={{ flex: 1, width: '100%' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/career" element={<Career />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aba-therapy-in-dearborn-heights-mi" element={<DearbornHeights />} />
            <Route path="/aba-therapy-in-allen-park-mi" element={<AllenPark />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
