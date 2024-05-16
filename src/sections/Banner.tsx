import React from "react";
import phyothukha from "@/assets/phyothukha-removebg-preview.png";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section id="#me" className=" lg:h-screen  relative overflow-hidden ">
      <p
        aria-hidden="true"
        className="bg-text absolute bottom-0 rotate-12 dark:text-[#0e0c0c] text-[#dfdbdbb4]  text-9xl scale-150 tracking-wide font-bold select-none pointer-events-none text-center -z-20"
      >
        PASSIONATE PROGRAMMER FREELANCER FULL-STACK DEVELOPER
        <span className=" xl:inline-block hidden">
          PASSIONATE PROGRAMMER FREELANCER FULL-STACK DEVELOPER
        </span>
        <span className=" xl:inline-block hidden">
          PASSIONATE PROGRAMMER FREELANCER FULL-STACK DEVELOPER
        </span>
      </p>
      <div className=" flex lg:flex-row  flex-col-reverse gap-10  font-Roboto container max-w-6xl mx-auto items-center lg:justify-between lg:gap-0 justify-center  flex-wrap-reverse  lg:h-screen lg:my-0 my-20 lg:px-0 px-10  ">
        <article className=" lg:w-1/2 self-center flex flex-col gap-5 lg:text-start text-center">
          <p className=" lg:text-lg text-sm font-normal font-Poetsen  text-opacity-70 ">
            My name{"'"}s{" "}
            <span className=" dark:text-secondary text-wtsecondary text-sm lg:text-xl font-Poetsen">
              Phyo Thu Kha
            </span>
          </p>
          <h2 className=" lg:text-4xl text-2xl font-bold lg:font-semibold font-Ubuntu ">
            I am a{" "}
            <span className=" dark:text-secondary text-wtsecondary italic font-bold font-Fira">
              MERN STACK DEVELOPER
            </span>
          </h2>
          <p className=" tracking-widest font-Roboto font-bold opacity-80 text-xs lg:text-sm font-Poetsen">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem accusantium reiciendis architecto id perferendis eos
            reprehenderit sint laboriosam neque maiores consequuntur voluptas
          </p>
          <div className=" flex gap-3 justify-center lg:justify-start">
            <Link
              href={"#contact"}
              className=" btn bg-wtsecondary dark:bg-secondary dark:text-black text-white before:bg-purple-500"
            >
              Contact Me
            </Link>
            <button className=" btn bg-transparent  border-wtsecondary dark:border-secondary text-wtsecondary dark:text-secondary border-2 dark:before:bg-secondary before:bg-wtsecondary">
              Download CV
            </button>
          </div>
        </article>
        <aside className=" dark:bg-secondary bg-wtsecondary bg-opacity-70 lg:w-[500px] w-[300px] h-[300px] lg:h-[500px] rounded-full  transition ease-in-out duration-500 cursor-pointer overflow-hidden dark:shadow-3xl shadow-5xl hover:shadow-6xl dark:hover:shadow-4xl ">
          <div className=" absolute -bottom-50 "></div>
          <Image
            src={phyothukha}
            className=" mt-20 lg:w-[500px] w-[300px] h-[300px] lg:h-[500px]"
            alt="Phyo Thu Kha photo"
            priority
          />
        </aside>
      </div>
    </section>
  );
};

export default Banner;
