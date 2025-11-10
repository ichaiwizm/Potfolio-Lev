/**
 * Informations personnelles de Levana Wizman
 */

export const PERSONAL_INFO = {
  fullName: "Levana Wizman",
  title: "Développeuse Full-Stack",
  subtitle: "Étudiante BTS SIO SLAM en alternance",

  contact: {
    email: "levanawizman25@gmail.com",
    phone: "06 95 80 90 79",
    location: "Paris, France",
  },

  bio: {
    short: "Développeuse passionnée en formation BTS SIO SLAM, spécialisée en développement web full-stack avec React, Node.js et bases de données.",

    long: `Je suis Levana Wizman, étudiante en BTS SIO option SLAM à l'école ORT Montreuil,
    où je développe mes compétences en développement logiciel. Actuellement en alternance chez
    BCDemarches, je combine apprentissage théorique et expérience pratique pour créer des
    applications web modernes et performantes.

    Mon parcours atypique, incluant une année de projet humanitaire et diverses expériences
    professionnelles, m'a appris la valeur du travail d'équipe, de la persévérance et de
    l'adaptabilité - des qualités que j'applique quotidiennement dans le développement.`,
  },

  qualities: [
    { trait: "Persévérante", icon: "💪" },
    { trait: "Organisée", icon: "📋" },
    { trait: "Autonome", icon: "🚀" },
    { trait: "Polyvalente", icon: "🎯" },
  ],

  languages: [
    { name: "Français", level: "Natif" },
    { name: "Anglais", level: "Courant" },
    { name: "Hébreu", level: "Intermédiaire" },
  ],

  social: {
    github: "https://github.com/levanawizman",
    linkedin: "https://linkedin.com/in/levana-wizman",
  },
} as const;
