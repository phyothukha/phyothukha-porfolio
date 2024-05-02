import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className=" fixed top-0 py-5 backdrop-filter backdrop-blur-[10px] z-50 bg-[rgba(0,0,0,0.3)] left-0 w-full">
      <div className=" container max-w-6xl flex mx-auto justify-between ">
        <h1 className=" text-xl font-bold font-Poppins text-white hover:text-secondary cursor-pointer transition duration-150 ease hover:scale-95 ">
          Phyo{" "}
          <span
            className=" text-secondary"
            style={{
              textShadow: "0 0 25px var(--main-color)",
            }}
          >
            Thu Kha
          </span>
        </h1>
        <nav>
          <ul className=" flex gap-8 items-center w-full font-medium">
            <li>
              <Link
                href={"#"}
                className=" text-white transition duration-100 nav-ani "
              >
                Me
              </Link>
            </li>
            <li>
              <Link
                href={"#services"}
                className=" text-white transition duration-100 nav-ani "
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className=" text-white transition duration-100 nav-ani "
                href={"#education"}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                className=" text-white transition duration-100 nav-ani "
                href={"#projects"}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className=" text-white transition duration-100 nav-ani "
                href={"#contact"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
