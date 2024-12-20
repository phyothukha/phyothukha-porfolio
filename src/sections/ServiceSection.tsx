import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ServiceSection = () => {
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      gsap.set(card, { scale: 1 });
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.1,
          duration: 0.3,
          delay: 3,
          ease: "power1.out",
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: "power1.out",
        });
      });
    });
  }, []);

  return (
    <section id="services" className="dark:bg-[#292f36] bg-[#eeeeee] py-5">
      <div className="container max-w-6xl mx-auto lg:px-0 px-10">
        <h1>Services</h1>
        <div className="grid mt-20 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 my-5">
          {services.map(({ id, title, description, icons }, idx) => (
            <div
              key={id}
              ref={(e) => (cardRefs.current[idx] = e as HTMLDivElement)}
              className="relative p-5 group overflow-hidden rounded-xl cursor-pointer "
              style={{
                boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
              }}
            >
              <div className=" w-10 h-10 bg-wtsecondary dark:bg-secondary rounded-bl-full group-hover:rounded z-0 absolute group-hover:top-0 group-hover:right-0  -right-2 -top-2  group-hover:bottom-0 group-hover:w-full group-hover:h-full transition-all duration-500 ease-in-out" />
              <div className="mx-auto mb-10 relative transform z-20 group-hover:scale-110 group-hover:text-primary dark:group-hover:text-darkary group-hover:delay-300 ease-in-out duration-300 ">
                {icons}
              </div>

              <h3 className="text-lg  z-20 mb-3 relative text-start font-bold font-Fira group-hover:text-primary dark:group-hover:text-darkary">
                {title}
              </h3>

              <p className="text-sm z-20 dark:group-hover:text-darkary group-hover:text-primary transition-opacity delay-700 ease-in-out font-normal relative text-start  font-Ubuntu opacity-70  duration-300  group-hover:opacity-100">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* <div className=" my-20">Hello world</div> */}
    </section>
  );
};

export default ServiceSection;

const services = [
  {
    id: 1,
    title: "Git Version control",
    description:
      "Git version control service for efficient collaboration and code management.",
    icons: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Frontend Development",
    description:
      "Frontend development with expertise in creating responsive and user-friendly interfaces.",
    icons: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-code"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 8l-4 4l4 4" />
        <path d="M17 8l4 4l-4 4" />
        <path d="M14 4l-4 16" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Backend Development",
    description:
      "Backend development with expertise in building reliable and scalable services.",
    icons: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-server"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
        <path d="M3 12m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
        <path d="M7 8l0 .01" />
        <path d="M7 16l0 .01" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Database Management",
    description:
      " Database management with expertise in designing, optimizing, and maintaining efficient systems.",
    icons: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-database"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
        <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
        <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
      </svg>
    ),
  },
];
