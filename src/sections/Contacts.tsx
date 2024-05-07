import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#2f2f2e] bg-opacity-90 py-5">
      <div className=" container mx-auto max-w-6xl">
        <div className=" text-center">
          <h1>Contact</h1>
          {/* <div> */}
          <div className=" mx-auto text-center max-w-2xl text-lg  font-bold opacity-60 font-Poppins">
            If you want to connect with me. You can connect with my email number
            or phone number Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Officia, expedita! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Corporis quaerat illum dolores a laboriosam earum,
            reiciendis necessitatibus inventore iusto soluta, exercitationem in
            harum! Nihil dolores iusto tenetur totam nemo optio? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Soluta, laborum!
          </div>
          <button className=" btn bg-secondary  my-5 shadow-3xl">
            Contact me
          </button>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;