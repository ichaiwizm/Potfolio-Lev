/**
 * Compétences techniques de Levana Wizman
 */

export type Skill = {
  name: string;
  level: number; // 0-100
  category: "frontend" | "backend" | "database" | "tools" | "other";
  icon?: string;
};

export const SKILLS: Skill[] = [
  // Frontend
  { name: "React", level: 85, category: "frontend", icon: "⚛️" },
  { name: "JavaScript", level: 85, category: "frontend", icon: "🟨" },
  { name: "TypeScript", level: 75, category: "frontend", icon: "🔷" },
  { name: "HTML/CSS", level: 90, category: "frontend", icon: "🎨" },
  { name: "Tailwind CSS", level: 80, category: "frontend", icon: "💨" },

  // Backend
  { name: "Node.js", level: 75, category: "backend", icon: "🟢" },
  { name: "PHP", level: 70, category: "backend", icon: "🐘" },
  { name: "Python", level: 75, category: "backend", icon: "🐍" },
  { name: "Java", level: 65, category: "backend", icon: "☕" },

  // Database
  { name: "MySQL", level: 75, category: "database", icon: "🗄️" },
  { name: "SQL", level: 80, category: "database", icon: "📊" },

  // Tools
  { name: "Git", level: 85, category: "tools", icon: "🔀" },
  { name: "GitHub", level: 85, category: "tools", icon: "🐙" },
  { name: "VS Code", level: 90, category: "tools", icon: "💻" },
  { name: "Linux/SSH", level: 70, category: "tools", icon: "🐧" },
];

export const SKILL_CATEGORIES = {
  frontend: {
    label: "Frontend",
    color: "#8b5cf6",
    gradient: "linear-gradient(90deg, #8b5cf6, #a78bfa)",
  },
  backend: {
    label: "Backend",
    color: "#6366f1",
    gradient: "linear-gradient(90deg, #6366f1, #818cf8)",
  },
  database: {
    label: "Bases de données",
    color: "#ec4899",
    gradient: "linear-gradient(90deg, #ec4899, #f472b6)",
  },
  tools: {
    label: "Outils & DevOps",
    color: "#10b981",
    gradient: "linear-gradient(90deg, #10b981, #34d399)",
  },
  other: {
    label: "Autres",
    color: "#f59e0b",
    gradient: "linear-gradient(90deg, #f59e0b, #fbbf24)",
  },
} as const;
