import { techIcons } from "@/data/tech-icons";

export interface Project {
  title: string;
  description: string;
  image: string;
  techStack: (keyof typeof techIcons)[];
  liveUrl?: string;
  codeUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Pokédex Web Application",
    description:
      "A sleek and interactive Pokédex application built for Pokémon enthusiasts. Features include a modern design, real-time search, and detailed Pokémon information. Perfect for exploring the Pokémon universe.",
    image: "/projects/pokedex.png",
    techStack: ["React", "Tailwind CSS", "Vite", "TypeScript"],
    liveUrl: "https://pokedex-beta-wheat.vercel.app/",
    codeUrl: "https://github.com/IssacPP10/pokedex",
  },
  {
    title: "Novel Verse",
    description: "A dynamic Japanese light novel library. It renders .md translation files by novel and chapter, featuring a responsive design for an optimal reading experience on any device.",
    image: "/projects/novel-verse.png",
    techStack: ["React", "Tailwind CSS", "Vite", "TypeScript"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/IssacPP10/manga-mystic-lounge",
  },
  {
    title: "Artemisa: Madroños Platform",
    description: "A web platform showcasing the different species of Arbutus trees in Mexico. Designed for an IPN contest, this project focuses on usability and visual organization.",
    image: "/projects/madronos.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://issacpp10.github.io/landing-madronos-ipn/",
    codeUrl: "https://github.com/IssacPP10/landing-madronos-ipn",
  },
  {
    title: "Grading System ",
    description: "An efficient and user-friendly tool to calculate and manage student grades, generating final results in Excel.",
    image: "/projects/grading-system.png",
    techStack: ["React", "Vite", "Tailwind CSS", "TypeScript", "shadcn/ui"],
    liveUrl: "https://grading-system-two-peach.vercel.app/",
    codeUrl: "https://github.com/IssacPP10/grading-system",
  },
  {
    title: "Secure Password Generator",
    description: "Quickly create strong and unique passwords with customizable options.",
    image: "/projects/project-1.png",
    techStack: ["React", "JavaScript", "HTML", "CSS"],
    liveUrl: "https://issacpp10.github.io/password-generator/",
    codeUrl: "https://github.com/IssacPP10/password-generator",
  },
  {
    title: "Novels API",
    description: "A RESTful API designed to manage novels and their chapters. It fetches data from a MongoDB database, allowing you to retrieve novel and chapter information easily.",
    image: "/projects/project-1.png",
    techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Render", "Thunder Client"],
    codeUrl: "https://github.com/IssacPP10/novels-api",
  }
];