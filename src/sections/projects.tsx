import Image from "next/image";
import React from "react";
import ecommerence from "@/assets/ecommerence-page-1.webp";
import bookauthor from "@/assets/Vite   React-page-1.webp";

const Project = () => {
  return (
    <section id="projects" className="  bg-[#00000] bg-opacity-90 py-5">
      <div className=" container mx-auto max-w-6xl ">
        <h1>Projects</h1>
        <p className=" text-center">
          This projects are my first time learning web devlopment did.
        </p>
        <div className=" grid grid-cols-2 gap-10 my-5  ">
          <div>
            <div className=" rounded-md overflow-hidden w-full h-96 relative ">
              <Image
                src={ecommerence}
                alt="Ecommerence Project"
                fill
                className=" transition duration-1000 cursor-pointer hover:scale-110"
              />
            </div>
            <h4 className=" font-semibold text-lg font-Inter dark:text-gray-500">
              Ecommerence Projects
            </h4>
            <p className=" font-medium font-Inter  text-sm dark:text-gray-300 tracking-wide mt-2">
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

export default Project;
