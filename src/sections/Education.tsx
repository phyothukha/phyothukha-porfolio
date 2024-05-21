import Image from "next/image";
import React from "react";
import timlimebg from "@/assets/timelimebg.svg";
import timelimebgwt from "@/assets/timelimebg-wt.svg";

const Education = () => {
  return (
    <section
      id="education"
      className="  dark:bg-[#171716] bg-[#efecec] bg-opacity-90 py-5 relative overflow-hidden"
    >
      <div className=" absolute top-0 z-10  dark:inline-block hidden ">
        <Image
          src={timlimebg}
          alt="timeline background"
          style={{
            maxWidth: "none",
          }}
          width={2000}
          height={300}
        />
      </div>
      <div className=" absolute top-0 z-10  dark:hidden inline-block ">
        <Image
          src={timelimebgwt}
          alt="timeline white  background"
          style={{
            maxWidth: "none",
          }}
          width={2000}
          height={300}
        />
      </div>
      <div className=" container mx-auto max-w-6xl relative z-30 lg:px-0 px-10 ">
        <h1>Education</h1>
        <div className="timelime-items pt-10 ">
          {timelineData.map((timeline, idx) => (
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

export default Education;

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
