import { Code, Code2Icon, Heart } from "lucide-react";
import React from "react";

export function AboutMeSection() {
  return (
    <section className="container py-5">
      <h2 className="section-title flex items-center gap-2 !mb-4">
        <Heart className="w-6 h-6" style={{ color: "#818CF8" }} />
        <span style={{ color: "#818CF8" }}>About Me</span>
      </h2>
      <div className="text-lg text-muted-foreground">
        <Code className="w-5 h-5 text-[#818CF8]" />
        <p className="ml-4">
          I am a software developer with <strong>1.6 years</strong> of
          experience specializing in .NET technologies like ASP.NET MVC, C#, and
          SQL Server. I also have hands-on experience with desktop applications
          using Windows Forms and am currently learning <strong>React</strong>,{" "}
          <strong>TypeScript</strong>, and <strong>Next.js</strong> to expand my
          skills.
        </p>
        <Code2Icon className="w-5 h-5 text-[#818CF8]" />
      </div>
      <p className="text-lg text-muted-foreground my-2">
        ✨ I enjoy creating efficient solutions and collaborating with teams to
        deliver <strong>impactful applications.</strong>
      </p>
    </section>
  );
}
