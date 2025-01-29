import { Award, ExternalLink, Calendar, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Certificate } from "@/data/certificates";

interface CertificateCardProps extends Certificate {
  className?: string;
}

const CertificateCard = ({
  name,
  issuer,
  date,
  credentials,
  className,
}: CertificateCardProps) => {
  return (
    <div
      className={cn(
        "group relative w-[320px] md:w-[420px] p-6 rounded-xl border border-border shadow-sm",
        "transition-all duration-300 hover:shadow-lg hover:border-[#818CF8]",
        "flex flex-col gap-2",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <Award className="w-6 h-6 text-[#818CF8]" />
        <h3 className="font-semibold text-lg line-clamp-1">{name}</h3>
      </div>

      <div className="flex flex-row gap-4 md:gap-14">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Globe className="w-4 h-4" />
          {issuer}
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">{date}</span>
        </div>
      </div>

      <a
        href={credentials}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-[#818CF8] hover:text-[#4a57ca] transition-colors mt-auto"
      >
        Show Credentials
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
};

export default CertificateCard;
