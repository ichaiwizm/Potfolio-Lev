import React from "react";
import type { ThemeId } from "../config/theme-definitions";

export type ThemeContextValue = {
  themeId: ThemeId;
  setThemeId: (id: ThemeId) => void;
  themes: Array<{
    id: ThemeId;
    label: string;
    description: string;
    category: "apaisant" | "energique" | "sophistique";
  }>;
};

export const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);

export function useTheme(): ThemeContextValue {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme doit être utilisé dans un ThemeProvider");
  }
  return context;
}

