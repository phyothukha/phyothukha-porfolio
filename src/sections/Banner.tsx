import React from "react";
import Profile from "../assets/phyothukha-removebg-preview.png";
import Image from "next/image";

const Banner = () => {
  return (
    <section id="#me" className=" h-screen relative overflow-hidden ">
      <span
        aria-hidden="true"
        className="bg-text absolute bottom-10 rotate-12 text-[#0e0c0c]  text-9xl scale-150 tracking-wide font-bold select-none pointer-events-none text-center -z-20"
      >
        PASSIONATE PROGRAMMER FREELANCER FULL-STACK DEVELOPER
      </span>
      <div className=" flex font-Roboto container max-w-6xl mx-auto items-center justify-between h-screen text-white">
        <article className=" w-1/2 self-center flex flex-col gap-5">
          <p className=" text-lg font-extrabold font-Roboto  text-opacity-70 ">
            My name{"'"}s{" "}
            <span className=" text-secondary text-xl font-Poppins">
              {" "}
              Phyo Thu Kha
            </span>
          </p>
          <h2 className=" text-5xl font-semibold font-Roboto">
            I am a <span className=" text-secondary">WEB DEVELOPER</span>
          </h2>
          <p className=" tracking-widest font-Roboto font-medium opacity-80">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem accusantium reiciendis architecto id perferendis eos
            reprehenderit sint laboriosam neque maiores consequuntur voluptas
          </p>
          <div className=" flex gap-3">
            <button className=" btn bg-secondary text-black before:bg-purple-500">
              Contact Me
            </button>
            <button className=" btn bg-transparent border-secondary text-secondary border-2 before:bg-secondary">
              Download CV
            </button>
          </div>
        </article>
        <aside>
          <div className=" bg-secondary bg-opacity-70 w-[500px] h-[500px] rounded-full relative transition ease-in-out duration-500 cursor-pointer overflow-hidden shadow-3xl hover:shadow-4xl">
            <div className=" absolute -bottom-50 "></div>
            <Image
              width={500}
              height={500}
              src={Profile}
              className=" mt-20"
              alt=""
            />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Banner;
