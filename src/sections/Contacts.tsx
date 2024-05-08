import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#00000] bg-opacity-90 py-5">
      <div className=" container mx-auto max-w-6xl">
        <div className=" text-center">
          <h1>Contact</h1>
          {/* <div> */}
          <div className=" mx-auto text-center max-w-2xl text-sm   font-bold opacity-60 font-Inter">
            If you want to connect with me. You can connect with my email number
            or phone number Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Officia, expedita! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Corporis quaerat illum dolores a laboriosam earum,
            reiciendis necessitatibus inventore iusto soluta, exercitationem in
            harum! Nihil dolores iusto tenetur totam nemo optio? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Soluta, laborum!
          </div>

          <button className=" border-b-2 dark:border-secondary border-wtsecondary  border-l-2 border-r-2 border-t-2 rounded-sm rounded-tr-[1.5rem] mt-5 p-3 rounded-bl-[1.5rem] ">
            Send me a message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
