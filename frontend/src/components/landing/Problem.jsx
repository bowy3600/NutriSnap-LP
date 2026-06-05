import React from "react";
import { Section } from "./Section";
import { NS } from "@/constants/testIds";
import { motion } from "framer-motion";
import { AlertTriangle, Clock4, ChartNoAxesCombined, Brain } from "lucide-react";

const pains = [
  {
    icon: <Clock4 size={20} />,
    stat: "15 min/j",
    title: "Saisie manuelle, abandon rapide",
    text: "Les apps actuelles imposent une saisie longue et contraignante. Résultat : perte d'intérêt après quelques jours et taux d'abandon massif.",
  },
  {
    icon: <ChartNoAxesCombined size={20} />,
    stat: "Imprécis",
    title: "Données peu fiables",
    text: "Pour les utilisateurs, les chiffres sont approximatifs. Pour les coachs, la saisie est chronophage et non scalable dans le temps.",
  },
  {
    icon: <Brain size={20} />,
    stat: "0",
    title: "Aucune expertise athlète",
    text: "Aucune solution n'allie une IA de pointe à une vraie expertise du corps de l'athlète. Le sportif ambitieux pilote à l'aveugle.",
  },
];

export const Problem = () => (
  <Section
    id="section-problem"
    testId={NS.sectionProblem}
    eyebrow="Le problème"
    title="La nutrition est encore pilotée au feeling. Pas la performance."
    subtitle="Les apps de suivi nutritionnel actuelles souffrent de limites structurelles : expérience complexe, saisie manuelle, faible engagement. NutriSnap part de zéro avec une approche radicalement plus simple."
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
        <span className="text-white">Le marché valide déjà le besoin</span> —
        Cal AI a passé les <span className="text-mint">15M+ téléchargements en moins de 2 ans</span>,
        Foodvisor a été racheté 50–60M€ fin 2025. Aucun acteur français n'a su
        unifier <span className="text-mint">scan IA + expertise athlète</span>.
      </p>
    </div>
  </Section>
);
