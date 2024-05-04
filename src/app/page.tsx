import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/sections/Banner";
import Education from "@/sections/Education";
import Service from "@/sections/Service";

export default function Home() {
  return (
    <main>
      <Header />
      <main className="">
        {/* <div className=" h-"></div> */}
        <Banner />
        <Education />
        <Service />
      </main>
      {/* <Footer /> */}
    </main>
  );
}
