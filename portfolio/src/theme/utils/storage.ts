import { sanitizeThemeId, getDefaultTheme } from "../config/theme-registry";
import type { ThemeId } from "../config/theme-definitions";

const STORAGE_KEY = "portfolio-theme-id";

export function loadThemeFromStorage(): ThemeId {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const validated = sanitizeThemeId(stored);
    return validated ?? getDefaultTheme();
  } catch {
    return getDefaultTheme();
  }
}

export function saveThemeToStorage(themeId: ThemeId): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, themeId);
  } catch (error) {
    console.warn("Impossible de sauvegarder le thème:", error);
  }
}

