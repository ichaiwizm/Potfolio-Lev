import { SKILLS, SKILL_CATEGORIES } from "@/data/skills";
import { useState } from "react";

export function SkillsPage() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Group by category
  const byCategory = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof SKILLS>);

  return (
    <div className="min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-monumental tracking-tight">Compétences</h1>
          <p className="text-body-large text-foreground/60 mt-6 max-w-2xl">
            Technologies et outils que je maîtrise dans le développement web full-stack
          </p>
        </div>

        {/* Skills by Category */}
        <div className="space-y-16">
          {Object.entries(byCategory).map(([category, skills]) => {
            const categoryInfo = SKILL_CATEGORIES[category as keyof typeof SKILL_CATEGORIES];

            return (
              <div key={category}>
                {/* Category Header */}
                <div className="mb-8 pb-3 border-b border-foreground/10">
                  <h2 className="text-title font-bold">{categoryInfo.label}</h2>
                </div>

                {/* Skills Grid - More relaxed */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {skills.map((skill) => {
                    const isHovered = hoveredSkill === skill.name;

                    return (
                      <div
                        key={skill.name}
                        className="group relative border border-foreground/10 rounded-lg p-6 transition-all duration-300 hover:border-foreground/30 hover:shadow-md cursor-pointer"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        {/* Skill Name */}
                        <div className="text-body font-semibold text-foreground/90 mb-3">
                          {skill.name}
                        </div>

                        {/* Level Indicator - Subtle dots */}
                        <div className="flex gap-1.5">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                i < Math.ceil(skill.level / 20)
                                  ? "bg-foreground/70"
                                  : "bg-foreground/10"
                              }`}
                            />
                          ))}
                        </div>

                        {/* Hover Info */}
                        <div
                          className={`absolute inset-0 bg-foreground/5 backdrop-blur-sm rounded-lg flex items-center justify-center transition-opacity duration-200 ${
                            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
                          }`}
                        >
                          <span className="text-tiny text-foreground/60 font-medium">
                            {skill.level}% maîtrise
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-20 text-center">
          <p className="text-body text-foreground/50">
            Toujours en apprentissage, toujours curieuse de nouvelles technologies
          </p>
        </div>
      </div>
    </div>
  );
}
