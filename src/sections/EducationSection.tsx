import Image from "next/image";
import React from "react";
import timelimebg from "@/assets/timelimebg.svg";
import timelimebgwt from "@/assets/timelimebg-wt.svg";
import phyothukha from "@/assets/image.png";

const EducationSection = () => {
  return (
    <section
      id="education"
      className="  dark:bg-[#292f36] min-h-[769px] bg-[#eeeeee] bg-opacity-90 py-5 relative overflow-hidden"
    >
      <div className=" absolute top-0 z-10  dark:inline-block hidden ">
        <Image
          src={timelimebg}
          alt="timeline background"
          style={{
            maxWidth: "none",
            objectFit: "cover",
            objectPosition: "bottom",
            width: 2000,
            height: "auto",
          }}
          priority
        />
      </div>
      <div className=" absolute top-0 z-10  dark:hidden inline-block ">
        <Image
          src={timelimebgwt}
          alt="timeline white background"
          style={{
            maxWidth: "none",
            objectFit: "cover",
            objectPosition: "bottom",
            width: 2000,
            height: "auto",
          }}
          priority
        />
      </div>
      <div className=" container mx-auto max-w-6xl relative z-30 lg:px-0 px-10 ">
        <h1>Education</h1>

        <div className=" px-28 mt-20">
          <div className=" flex  items-center gap-20">
            <aside className=" w-2/3">
              <button className="  mb-10  bg-darkary lg:text-2xl text-xl w-56 font-medium text-primary dark:text-secondary border-b-2  dark:border-secondary border-wtsecondary rounded-none  border-l-2 border-r-2 border-t-2 rounded-tl-[2.3rem]  lg:p-5 p-3 rounded-br-[2rem] ">
                About Me
              </button>
              <div className=" bg-darkary  border-2 border-wtsecondary  dark:border-secondary py-[30px] px-[50px] rounded-3xl  shadow-5xl dark:shadow-3xl cursor-pointer transition duration-500 ease-in-out">
                <h2 className=" font-Ubuntu text-2xl mb-5 text-secondary">
                  Hello!
                </h2>
                <p className=" text-primary font-normal text-xs mb-2">
                  My name is{" "}
                  <span className="text-secondary"> Phyo Thu Kha</span> and I
                  specialize in web developement that utilizes HTML, CSS, JS,
                  and <span className="text-secondary">REACT </span>
                  etc.
                </p>

                <p className=" text-primary font-normal text-xs mb-2">
                  I am a highly motivated individual and eternal optimist
                  dedicated to writing clear, concise, robust code that works.
                  Striving to never stop learning and improving.
                </p>
                <p className=" text-primary font-normal text-xs mb-2">
                  When I{"'"}m not coding, I am writing bolgs, reading, or
                  picking up some new hands-on art project like photography.
                </p>
                <p className=" text-primary font-normal text-xs mb-2">
                  I like to have my perspective and belief systems challenged so
                  that I see the world through new eyes.
                </p>
              </div>
            </aside>
            <div className=" w-1/3  self-stretch">
              <div className="  overflow-hidden w-full h-full bg-primary border-2 border-wtsecondary  dark:border-secondary rounded-xl   cursor-pointer transition duration-500 ease-in-out">
                <Image
                  // src={phyothukha}
                  src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amF2YSUyMGNvZGV8ZW58MHx8MHx8fDA%3D"
                  alt=""
                  width={700}
                  className=" mx-auto object-contain h-full "
                  height={800}
                />
              </div>
              {/* </aside> */}
            </div>
          </div>
        </div>

        {/* <div className="timelime-items pt-10 ">
          {timelineData.map((timeline) => (
            <div key={timeline.job} className=" timelime-item">
              <div className=" absolute lg:left-[49.5%] z-20 -left-[6px] top-[11px]">
                <span className="relative flex h-4 w-4  ">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wtsecondary dark:bg-secondary opacity-75 "></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-wtsecondary dark:bg-secondary"></span>
                </span>
              </div>
              <div className=" timeline-date">{timeline.year}</div>
              <div className=" timeline-content">
                <h3 className=" font-Ubuntu">{timeline.job}</h3>
                <p>{timeline.reason}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default EducationSection;

const timelineData = [
  {
    year: 2021,
    job: "University",
    reason:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste exercitationem numquam molestiae, eum earum odio?",
  },
  {
    year: 2022,
    job: "MMSIT",
    reason:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste exercitationem numquam molestiae, eum earum odio?",
  },
  {
    year: 2023,
    job: "Intern",
    reason:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste exercitationem numquam molestiae, eum earum odio?",
  },
  {
    year: 2024,
    job: "Xsphere",
    reason:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste exercitationem numquam molestiae, eum earum odio?",
  },
];
