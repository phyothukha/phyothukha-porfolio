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
        <Image src={timlimebg} alt="" width={2000} height={300} />
      </div>
      <div className=" absolute top-0 z-10  dark:hidden inline-block ">
        <Image src={timelimebgwt} alt="" width={2000} height={300} />
      </div>
      <div className=" container mx-auto max-w-6xl relative z-30 ">
        <h1>Education</h1>
        <div className="timelime-items pt-10 ">
          <div className=" timelime-item">
            <div className=" timeline-dots"></div>
            <div className=" timeline-date">2021</div>
            <div className=" timeline-content">
              <h3>University</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                exercitationem numquam molestiae, eum earum odio? Architecto
              </p>
            </div>
          </div>
          <div className=" timelime-item">
            <div className=" timeline-dots"></div>
            <div className=" timeline-date">2022</div>
            <div className=" timeline-content">
              <h3>MMSIT</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                exercitationem numquam molestiae, eum earum odio?
              </p>
            </div>
          </div>
          <div className=" timelime-item">
            <div className=" timeline-dots"></div>
            <div className=" timeline-date">2023</div>
            <div className=" timeline-content">
              <h3>Intern</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                exercitationem numquam molestiae, eum earum odio?
              </p>
            </div>
          </div>
          <div className=" timelime-item">
            <div className=" timeline-dots"></div>
            <div className=" timeline-date">2024</div>
            <div className=" timeline-content">
              <h3>Job</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                exercitationem numquam molestiae, eum earum odio?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
