import React from "react";
import { Section } from "./Section";
import { NS } from "@/constants/testIds";
import { motion } from "framer-motion";
import { AlertTriangle, Clock4, ChartNoAxesCombined, Brain } from "lucide-react";

const pains = [
  {
    icon: <Clock4 size={20} />,
    stat: "78%",
    title: "Abandonnent en 7 jours",
    text: "Les apps de tracking nutritionnel exigent 15+ min/jour de saisie manuelle. Personne ne tient.",
  },
  {
    icon: <ChartNoAxesCombined size={20} />,
    stat: "1 sur 9",
    title: "Athlètes connaissent leurs macros",
    text: "Les sportifs amateurs et pros pilotent leur nutrition à l'aveugle, sans corrélation avec leur performance.",
  },
  {
    icon: <Brain size={20} />,
    stat: "0",
    title: "Coach intégré au quotidien",
    text: "Aucune solution ne croise nutrition, sommeil, charge sportive et adaptation hormonale en temps réel.",
  },
];

export const Problem = () => (
  <Section
    id="section-problem"
    testId={NS.sectionProblem}
    eyebrow="Le problème"
    title="La nutrition est encore pilotée au feeling. Pas la performance."
    subtitle="80% des sportifs ambitieux n'ont aucune visibilité sur leur charge nutritionnelle réelle. Les outils existants sont lents, manuels et déconnectés de la performance."
  >
    <div className="grid gap-5 md:grid-cols-3">
      {pains.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: i * 0.08 }}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0d] p-7 transition-colors hover:border-mint/40"
        >
          <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-mint">
            {p.icon}
          </div>
          <div className="font-display text-5xl font-bold tracking-tighter text-white">
            {p.stat}
          </div>
          <div className="mt-4 font-display text-lg font-semibold text-white">
            {p.title}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-white/55">{p.text}</p>
          <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-mint/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </motion.div>
      ))}
    </div>

    <div className="mt-10 flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
      <div className="mt-0.5 text-mint">
        <AlertTriangle size={20} />
      </div>
      <p className="text-sm leading-relaxed text-white/70">
        <span className="text-white">Le marché de la nutrition connectée explose</span>{" "}
        — mais reste fragmenté entre apps de tracking (MyFitnessPal), montres
        (Whoop, Garmin) et coachs humains. Aucun acteur n'a su unifier&nbsp;:{" "}
        <span className="text-mint">scan instantané + coach IA contextuel</span>.
      </p>
    </div>
  </Section>
);
