import { Star } from "lucide-react";
import { LargeProjectCard } from '@/components/large-project-card'
import { SmallProjectCard } from "@/components/small-project-card";
import { projects } from "@/data/projects";

export function ProjectsSection() {  
  const featuredProjects = projects.slice(0, 4); // Tarjetas grandes
  const regularProjects = projects.slice(4);    // Tarjetas pequeñas

  return (
    <section className="container py-10">
      <h2 className="section-title">
        <Star className="w-6 h-6" style={{ color: "#818CF8" }} />
        <span style={{ color: "#818CF8" }}>Projects</span>
      </h2>
      
      {/* Featured Projects - Large Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {featuredProjects.map((project) => (
          <LargeProjectCard 
            key={project.title} 
            {...project}             
          />
        ))}
      </div>
      
      {/* Regular Projects - Small Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        {regularProjects.map((project) => (
          <SmallProjectCard 
            key={project.title} 
            {...project}
          />
        ))}
      </div>
    </section>
  );
}
