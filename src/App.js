// App.jsx
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Services from './components/Services';
// import Process from './components/Process';
// import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';
import CEODesk from './components/CEODesk';
import ServiceHighlights from './components/ServiceHighlights';
import Evolution from './components/Evolution';
import SolutionsShowcase from './components/SolutionsShowcase';

function App() {
  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        const hash = target.getAttribute('href');
        if (hash && hash !== '#') {
          const element = document.querySelector(hash);
          if (element) {
            e.preventDefault();
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <CEODesk/>
      <ServiceHighlights/>
      <Services />
      <Evolution/>
      <SolutionsShowcase/>
      {/* <Process /> */}
      {/* <Features /> */}
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default App;