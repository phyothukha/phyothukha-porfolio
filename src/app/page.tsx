"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactSection from "@/sections/ContactSection";
import CursorSection from "@/sections/CursorSection";
import EducationSection from "@/sections/EducationSection";
import HeroSection from "@/sections/HeroSection";
import ProjectSection from "@/sections/ProjectSection";
import ServiceSection from "@/sections/ServiceSection";

//https://sinantokmak.framer.website/

export default function Home() {
  return (
    <>
      <CursorSection />
      <main>
        <Header />
        <HeroSection />
        <EducationSection />
        <ServiceSection />
        <ProjectSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
