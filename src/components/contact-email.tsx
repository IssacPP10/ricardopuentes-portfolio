import { Mail, Send, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export function ContactEmail() {
  const { toast } = useToast();
  const email = "issac.isc.isc@gmail.com";
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      toast({
        title: "Email copied!",
        description: "The email address has been copied to your clipboard.",
      });
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy email to clipboard",
        variant: "destructive",
      });
    }
  };

  const handleSendEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        Email <Mail className="text-[#818CF8]" />
      </h2>
      <div className="flex gap-2">
        <Input
          value={email}
          readOnly
          className="bg-muted"
        />
        <Button
          variant="outline"
          size="icon"
          onClick={handleCopyEmail}
          className="hover:bg-accent"
        >
          <Copy className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleSendEmail}
          className="hover:bg-accent"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}