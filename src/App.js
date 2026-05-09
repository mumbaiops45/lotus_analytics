// App.jsx
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import "./App.css";

import CEODesk from "./components/CEODesk";
import ServiceHighlights from "./components/ServiceHighlights";
import Evolution from "./components/Evolution";
import SolutionsShowcase from "./components/SolutionsShowcase";

import AccountingFinance from "./business_services/accounting-finance";
import Reconciliation from "./business_services/reconciliation";
import SupplyChainManagement from "./business_services/supply-chain-management";
import Compliance from "./business_services/compliance";
import CustomInsights from "./business_services/custom-insights";
import CustomDevelopments from "./business_services/custom-developments";
import LossPrevention from "./business_services/loss-prevention";
import RpaAutomation from "./business_services/rpa-automation";
import HR from "./business_services/hr"; 
import LogisticsReverse from "./business_services/logisti-reverse-logistics";
import ScrollToTop from "./components/ScrollToTop";
import BusinessConsulting from "./business_services/business-consulting";
import Payroll from "./business_services/payroll";


const HomePage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const revealElements = document.querySelectorAll(".reveal");

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');

      if (target) {
        const hash = target.getAttribute("href");

        if (hash && hash !== "#") {
          const element = document.querySelector(hash);

          if (element) {
            e.preventDefault();

            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () =>
      document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <CEODesk />
      <ServiceHighlights />
      <Services />
      <Evolution />
      <SolutionsShowcase />
      <Testimonials />
      <CTA />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>

      {/* GLOBAL NAVBAR */}
      <Navbar />

      {/* PAGES */}
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/business-services/accounting-finance"
          element={<AccountingFinance />}
        />

        <Route
          path="/business-services/reconciliation"
          element={<Reconciliation />}
        />

        <Route
          path="/business-services/supply-chain-management"
          element={<SupplyChainManagement />}
        />

        <Route
          path="/business-services/compliance"
          element={<Compliance />}
        />

        <Route
          path="/business-services/custom-insights"
          element={<CustomInsights />}
        />

         <Route
          path="/business-services/custom-developments"
          element={<CustomDevelopments />}
        />
         <Route
          path="/business-services/loss-prevention"
          element={<LossPrevention />}
        />
         <Route
          path="/business-services/rpa-automation"
          element={<RpaAutomation />}
        />
        
        <Route
          path="/business-services/hr"
          element={<HR />}
        />
        
         <Route
          path="/business-services/logisti-reverse-logistics"
          element={<LogisticsReverse />}
        />
        
        <Route
          path="/business-services/business-consulting"
          element={<BusinessConsulting />}
        />
      

      <Route
          path="/business-services/payroll"
          element={<Payroll />}
        />
      </Routes>

      {/* GLOBAL FOOTER */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;