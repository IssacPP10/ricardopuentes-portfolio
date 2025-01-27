import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { techIcons } from "@/data/tech-icons";

interface LargeProjectCardProps {
  title: string;
  description: string;
  image?: string;
  techStack: (keyof typeof techIcons)[];
  liveUrl?: string;
  codeUrl?: string;
}

export function LargeProjectCard({
  title,
  description,
  image,
  techStack,
  liveUrl,
  codeUrl,
}: LargeProjectCardProps) {
  return (
    <div className="group project-card col-span-2 md:col-span-1 p-4 rounded-md border shadow-sm hover:shadow-md transition-shadow">
      {image && (
        <div className="overflow-hidden rounded-md mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      )}

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4 text-sm">{description}</p>

      <div className="flex flex-wrap gap-3 mb-4">
        {techStack.map((tech) => {
          const Icon = techIcons[tech];
          return (
            <Tooltip key={tech}>
              <TooltipTrigger>
                <span className="flex items-center justify-center w-8 h-8 bg-secondary text-secondary-foreground rounded-full p-1">
                  <Icon className="w-4 h-4" />
                </span>
              </TooltipTrigger>
              <TooltipContent side="top" className="bg-gray-800 text-white">
                <p>{tech}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>

      <div className="flex gap-2 mt-4">
        {liveUrl && (
          <Button asChild variant="outline" size="sm" className="hover:bg-[#818CF8] hover:text-white transition-colors">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              Live
            </a>
          </Button>
        )}
        {codeUrl && (
          <Button asChild variant="outline" size="sm" className="hover:bg-[#818CF8] hover:text-white transition-colors">
            <a href={codeUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              Code
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}
