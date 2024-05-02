import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/sections/Banner";
import Service from "@/sections/service";

export default function Home() {
  return (
    <main>
      <Header />
      <main className="">
        <div className=" h-20 "></div>
        <Banner />
      </main>
      {/* <Footer /> */}
    </main>
  );
}
