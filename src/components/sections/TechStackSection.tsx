import React from "react";
import { TechCard } from "@/components/tech-stack-cards";
import { techStack } from "@/data/tech-stack";
import { FileCode2 } from "lucide-react";

export function TechStackSection() {
  return (
    <section className="container py-5">
      <h2 className="section-title flex items-center gap-2 !mb-4">
        <FileCode2 className="w-6 h-6" style={{ color: "#818CF8" }} />
        <span style={{ color: "#818CF8" }}>My Tech Stack</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {techStack.map(({ name }) => (
          <TechCard key={name} tech={name} />
        ))}
      </div>
    </section>
  );
}
