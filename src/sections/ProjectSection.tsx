import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { projects } from "@/data/project";
import ProjectCard from "@/components/ProjectCard";

const ProjectSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const projectRefs = useRef<HTMLDivElement[] | null>([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power3.out" },
    );
    gsap.fromTo(
      titleRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" },
    );
    gsap.fromTo(
      descriptionRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.8, ease: "power3.out" },
    );
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
      className="bg-[#00000] bg-opacity-90 py-20"
    >
      <div className="container mx-auto max-w-5xl lg:px-0 px-10">
        <h1 ref={titleRef} className="text-center text-3xl font-bold">
          Projects
        </h1>

        <div className=" flex flex-wrap">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} index={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
