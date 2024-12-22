import Image from "next/image";
import React from "react";
import timelimebg from "@/assets/timelimebg.svg";
import timelimebgwt from "@/assets/timelimebg-wt.svg";
// import about from "@/assets/about.jpg";
import about from "@/assets/bb.jpg";

const EducationSection = () => {
  return (
    <section
      id="education"
      className="  dark:bg-[#292f36]  bg-[#eeeeee] bg-opacity-90 pb-20 relative overflow-hidden"
    >
      <div className=" absolute top-0 z-10  dark:inline-block hidden ">
        <Image
          src={timelimebg}
          alt="timeline background"
          className=" max-w-none object-cover object-center w-[2000px] h-auto"
          priority
        />
      </div>
      <div className=" absolute top-0 z-10  dark:hidden inline-block ">
        <Image
          src={timelimebgwt}
          alt="timeline white background"
          // style={{
          //   maxWidth: "none",
          //   objectFit: "cover",
          //   objectPosition: "bottom",
          //   width: 2000,
          //   height: "auto",
          // }}
          className=" max-w-none object-cover object-center w-[2000px] h-auto"
          priority
        />
      </div>
      <div className=" container mx-auto max-w-7xl relative z-30 lg:px-0 px-10 ">
        <h1>Education</h1>

        <div className=" lg:px-28 mt-20">
          <div className=" flex flex-wrap md:flex-row flex-col-reverse  md:flex-nowrap md:justify-start justify-center  items-center  gap-20">
            <aside className=" lg:w-2/3">
              <button className="  mb-10  bg-darkary lg:text-2xl text-xl w-56 font-medium text-primary dark:text-secondary border-b-2  dark:border-secondary border-wtsecondary rounded-none  border-l-2 border-r-2 border-t-2 rounded-tl-[2.3rem]  lg:p-5 p-3 rounded-br-[2rem] ">
                About Me
              </button>
              <div className=" bg-darkary  border-2 border-wtsecondary  dark:border-secondary py-[30px] px-[50px] rounded-3xl  shadow-5xl dark:shadow-3xl cursor-pointer transition duration-500 ease-in-out">
                <h2 className=" font-Ubuntu selection:text-primary dark:selection:text-darkary text-2xl mb-5 text-secondary">
                  Hello!
                </h2>
                <p className=" text-primary font-normal text-xs mb-2 dark:selection:text-darkary ">
                  My name is{" "}
                  <span className="text-secondary"> Phyo Thu Kha</span> and I
                  specialize in web developement that utilizes HTML, CSS, JS,
                  and <span className="text-secondary">REACT </span>
                  etc.
                </p>

                <p className=" text-primary font-normal text-xs mb-2 dark:selection:text-darkary">
                  I am a highly motivated individual and eternal optimist
                  dedicated to writing clear, concise, robust code that works.
                  Striving to never stop learning and improving.
                </p>
                <p className=" text-primary font-normal text-xs mb-2 dark:selection:text-darkary">
                  When I{"'"}m not coding, I am writing bolgs, reading, or
                  picking up some new hands-on art project like photography.
                </p>
                <p className=" text-primary font-normal text-xs mb-2 dark:selection:text-darkary">
                  I like to have my perspective and belief systems challenged so
                  that I see the world through new eyes.
                </p>
              </div>
            </aside>
            <aside className=" lg:w-1/3  md:self-end">
              <div className="  overflow-hidden h-full w-full bg-primary border-2 border-wtsecondary  dark:border-secondary rounded-xl   cursor-pointer transition duration-500 ease-in-out">
                <Image
                  src={about}
                  alt="about me"
                  width={800}
                  className=" mx-auto object-cover md:object-bottom h-[400px]  w-[400px] md:w-[500px] "
                  height={500}
                />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
