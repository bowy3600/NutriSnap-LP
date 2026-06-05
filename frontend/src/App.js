import React, { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Solution } from "@/components/landing/Solution";
import { Market } from "@/components/landing/Market";
import { Features } from "@/components/landing/Features";
import { Traction } from "@/components/landing/Traction";
import { BusinessModel } from "@/components/landing/BusinessModel";
import { Team } from "@/components/landing/Team";
import { Roadmap } from "@/components/landing/Roadmap";
import { ContactForm } from "@/components/landing/ContactForm";
import { Footer } from "@/components/landing/Footer";

const Landing = () => {
  useEffect(() => {
    document.title = "NutriSnap · Investor Pitch";
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] font-body text-white antialiased">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Market />
        <Features />
        <Traction />
        <BusinessModel />
        <Team />
        <Roadmap />
        <ContactForm />
      </main>
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
