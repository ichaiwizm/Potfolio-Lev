export type ThemeId =
  | "lumiere"
  | "nuit"
  | "foret-emeraude"
  | "ocean-profond"
  | "crepuscule-dore"
  | "lavande-zen"
  | "feu-dragon";

export type ThemeDef = {
  id: ThemeId;
  label: string;
  description: string;
  className: string;
  isDark: boolean;
  category: "apaisant" | "energique" | "sophistique";
};

export const THEME_DEFINITIONS: Record<ThemeId, ThemeDef> = {
  "lumiere": {
    id: "lumiere",
    label: "Lumière",
    description: "Clarté et simplicité",
    className: "theme-lumiere",
    isDark: false,
    category: "apaisant",
  },
  "nuit": {
    id: "nuit",
    label: "Nuit Étoilée",
    description: "Élégance nocturne",
    className: "theme-nuit",
    isDark: true,
    category: "sophistique",
  },
  "foret-emeraude": {
    id: "foret-emeraude",
    label: "Forêt Émeraude",
    description: "Nature et sérénité",
    className: "theme-foret-emeraude",
    isDark: true,
    category: "apaisant",
  },
  "ocean-profond": {
    id: "ocean-profond",
    label: "Océan Profond",
    description: "Calme et profondeur",
    className: "theme-ocean-profond",
    isDark: false,
    category: "apaisant",
  },
  "crepuscule-dore": {
    id: "crepuscule-dore",
    label: "Crépuscule Doré",
    description: "Chaleur et harmonie",
    className: "theme-crepuscule-dore",
    isDark: false,
    category: "sophistique",
  },
  "lavande-zen": {
    id: "lavande-zen",
    label: "Lavande Zen",
    description: "Douceur et méditation",
    className: "theme-lavande-zen",
    isDark: false,
    category: "apaisant",
  },
  "feu-dragon": {
    id: "feu-dragon",
    label: "Feu de Dragon",
    description: "Puissance et intensité",
    className: "theme-feu-dragon",
    isDark: true,
    category: "energique",
  },
};

