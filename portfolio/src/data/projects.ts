/**
 * Projets de Levana Wizman
 */

export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: "formation" | "personnel" | "alternance" | "academique";
  date: string;
  imageId?: string;
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  highlights?: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "portfolio-interactif",
    title: "Portfolio Interactif avec IA",
    description: "Portfolio personnel innovant avec interface conversationnelle alimentée par IA, permettant une navigation intuitive via commandes naturelles. Système de fenêtres flottantes interactives et thèmes dynamiques.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "OpenAI API"],
    category: "personnel",
    date: "2025-01",
    featured: true,
    imageId: "abstract-1",
    highlights: [
      "Interface conversationnelle avec IA",
      "Système de fenêtres interactives",
      "7 thèmes personnalisables",
      "Architecture modulaire et évolutive",
    ],
  },
  {
    id: "app-gestion-bcdemarches",
    title: "Application de Gestion Interne",
    description: "Développement d'une application web pour la gestion des processus administratifs de BCDemarches. Interface moderne avec dashboard, gestion de données et génération de rapports.",
    technologies: ["React", "Node.js", "Express", "MySQL", "Chart.js"],
    category: "alternance",
    date: "2024-2025",
    featured: true,
    highlights: [
      "Dashboard analytics en temps réel",
      "Système CRUD complet",
      "Authentification sécurisée",
      "Export de données (PDF, Excel)",
    ],
  },
  {
    id: "projet-slam-ecommerce",
    title: "Plateforme E-commerce",
    description: "Projet BTS : création complète d'une plateforme e-commerce avec gestion de catalogue, panier, commandes et administration. Backend robuste avec API RESTful.",
    technologies: ["PHP", "JavaScript", "MySQL", "Bootstrap", "jQuery"],
    category: "formation",
    date: "2024-11",
    featured: true,
    imageId: "city-1",
    highlights: [
      "Panier et gestion des commandes",
      "Panel d'administration complet",
      "API RESTful documentée",
      "Sécurité et validation des données",
    ],
  },
  {
    id: "analyse-donnees-python",
    title: "Outil d'Analyse de Données",
    description: "Application Python développée durant la formation MIASHS pour l'analyse statistique et la visualisation de données. Traitement de datasets et génération de graphiques interactifs.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter"],
    category: "academique",
    date: "2023-05",
    featured: false,
    highlights: [
      "Nettoyage et traitement de données",
      "Analyses statistiques avancées",
      "Visualisations personnalisées",
      "Rapports automatisés",
    ],
  },
  {
    id: "todo-app-react",
    title: "Application Todo Moderne",
    description: "Application de gestion de tâches avec React, démontrant les concepts modernes de hooks, context API et local storage. Interface élégante et responsive.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Local Storage"],
    category: "personnel",
    date: "2024-06",
    featured: false,
    highlights: [
      "Hooks React personnalisés",
      "Drag & drop pour réorganiser",
      "Filtres et catégories",
      "Sauvegarde locale persistante",
    ],
  },
];
