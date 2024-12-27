import Image from "next/image";
import movieWebsite from "../../public/project/project-1.png";
import bookAuthor from "../../public/project/project-3.png";
import appleclone from "../../public/project/project2.png";
import snakeGame from "../../public/project/snake.png";

export const projects = [
  {
    id: 1,
    name: "movie project design",
    description:
      "A dynamic movie exploration platform developed with React.js , featuring detailed movie and cast information. Users can easily search for movies by title or discover cast members by name, enhancing their movie-watching experience through comprehensive and intuitive search capabilities.",
    image: (
      <Image
        src={movieWebsite}
        sizes="100vw"
        fill
        alt="Movie Website"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    liveUrl: "https://phyothukha-movie.vercel.app",
    tags: ["react", "mantine"],
  },
  {
    id: 2,
    name: "book author",
    description:
      "A feature-rich movie exploration platform built with React.js, utilizing React Query for data fetching, Zustand for state management, and Mantine components for a polished UI. The platform allows users to search for movies and cast members effortlessly, with detailed views on both A feature-rich movie exploration platform built with React.js, utilizing React Query for data fetching, Zustand for state management, and Mantine components for a polished UI. The platform allows users to search for movies and cast members effortlessly, with detailed views on both",
    image: (
      <Image
        src={bookAuthor}
        sizes="100vw"
        fill
        alt="Book Author"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    tags: ["react", "tailwind", "javascript"],
  },
  {
    id: 3,
    name: "Apple clone ",
    description:
      "A sleek, Apple-inspired web application developed with Next.js and Tailwind CSS, featuring responsive design and smooth animations using Framer Motion. This project leverages modern web technologies to deliver a visually appealing and dynamic user experience",
    image: (
      <Image
        src={appleclone}
        sizes="100vw"
        fill
        alt="Apple Clone"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    tags: ["react", "tailwind", "typescript", "shadcn-ui", "framer-motion"],
  },
  {
    id: 3,
    name: "Snake Game",
    description:
      "Developed a classic Snake game in JavaScript as a hobby project, featuring smooth gameplay, increasing difficulty, and a simple, user-friendly interface.",
    image: (
      <Image
        src={snakeGame}
        sizes="100vw"
        fill
        alt="Snake Game"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    tags: ["html", "css", "javascript"],
  },
];
