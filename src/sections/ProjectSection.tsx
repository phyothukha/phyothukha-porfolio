import Image from "next/image";
import React from "react";
import ecommerence from "@/assets/ecommerence.webp";
import bookauthor from "@/assets/bookauthor.webp";

const ProjectSection = () => {
  return (
    <section id="projects" className="  bg-[#00000] bg-opacity-90 py-5">
      <div className=" container mx-auto max-w-6xl lg:px-0 px-10 ">
        <h1>Projects</h1>
        <p className=" text-center font-Fira text-gray-400 mt-5">
          This projects are my first time learning web devlopment did.
        </p>
        <div className=" grid md:grid-cols-2 grid-cols-1  gap-10 my-5  ">
          <div>
            <div className=" rounded-md overflow-hidden w-full h-96 relative ">
              <Image
                src={ecommerence}
                alt="Ecommerence Project"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className=" transition duration-1000 cursor-pointer hover:scale-110"
              />
            </div>
            <h4 className=" font-semibold text-lg font-Inter dark:text-gray-500">
              Ecommerence Projects
            </h4>
            <p className=" font-medium font-Inter  text-sm dark:text-gray-300  tracking-wide mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur reiciendis, voluptatum debitis tenetur tempore ipsam
              architecto soluta porro veniam aspernatur!
            </p>
          </div>
          <div>
            <div className=" rounded-md overflow-hidden w-full h-96 relative ">
              <Image
                src={bookauthor}
                alt="Ecommerence Project"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className=" transition duration-1000 cursor-pointer hover:scale-110"
              />
            </div>
            <h4 className=" font-semibold text-lg font-Inter dark:text-gray-500">
              Book Author Projects
            </h4>
            <p className=" font-medium font-Inter  text-sm dark:text-gray-300 tracking-wide mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur reiciendis, voluptatum debitis tenetur tempore ipsam
              architecto soluta porro veniam aspernatur!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
