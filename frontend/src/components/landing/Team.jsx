import React from "react";
import { Section } from "./Section";
import { NS } from "@/constants/testIds";
import { motion } from "framer-motion";
import { Trophy, Dumbbell, Brain, Linkedin } from "lucide-react";

const credentials = [
  {
    icon: <Trophy size={18} />,
    title: "Champion du Monde & d'Europe",
    text: "Muay Thai · sport de combat de haut niveau.",
  },
  {
    icon: <Dumbbell size={18} />,
    title: "91 combats professionnels",
    text: "Une connaissance terrain unique du corps de l'athlète.",
  },
  {
    icon: <Brain size={18} />,
    title: "18 ans de coaching sportif",
    text: "France & international · accompagnement athlètes et grand public.",
  },
];

export const Team = () => (
  <Section
    id="section-team"
    testId={NS.sectionTeam}
    eyebrow="L'équipe"
    title="Un projet né du terrain. Pas d'une slide."
    subtitle="NutriSnap est porté par un opérateur du sport de haut niveau, expert en performance et nutrition appliquée, transposant cette expertise au grand public via l'IA."
  >
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid gap-6 rounded-3xl border border-white/10 bg-[#0c0c0d] p-6 md:grid-cols-12 md:p-8"
    >
      {/* Photo / visual */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 md:col-span-5">
        <div className="relative aspect-[4/5]">
          <img
            src="https://customer-assets.emergentagent.com/job_nutrisnap-demo/artifacts/zt3usoa4_Design%20sans%20titre%20%283%29.png"
            alt="Malik Aliane — CEO & Fondateur"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute left-4 bottom-4">
            <div className="text-[10px] uppercase tracking-[0.22em] text-mint">
              CEO · Fondateur
            </div>
            <div className="font-display text-2xl font-bold text-white">
              Malik Aliane
            </div>
          </div>
        </div>
      </div>

      {/* Bio + credentials */}
      <div className="md:col-span-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold text-white">
            Du ring au laboratoire IA.
          </h3>
          <a
            href="#"
            aria-label="LinkedIn de Malik Aliane"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-mint hover:text-mint"
          >
            <Linkedin size={16} />
          </a>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-white/65">
          Malik a passé sa vie à optimiser le corps de l'athlète — pour
          lui-même, puis pour des centaines d'autres. NutriSnap est le
          prolongement logique de cette expertise&nbsp;: une IA construite avec
          les exigences du haut niveau, rendue accessible à tous via une simple
          photo.
        </p>

        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          {credentials.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
            >
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-mint/10 text-mint">
                {c.icon}
              </div>
              <div className="font-display text-sm font-semibold text-white">
                {c.title}
              </div>
              <div className="mt-1 text-xs text-white/55">{c.text}</div>
            </div>
          ))}
        </div>

        <div className="mt-7 rounded-xl border border-white/10 bg-black/40 p-4 text-xs leading-relaxed text-white/60">
          <span className="text-mint">Équipe en construction</span> — recherche
          active d'un(e) <span className="text-white">CTO/Lead IA</span> et
          d'un(e) <span className="text-white">Head of Growth</span> pour
          accompagner la phase de lancement.
        </div>
      </div>
    </motion.div>
  </Section>
);
