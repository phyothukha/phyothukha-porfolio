import React from "react";
import phyothukha from "@/assets/phyothukha-removebg-preview.png";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section id="#me" className="  relative overflow-hidden ">
      <span
        aria-hidden="true"
        className="bg-text absolute md:bottom-10 rotate-12 dark:text-[#0e0c0c] text-[#dfdbdbb4]  text-9xl scale-150 tracking-wide font-bold select-none pointer-events-none text-center -z-20"
      >
        PASSIONATE PROGRAMMER FREELANCER FULL-STACK DEVELOPER
      </span>
      <div className=" flex font-Roboto container max-w-6xl mx-auto items-center lg:justify-between justify-center  flex-wrap-reverse  h-screen ">
        <article className=" lg:w-1/2 self-center flex flex-col gap-5 lg:text-start text-center">
          <p className=" text-lg font-extrabold font-Roboto  text-opacity-70 ">
            My name{"'"}s{" "}
            <span className=" dark:text-secondary text-wtsecondary text-xl font-Poppins">
              Phyo Thu Kha
            </span>
          </p>
          <h2 className=" text-5xl font-semibold font-Roboto">
            I am a{" "}
            <span className=" dark:text-secondary text-wtsecondary">
              WEB DEVELOPER
            </span>
          </h2>
          <p className=" tracking-widest font-Roboto font-medium opacity-80">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem accusantium reiciendis architecto id perferendis eos
            reprehenderit sint laboriosam neque maiores consequuntur voluptas
          </p>
          <div className=" flex gap-3">
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
        <aside className=" dark:bg-secondary bg-wtsecondary bg-opacity-70 w-[500px] h-[500px] rounded-full  transition ease-in-out duration-500 cursor-pointer overflow-hidden dark:shadow-3xl shadow-5xl hover:shadow-6xl dark:hover:shadow-4xl ">
          <div className=" absolute -bottom-50 "></div>
          <Image
            width={500}
            height={500}
            src={phyothukha}
            className=" mt-20"
            alt="Phyo Thu Kha photo"
            priority
          />
        </aside>
      </div>
      {/* <div
        style={{
          width: "100%",
          background:
            "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
          position: "absolute",
          zIndex: 50,
          bottom: 0,
          left: 0,
        }}
        className=" md:h-[60px] h-[70px]"
      ></div> */}
    </section>
  );
};

export default Banner;
