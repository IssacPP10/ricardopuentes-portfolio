import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { techIcons } from "@/data/tech-icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface SmallProjectCardProps {
  title: string;
  description: string;
  techStack: (keyof typeof techIcons)[];
  liveUrl?: string;
  codeUrl?: string;
}

export function SmallProjectCard({
  title,
  description,
  techStack,
  liveUrl,
  codeUrl,
}: SmallProjectCardProps) {
  return (
    <div className="group project-card col-span-2 sm:col-span-1 p-4 rounded-md border shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4 text-sm">{description}</p>

      <div className="flex flex-wrap gap-3 mb-4">
        {techStack.map((tech) => {
          const Icon = techIcons[tech];
          return (           
              <Tooltip key={tech}>
                <TooltipTrigger asChild>
                  <span className="flex items-center justify-center w-8 h-8 bg-secondary text-secondary-foreground rounded-full p-1">
                    <Icon className="w-4 h-4" />
                  </span>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="bg-gray-800 text-white"
                >
                  <p>{tech}</p>
                </TooltipContent>
              </Tooltip>            
          );
        })}
      </div>

      <div className="flex gap-2">
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
