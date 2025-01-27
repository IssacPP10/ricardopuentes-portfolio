import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/issac-puentes/",
    color: "text-[#0A66C2]"
  },
  {
    name: "Github",
    icon: Github,
    url: "https://github.com/IssacPP10",
    color: "text-gray-900 dark:text-white"
  },
];

export function SocialLinks() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        Socials <span className="text-[#818CF8]">@</span>
      </h2>
      <div className="flex flex-wrap gap-3">
        {socialLinks.map((social) => (
          <Button
            key={social.name}
            variant="outline"
            size="sm"
            className="hover:bg-accent"
            asChild
          >
            <a 
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <social.icon className={`w-4 h-4 ${social.color}`} />
              {social.name}
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
}