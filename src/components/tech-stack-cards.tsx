import React from "react";
import { techIcons } from "@/data/tech-icons";

interface TechCardProps {
  tech: keyof typeof techIcons;
}

export function TechCard({ tech }: TechCardProps) {
  const Icon = techIcons[tech];
  return (
    <div className="flex items-center w-full max-w-xs p-4 bg-secondary text-secondary-foreground rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full">
        <Icon className="w-6 h-6 text-[#818CF8]" />
      </div>
      <p className="ml-4 text-sm font-medium text-gray-700 dark:text-gray-200">
        {tech}
      </p>
    </div>
  );
}
