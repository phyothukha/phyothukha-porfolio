import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactSection from "@/sections/ContactSection";
import EducationSection from "@/sections/EducationSection";
import HeroSection from "@/sections/HeroSection";
import ProjectSection from "@/sections/ProjectSection";
import ServiceSection from "@/sections/ServiceSection";
import Link from "next/link";

//https://sinantokmak.framer.website/

export default function Home() {
  return (
    <main>
      <Header />
      <main className="">
        <HeroSection />

        {/* <div className=" h-40  relative">
          <div className=" absolute  left-[50%] transform translate-x-[-50%] animate-bounce">
            <Link href={"#education"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--main-color)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-mouse"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 3m0 4a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4z" />
                <path d="M12 7l0 4" />
              </svg>
              <div className=" mt-5 tracking-widest transform rotate-90">
                scroll
              </div>
            </Link>
          </div>
        </div> */}

        <EducationSection />
        <ServiceSection />
        <ProjectSection />
        <ContactSection />
      </main>
      {/* <hr /> */}
      <Footer />
      {/* <div className=" w-full h-full bg-red-400 fixed bottom-0 right-0"></div> */}
    </main>
  );
}
