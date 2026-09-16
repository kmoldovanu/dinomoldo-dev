import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyTrustMe } from "@/components/sections/WhyTrustMe";
import { Contact } from "@/components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <WhyTrustMe />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
