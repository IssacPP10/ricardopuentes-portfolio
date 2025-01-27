import { techIcons } from "@/data/tech-icons";

export interface Tech {
  name: keyof typeof techIcons;
}

export const techStack: Tech[] = [
  { name: "C#" },
  { name: "Windows Forms" },
  { name: "ASP.NET Core" },
  { name: "ASP.NET MVC" },
  { name: "TypeScript" },
  { name: "JavaScript" },
  { name: "Python" },  
  { name: "Node.js" },
  { name: "Express" },
  { name: "React" },
  { name: "Vite" },
  { name: "Next.js" },
  { name: "Tailwind CSS" },
  { name: "Bootstrap" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "SQL Server" },
  { name: "PostgreSQL" },
  { name: "SQLite" },
  { name: "MongoDB" },
  { name: "Visual Studio" },
  { name: "Visual Studio Code" },
  { name: "Postman" },
  { name: "Thunder Client" },
  { name: "SSRS" },
  { name: "Vercel" },
  { name: "Render" },
  { name: "shadcn/ui" },
  { name: "Git" },
  { name: "GitHub" },    
];
