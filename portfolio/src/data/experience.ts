/**
 * Expériences professionnelles de Levana Wizman
 */

export type Experience = {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  type: "alternance" | "emploi" | "stage" | "benevole";
  description: string;
  responsibilities: string[];
  technologies?: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    id: "bcdemarches",
    company: "BCDemarches",
    position: "Développeuse en alternance",
    location: "Paris, France",
    startDate: "2024-09",
    endDate: "2026-06",
    current: true,
    type: "alternance",
    description: "Développement d'applications web et participation aux projets internes de l'entreprise.",
    responsibilities: [
      "Développement de fonctionnalités frontend en React",
      "Création d'APIs REST avec Node.js",
      "Participation aux réunions Agile et planning",
      "Tests unitaires et intégration continue",
      "Maintenance et amélioration du code existant",
    ],
    technologies: ["React", "Node.js", "MySQL", "Git"],
  },
  {
    id: "abc-liv",
    company: "ABC Liv",
    position: "Secrétaire administrative",
    location: "Paris, France",
    startDate: "2024-05",
    endDate: "2024-08",
    current: false,
    type: "emploi",
    description: "Gestion administrative et accueil dans une entreprise de logistique.",
    responsibilities: [
      "Accueil physique et téléphonique des clients",
      "Classement et archivage de documents",
      "Rédaction et expédition de courriers",
      "Gestion de planning et coordination",
    ],
  },
  {
    id: "cabinet-medical",
    company: "Cabinet médical",
    position: "Aide au secrétariat",
    location: "Paris XI, France",
    startDate: "2020-07",
    endDate: "2023-08",
    current: false,
    type: "emploi",
    description: "Assistance administrative dans un cabinet médical (missions estivales récurrentes).",
    responsibilities: [
      "Accueil des patients",
      "Gestion des dossiers patients",
      "Prise de rendez-vous",
      "Classement et archivage médical",
    ],
  },
  {
    id: "bzh-yomyom",
    company: "Association BZH YOMYOM",
    position: "Trésorière bénévole",
    location: "France",
    startDate: "2020-03",
    endDate: "2025-01",
    current: true,
    type: "benevole",
    description: "Gestion financière d'une association d'intérêt général.",
    responsibilities: [
      "Tenue du budget et comptabilité",
      "Participation aux Assemblées Générales",
      "Gestion des dons et subventions",
      "Rapports financiers annuels",
    ],
  },
  {
    id: "projet-humanitaire",
    company: "Projet humanitaire à l'étranger",
    position: "Volontaire",
    location: "International",
    startDate: "2021-09",
    endDate: "2022-06",
    current: false,
    type: "benevole",
    description: "Année sabbatique consacrée à l'action humanitaire et la découverte.",
    responsibilities: [
      "Distribution de colis pour les nécessiteux",
      "Aide aux personnes âgées à domicile",
      "Soutien dans des maisons de retraite",
      "Organisation d'activités communautaires",
    ],
  },
];
