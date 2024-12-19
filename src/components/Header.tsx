"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const navlinks = [
  {
    url: "#me",
    label: "Me",
    icons: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-user"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      </svg>
    ),
  },
  {
    url: "#education",
    label: "Education",
    icons: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-school"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
        <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
      </svg>
    ),
  },
  {
    url: "#services",
    label: "Services",
    icons: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-settings"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      </svg>
    ),
  },
  {
    url: "#projects",
    label: "Projects",
    icons: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
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
    url: "#contact",
    label: "Contact",
    icons: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
      </svg>
    ),
  },
];

const Header = () => {
  const { setTheme, theme } = useTheme();
  const themeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const themeBtn = themeBtnRef.current;
    if (themeBtn) {
      themeBtn.ariaLabel = theme ?? "light";
    }
  }, [theme]);
  return (
    <>
      <header className=" fixed top-0 py-5 backdrop-filter backdrop-blur-[10px] z-50 dark:bg-[rgb(41,47,54,0.3)] bg-[rgba(255,255,255,0.2)] left-0 w-full">
        <div className=" container max-w-6xl flex mx-auto justify-between px-10 lg:px-0 ">
          <h1 className=" text-xl font-bold font-Poetsen dark:text-white text-black dark:hover:text-secondary hover:text-wtsecondary cursor-pointer transition duration-150 ease hover:scale-95 ">
            Phyo{" "}
            <span
              className=" dark:text-secondary  text-wtsecondary font-Poetsen"
              style={{
                textShadow: "0 0 2px var(--main-color)",
              }}
            >
              Thu Kha
            </span>
          </h1>
          <nav>
            <ul className=" flex gap-8 items-center w-full font-medium">
              {navlinks.map((nav) => (
                <li key={nav.url} className=" md:inline-block hidden">
                  <Link
                    href={nav.url}
                    className=" dark:text-white text-black transition duration-100 nav-ani font-Poetsen font-light "
                  >
                    {nav.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  title="Toggles light & dark theme"
                  ref={themeBtnRef}
                  aria-live="polite"
                  className="w-8 h-8 ml-1 rounded-lg flex justify-center items-center link-outline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--main-color)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-sun dark:inline-block hidden"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                    <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--second-main-color)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-moon dark:hidden inline-block"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className=" backdrop-filter backdrop-blur-[10px] md:hidden flex justify-around rounded-xl overflow-hidden dark:bg-[rgba(0,0,0,0.3)] left-[50%] right-[50%] transform translate-x-[-50%] fixed bottom-5  h-20  z-50 w-[90%]">
        {navlinks.map((nav) => (
          <Link
            key={nav.url}
            href={nav.url}
            className={`dark:text-white dark:hover:text-secondary  hover:text-wtsecondary transition duration-300 text-black text-xs    p-3 max-w-xl text-center flex flex-col items-center justify-center `}
          >
            <p className=" text-center">{nav.icons}</p>
            <p>{nav.label}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Header;
