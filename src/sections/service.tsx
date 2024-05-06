import Image from "next/image";
import React from "react";
import Git from "@/assets/brand-github.svg";

const Service = () => {
  return (
    <section id="services" className="  bg-[#0e0e0e] bg-opacity-90 py-5">
      <div className=" container max-w-6xl mx-auto">
        <h1>Services</h1>
        <div className=" grid grid-cols-4 gap-10">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((dd, idx) => (
            <div
              key={idx}
              className=" border-4 flex flex-col shadow-md shadow-secondary h-56 justify-end gap-3 hover:bg-secondary hover:text-black transition duration-300 ease-in cursor-pointer  rounded-xl p-3 border-secondary "
            >
              {/* <Image src={Git} alt="" width={100} height={100} /> */}
              <div className=" mx-auto ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </div>
              <h3 className=" text-lg text-start  font-bold font-Roboto ">
                Git Version control
              </h3>
              <p className="text-sm text-start font-medium font-Roboto">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Numquam, deserunt?
              </p>
            </div>
            // <div key={dd} className="borderBox  relative">
            //   <div className=" absolute z-20 left-0 top-0 bottom-0 right-0 ">
            //     <h2>Hello world</h2>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
