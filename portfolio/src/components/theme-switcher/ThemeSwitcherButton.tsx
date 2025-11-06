import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

type ThemeSwitcherButtonProps = {
  onClick: () => void;
  isOpen: boolean;
};

export function ThemeSwitcherButton({ onClick, isOpen }: ThemeSwitcherButtonProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={onClick}
      aria-label="Changer le thème"
      aria-expanded={isOpen}
      className="transition-transform hover:scale-105"
    >
      <Palette className={isOpen ? "rotate-12 transition-transform" : "transition-transform"} />
    </Button>
  );
}

