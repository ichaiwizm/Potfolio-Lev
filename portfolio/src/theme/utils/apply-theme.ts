import { getThemeById } from "../config/theme-registry";
import { ALL_THEME_CLASSNAMES } from "../config/theme-registry";
import type { ThemeId } from "../config/theme-definitions";

export function applyThemeToDocument(themeId: ThemeId): void {
  const theme = getThemeById(themeId);
  const root = document.documentElement;

  // Nettoyer les classes de thèmes précédentes
  ALL_THEME_CLASSNAMES.forEach((cls) => root.classList.remove(cls));
  root.classList.remove("dark");

  // Appliquer le nouveau thème
  root.classList.add(theme.className);

  // Ajouter .dark pour les thèmes sombres (compatibilité Tailwind)
  if (theme.isDark) {
    root.classList.add("dark");
  }

  // Attribut data pour débogage et CSS custom
  root.setAttribute("data-theme", theme.id);
  root.setAttribute("data-theme-category", theme.category);
}

