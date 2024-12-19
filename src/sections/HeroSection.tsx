import React from "react";
import phyothukha from "@/assets/phyothukha.png";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="#me" className="  relative mt-16 overflow-hidden ">
      <span
        aria-hidden="true"
        className="bg-text absolute  top-36 rotate-12 text-gray-100 dark:text-[#4b4a4a31] text-[#e7e7e7b4] text-9xl scale-150 tracking-wide font-bold select-none pointer-events-none text-center -z-20"
      >
        PASSIONATE PROGRAMMER FREELANCER FULL-STACK DEVELOPER
      </span>
      <div className=" w-full flex flex-col items-center lg:justify-start justify-evenly">
        <div className=" flex md:flex-row items-center md:pb-40 pb-10  flex-col-reverse gap-5  font-Roboto container max-w-6xl mx-auto    lg:gap-5 justify-center  flex-wrap-reverse  min-h-[769px]  lg:px-0 px-10  ">
          <article className=" md:w-1/2 selection:bg-wtsecondary dark:selection:bg-secondary max-w-[500px]  flex flex-col gap-1 lg:gap-5 text-start ">
            <p className=" lg:text-lg selection:text-primary text-sm font-normal font-Poetsen text-opacity-20 ">
              My name{"'"}s{" "}
            </p>
            <p className=" md:text-3xl font-Fira text-xl dark:text-secondary dark:selection:text-darkary selection:text-primary text-wtsecondary lg:text-5xl ">
              <span className="  font-Fira"> {"<"}</span>Phyo Thu Kha
              <span className=" font-Fira">{"/>"}</span>
            </p>
            <h2 className=" lg:text-3xl text-2xl font-bold lg:font-semibold font-Ubuntu selection:text-primary dark:selection:text-darkary ">
              I am a{" "}
              <span className=" dark:text-secondary  text-wtsecondary italic font-bold font-Fira">
                MERN STACK DEVELOPER
              </span>
            </h2>
            <p className="  font-normal tracking-widest selection:text-primary dark:selection:text-darkary font-Ubuntu  text-xs lg:text-sm">
              I am a Full-stack developer skilled in handling diverse projects,
              learning new technologies, and solving user problems effectively.
            </p>
            <div className=" flex gap-3 mt-5  justify-start">
              <Link
                href={"#contact"}
                className=" btn bg-wtsecondary dark:bg-secondary dark:text-black text-white before:bg-purple-500"
                style={{
                  lineHeight: 1.7,
                }}
              >
                Contact Me
              </Link>
              <button className=" btn bg-transparent  border-wtsecondary dark:border-secondary text-wtsecondary dark:text-secondary border-2 dark:before:bg-secondary before:bg-wtsecondary">
                Download CV
              </button>
            </div>
          </article>
          <aside className=" dark:bg-secondary  bg-wtsecondary bg-opacity-70 lg:w-[450px] w-[300px] h-[300px] lg:h-[450px] rounded-full  transition ease-in-out duration-500 cursor-pointer overflow-hidden dark:shadow-3xl shadow-5xl hover:shadow-6xl dark:hover:shadow-4xl ">
            <div className=" absolute -bottom-50 "></div>
            <Image
              src={phyothukha}
              className=" mt-20 mx-auto lg:w-[400px] w-[300px] h-[300px] lg:h-[400px]"
              alt="Phyo Thu Kha photo"
              priority
            />
          </aside>
        </div>
      </div>
      <div className=" absolute md:inline hidden  left-[50%] transform translate-x-[-50%] bottom-5  animate  animate-bounce text-center">
        <p>scroll</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler mx-auto icons-tabler-outline icon-tabler-mouse"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 3m0 4a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4z" />
          <path d="M12 7l0 4" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className=" mx-auto icon icon-tabler icons-tabler-outline icon-tabler-chevrons-down"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 7l5 5l5 -5" />
          <path d="M7 13l5 5l5 -5" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
