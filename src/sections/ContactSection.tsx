import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className=" py-5">
      <div className=" container mx-auto lg:px-0 px-10 max-w-6xl">
        <div className=" text-center">
          <h1>Contact</h1>
          <div className=" mx-auto text-center max-w-2xl text-md font-Ubuntu mt-10   font-medium opacity-60 ">
            If you want to connect with me. You can connect with my email number
            or phone number Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Officia, expedita! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Corporis quaerat illum dolores a laboriosam earum,
            reiciendis necessitatibus inventore iusto soluta, exercitationem in
          </div>
          <button className=" mt-10 lg:text-2xl text-xl font-Poetsen font-medium text-wtsecondary dark:text-secondary border-b-2 rounded-lg dark:border-secondary border-wtsecondary  border-l-2 border-r-2 border-t-2 rounded-tr-[2.3rem]  lg:p-5 p-3 rounded-bl-[2rem] ">
            Send me a message
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
