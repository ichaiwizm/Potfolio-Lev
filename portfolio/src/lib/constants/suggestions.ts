export type Suggestion = {
  text: string;
  category: string;
};

export const SUGGESTIONS: Suggestion[] = [
  // Portfolio - Section principale
  { text: "Montre-moi tes projets", category: "Portfolio" },
  { text: "Affiche ton CV", category: "Portfolio" },
  { text: "Quelles sont tes compétences ?", category: "Portfolio" },
  { text: "Parle-moi de ton parcours", category: "Portfolio" },

  // Contact
  { text: "Comment te contacter ?", category: "Contact" },
  { text: "Formulaire de contact", category: "Contact" },

  // Expérience
  { text: "Ton expérience chez BCDemarches", category: "Expérience" },
  { text: "Raconte ton projet humanitaire", category: "Expérience" },

  // Compétences techniques
  { text: "Démonstration React", category: "Démo" },
  { text: "Visualise tes compétences", category: "Démo" },
  { text: "Timeline de formation", category: "Démo" },

  // Personnalisation
  { text: "Change le thème en mode sombre", category: "Personnalisation" },
  { text: "Fond dégradé violet", category: "Personnalisation" },
];
