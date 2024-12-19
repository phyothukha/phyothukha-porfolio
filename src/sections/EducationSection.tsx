import Image from "next/image";
import React from "react";
import timelimebg from "@/assets/timelimebg.svg";
import timelimebgwt from "@/assets/timelimebg-wt.svg";

const EducationSection = () => {
  return (
    <section
      id="education"
      className="  dark:bg-[#292f36] bg-[#eeeeee] bg-opacity-90 py-5 relative overflow-hidden"
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

        {/* <div className=" w-full ">
          <button className=" mt-10 lg:text-2xl text-xl font-Poetsen font-medium text-wtsecondary dark:text-secondary border-b-2  dark:border-secondary border-wtsecondary rounded-none  border-l-2 border-r-2 border-t-2 rounded-tl-[2.3rem]  lg:p-5 p-3 rounded-br-[2rem] ">
            About Me
          </button>
        </div> */}

        <div className="timelime-items pt-10 ">
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
        </div>
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
