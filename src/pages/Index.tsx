import { Navbar } from "@/components/navbar";
import { JobStatusBadge } from "@/components/job-status-badge";
import { DownloadCVButton } from "@/components/download-cv-button";
import { SocialLinks } from "@/components/social-links";
import { ContactEmail } from "@/components/contact-email";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { ProjectsSection } from '@/components/sections/ProjectSection'
import { AboutMeSection } from '@/components/sections/AboutMeSection'
import {TechStackSection} from '@/components/sections/TechStackSection'

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-screen-lg px-4">
          <div className="flex flex-col items-center text-center">
            <img
              src="/profile/profile-dev.jpeg"
              alt="Profile"
              className="w-32 h-32 rounded-full mb-4 shadow-lg shadow-slate-500/50"
              width={150}
              height={150}
            />
            <h1 className="text-4xl font-bold mb-2">
              Ricardo Issac Puentes Palacios
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              I'm a .NET developer who loves building efficient and
              user-friendly applications.
            </p>
            <div className="flex gap-4">
              <JobStatusBadge />
              <DownloadCVButton />
            </div>
          </div>
        </div>
      </section>      

      {/* About Me, Certificates, Projects & TechStack Section */}
      <section>
        <div className="container mx-auto max-w-screen-lg px-8"> 
            <AboutMeSection />         
            <CertificatesSection />            
            <ProjectsSection />  
            <TechStackSection />              
        </div>
      </section>

      {/* Social Links & Contact Section */}
      <section className="py-10">
        <div className="container mx-auto max-w-screen-lg px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <SocialLinks />            
            <ContactEmail />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
