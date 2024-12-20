"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactSection from "@/sections/ContactSection";
import EducationSection from "@/sections/EducationSection";
import HeroSection from "@/sections/HeroSection";
import ProjectSection from "@/sections/ProjectSection";
import ServiceSection from "@/sections/ServiceSection";
import gsap from "gsap";
import { useEffect, useRef } from "react";

//https://sinantokmak.framer.website/

export default function Home() {
  const cursorRef = useRef(null);
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      gsap.to(cursorRef.current, {
        x: mouseX,
        y: mouseY,
        opacity: 1,
        delay: 0,
      });
    });

    const hideCursor = () => {
      gsap.to(cursorRef.current, { opacity: 0 });
    };
    const showCursor = () => {
      gsap.to(cursorRef.current, { opacity: 1 });
    };
    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mousedown", hideCursor);
    document.addEventListener("mouseup", showCursor);
  }, []);

  console.log(cursorRef.current);
  return (
    <>
      <div
        ref={cursorRef}
        className="hidden md:block w-12 h-12 opacity-0 pointer-events-none rounded-full border-2 border-wtsecondary  z-[9999] fixed -translate-x-1/2 -translate-y-1/2"
      />
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
