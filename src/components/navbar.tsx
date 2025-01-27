import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/theme-toggle";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-[1400px] flex items-center justify-between h-16 px-4">
        <div
          className={`flex items-center gap-3 transition-opacity duration-300 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          <Avatar className="w-8 h-8">
            <AvatarImage
              src="/profile/profile-dev.jpeg"
              alt="Profile"
              width={150}
              height={150}
            />
            <AvatarFallback>RIPP</AvatarFallback>
          </Avatar>
          <span className="font-medium">Ricardo Issac Puentes Palacios</span>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
