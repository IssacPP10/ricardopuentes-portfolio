import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function DownloadCVButton() {
  const handleDownloadCV = () => {
    const tempUrl = "/Curriculum_Issac_Puentes_Español_v1.pdf";
    const link = document.createElement("a");
    link.href = tempUrl;
    link.download = "Curriculum_Issac_Puentes_Español_v1.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="hover:bg-accent transition-colors"
      onClick={handleDownloadCV}
    >
      <Download className="w-4 h-4 mr-2" />
      Download CV
    </Button>
  );
}