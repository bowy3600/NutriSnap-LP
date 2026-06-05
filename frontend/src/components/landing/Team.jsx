import React from "react";
import { Section } from "./Section";
import { NS } from "@/constants/testIds";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Camille Aubert",
    role: "CEO · Co-fondatrice",
    bio: "Ex-Doctolib, INSEAD MBA. 10 ans à la croisée santé & produit.",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hugo Lefèvre",
    role: "CTO · Co-fondateur",
    bio: "Ex-Mistral AI, ENS Ulm. Vision IA et infra ML temps réel.",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dr. Léa Moreno",
    role: "Chief Nutrition Officer",
    bio: "PhD Nutrition Sportive, ex-INSEP. Conseille les athlètes olympiques.",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Mathis Granger",
    role: "Head of Growth",
    bio: "Ex-Lydia, ex-Wellhub. 0→1M utilisateurs sur 3 apps santé.",
    photo:
      "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&w=800&q=80",
  },
];

export const Team = () => (
  <Section
    id="section-team"
    testId={NS.sectionTeam}
    eyebrow="Équipe"
    title="Une équipe à l'intersection IA, santé et produit."
    subtitle="Des opérateurs aguerris, déjà passés par les meilleures scale-ups françaises et européennes."
  >
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {team.map((m, i) => (
        <motion.div
          key={m.name}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0d]"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={m.photo}
              alt={m.name}
              className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          </div>
          <div className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {m.name}
                </h3>
                <div className="text-xs uppercase tracking-[0.18em] text-mint">
                  {m.role}
                </div>
              </div>
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/55 transition-colors hover:border-mint hover:text-mint"
              >
                <Linkedin size={14} />
              </a>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              {m.bio}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);
