import { Check } from "lucide-react";
import type { ThemeId } from "@/theme";

type ThemeMenuItemProps = {
  id: ThemeId;
  label: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
};

export function ThemeMenuItem({ label, description, isActive, onClick }: ThemeMenuItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group relative w-full cursor-pointer rounded-md px-3 py-2.5 text-left
        transition-colors hover:bg-accent hover:text-accent-foreground
        ${isActive ? "bg-accent/60" : ""}
      `}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex-1">
          <div className="text-sm font-medium">{label}</div>
          <div className="text-xs text-muted-foreground">{description}</div>
        </div>
        {isActive && <Check className="size-4 shrink-0 text-primary" />}
      </div>
    </button>
  );
}

