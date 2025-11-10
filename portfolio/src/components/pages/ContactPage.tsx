import { PERSONAL_INFO } from "@/data/personal-info";
import { useState } from "react";
import { toast } from "sonner";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Tous les champs sont requis");
      return;
    }

    toast.success("Message reçu ! Je vous réponds bientôt.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="text-monumental tracking-tight mb-8">Contact</h1>
          <p className="text-body-large text-foreground/60">
            N'hésitez pas à me contacter pour toute opportunité ou question
          </p>
        </div>

        {/* Direct Contact */}
        <div className="mb-16 space-y-4 text-center">
          <a
            href={`mailto:${PERSONAL_INFO.contact.email}`}
            className="block text-title hover:text-foreground/70 transition-colors"
          >
            {PERSONAL_INFO.contact.email}
          </a>
          <a
            href={`tel:${PERSONAL_INFO.contact.phone.replace(/\s/g, "")}`}
            className="block text-title hover:text-foreground/70 transition-colors"
          >
            {PERSONAL_INFO.contact.phone}
          </a>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto border border-foreground/10 rounded-xl p-8 md:p-12">
          <h2 className="text-title font-bold mb-8 text-center">Envoyez-moi un message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-small-caps text-foreground/50 mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border border-foreground/20 rounded-lg px-4 py-3 text-body focus:outline-none focus:border-foreground/40 transition-colors"
                placeholder="Votre nom"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-small-caps text-foreground/50 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border border-foreground/20 rounded-lg px-4 py-3 text-body focus:outline-none focus:border-foreground/40 transition-colors"
                placeholder="votre@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-small-caps text-foreground/50 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full bg-transparent border border-foreground/20 rounded-lg px-4 py-3 text-body focus:outline-none focus:border-foreground/40 transition-colors resize-none"
                placeholder="Votre message..."
                required
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-foreground text-background py-4 rounded-lg text-body font-semibold hover:bg-foreground/90 transition-colors"
              >
                Envoyer le message
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center border-t border-foreground/10 pt-12 space-y-6">
          <p className="text-small-caps text-foreground/50">Retrouvez-moi également</p>
          <div className="flex justify-center gap-8">
            <a
              href={PERSONAL_INFO.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body text-foreground/70 hover:text-foreground transition-colors"
            >
              GitHub →
            </a>
            <a
              href={PERSONAL_INFO.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body text-foreground/70 hover:text-foreground transition-colors"
            >
              LinkedIn →
            </a>
          </div>
          <p className="text-tiny text-foreground/40 pt-4">
            📍 {PERSONAL_INFO.contact.location}
          </p>
        </div>
      </div>
    </div>
  );
}
