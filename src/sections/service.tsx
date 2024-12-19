import React from "react";

const Service = () => {
  return (
    <section id="services" className="  dark:bg-[#0e0e0e] bg-[#eeeeee] py-5">
      <div className=" container max-w-6xl mx-auto lg:px-0 px-10">
        <h1>Services</h1>
        <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 my-5">
          {services.map(({ id, title, description, icons }, idx) => (
            <div
              key={idx}
              className=" border-4 flex flex-col h-56 justify-evenly gap-3 hover:bg-wtsecondary dark:hover:bg-secondary hover:text-black transition duration-300 ease-in cursor-pointer  rounded-xl p-3 dark:border-secondary  border-wtsecondary"
            >
              <div className=" mx-auto ">{icons}</div>
              <h3 className=" text-lg text-start font-bold font-Fira ">
                {title}
              </h3>
              <p className="text-sm text-start font-medium font-Ubuntu opacity-70">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;

const services = [
  {
    id: 1,
    title: "Git Version control",
    description:
      "Git version control service for efficient collaboration and code management.",
    icons: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
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
        width="50"
        height="50"
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
        width="50"
        height="50"
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
        width="50"
        height="50"
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
