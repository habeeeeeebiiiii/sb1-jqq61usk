import React from 'react';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import PhotoGallery from './components/PhotoGallery';
import Admissions from './components/Admissions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <div className="font-display min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <AboutUs />
        <Features />
        <PhotoGallery />
        <Admissions />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;