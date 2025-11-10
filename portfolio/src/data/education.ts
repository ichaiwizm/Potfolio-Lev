/**
 * Parcours éducatif de Levana Wizman
 */

export type Education = {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements?: string[];
};

export const EDUCATION: Education[] = [
  {
    id: "bts-sio",
    institution: "ORT Montreuil",
    degree: "BTS SIO",
    field: "Services Informatiques aux Organisations - Option SLAM",
    location: "Montreuil, France",
    startDate: "2024-09",
    endDate: "2026-06",
    current: true,
    description: "Formation en développement d'applications avec spécialisation en Solutions Logicielles et Applications Métiers.",
    achievements: [
      "Alternance chez BCDemarches",
      "Projets de développement web full-stack",
      "Apprentissage des méthodologies Agile",
    ],
  },
  {
    id: "miashs",
    institution: "Université Paris Cité",
    degree: "Licence 1 MIASHS",
    field: "Mathématiques et Informatique Appliquées aux Sciences Humaines et Sociales",
    location: "Paris, France",
    startDate: "2022-09",
    endDate: "2024-05",
    current: false,
    description: "Formation pluridisciplinaire combinant mathématiques, informatique et sciences humaines.",
    achievements: [
      "Initiation à la programmation Python",
      "Raisonnements mathématiques",
      "Analyse de données et statistiques",
    ],
  },
  {
    id: "bac",
    institution: "Lycée NR HATORAH",
    degree: "Baccalauréat",
    field: "Spécialités Mathématiques et Économie",
    location: "Paris XIX, France",
    startDate: "2018-09",
    endDate: "2021-06",
    current: false,
    description: "Baccalauréat général avec mention Bien.",
    achievements: [
      "Mention Bien",
      "Spécialité Mathématiques",
      "Spécialité Économie",
    ],
  },
];

export const CERTIFICATIONS = [
  {
    id: "bafa",
    name: "BAFA Complet",
    organization: "Ministère de la Jeunesse et des Sports",
    date: "2023-07",
    description: "Brevet d'Aptitude aux Fonctions d'Animateur",
  },
  {
    id: "permis-b",
    name: "Permis B",
    organization: "France",
    date: "2021",
    description: "Permis de conduire catégorie B",
  },
];
