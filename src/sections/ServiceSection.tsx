import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { services, techstacks } from "@/data/services";
import useMediaQuery from "@/hooks/useMediaQuery";

const ServiceSection = () => {
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const lgScreen = useMediaQuery("(max-width:1024px) and (min-width:768px)");
  const mdScreen = useMediaQuery("(max-width:768px) and (min-width:640px)");
  const smScreen = useMediaQuery("(max-width:640px)");

  const columns = smScreen ? 3 : mdScreen ? 4 : lgScreen ? 5 : 8;

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
    <section
      id="services"
      className="dark:bg-[#292f36] bg-[#eeeeee] py-20 h-auto"
    >
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
      <div className=" mt-20">
        <Swiper
          spaceBetween={0}
          slidesPerView={columns}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={2000}
          loop
          freeMode
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-24 before:absolute before:-left-[20px] before:z-10 before:h-full before:w-5 "
        >
          {techstacks.map(({ logo, name, id }) => (
            <SwiperSlide
              key={id}
              className="relative p-5 group overflow-hidden rounded-xl cursor-pointer "
            >
              <div className=" flex gap-1 h-full items-center">
                {logo}
                <p className=" font-normal text-sm">{name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServiceSection;
