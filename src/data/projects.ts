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
    title: "Artemisa: Madroños Platform",
    description: "A web platform showcasing the different species of Arbutus trees in Mexico. Designed for an IPN contest, this project focuses on usability and visual organization.",
    image: "/projects/madronos.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://issacpp10.github.io/landing-madronos-ipn/",
    codeUrl: "https://github.com/IssacPP10/landing-madronos-ipn",
  },
  {
    title: "Verb Nexus",
    description: "English Academy is an educational web app designed to help students learn and practice English verbs in a structured and effective way. The main feature of this app is its structure, which includes levels 1-4, cooking verbs, and other useful sections.",
    image: "/projects/verb-nexus.png",
    techStack: ["React", "Tailwind CSS", "Vite", "TypeScript", "shadcn/ui"],
    liveUrl: "https://verb-nexus.vercel.app/",
    codeUrl: "https://github.com/IssacPP10/verb-nexus",
  },
  {
    title: "Grading System ",
    description: "A highly efficient and user-friendly tool designed to help educators easily calculate, track, and manage student grades. The tool simplifies the grading process by automatically generating final results in Excel, making it easy to store, analyze, and share student performance data.",
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