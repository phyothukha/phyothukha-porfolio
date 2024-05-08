import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/sections/Banner";
import Contact from "@/sections/Contacts";
import Education from "@/sections/Education";
import Service from "@/sections/Service";
import Project from "@/sections/projects";

//https://sinantokmak.framer.website/

export default function Home() {
  return (
    <main>
      <Header />
      <main className="">
        <Banner />
        <Education />
        <Service />
        <Project />
        <Contact />
      </main>
      <Footer />
    </main>
  );
}
