import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { projects } from "@/data/project";
import { title } from "process";

const ProjectSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const projectRefs = useRef<HTMLDivElement[] | null>([]);

  useEffect(() => {
    // Fade in section background
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power3.out" },
    );

    // Animate the title
    gsap.fromTo(
      titleRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" },
    );

    // Animate the description
    gsap.fromTo(
      descriptionRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.8, ease: "power3.out" },
    );

    // Animate each project card
    projectRefs.current?.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 1 + index * 0.3,
          ease: "power3.out",
        },
      );
    });
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-[#00000] bg-opacity-90 py-5"
    >
      <div className="container mx-auto max-w-5xl lg:px-0 px-10">
        <h1 ref={titleRef} className="text-center text-3xl font-bold">
          Projects
        </h1>
        {/* <p
          ref={descriptionRef}
          className="text-center font-Fira text-gray-400 mt-5"
        >
          These projects are my first time learning web development.
        </p> */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 my-5">
          {projects.map(({ id, name, description, image }, index) => (
            <div key={id} className="rounded-md relative z-10 overflow-hidden">
              {/* <div className="w-full h-96 relative">
                <Image
                  src={image}
                  alt={`Project ${id + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="transition duration-1000 absolute z-10 cursor-pointer hover:scale-110"
                />
              </div>
              <div className=" relative z-30 bg">
                <h4 className="font-semibold text-lg z-30  font-Inter dark:text-gray-500">
                  {name}
                </h4>
                <p className="font-medium font-Inter z-30 text-sm dark:text-gray-300 tracking-wide mt-2">
                  {description}
                </p> */}
              {/* </div> */}

              <div className=" w-[300px] h-[300px] group ">
                <Image src={image} alt={`Project ${id + 1}`} fill />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
