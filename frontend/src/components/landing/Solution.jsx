import React from "react";
import { Section } from "./Section";
import { NS } from "@/constants/testIds";
import { motion } from "framer-motion";
import { Camera, Sparkles, LineChart } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: <Camera size={20} />,
    title: "Snap",
    text: "Une simple photo de votre repas ou aliment. Pas de saisie, pas de scan code-barres, pas d'effort.",
  },
  {
    n: "02",
    icon: <Sparkles size={20} />,
    title: "Analyse IA",
    text: "Modèle IA propriétaire entraîné sur CIQUAL + Open Food Facts. Calories, macros et micronutriments en quelques secondes.",
  },
  {
    n: "03",
    icon: <LineChart size={20} />,
    title: "Mode adapté",
    text: "Choisissez votre mode : Santé & Bien-être (rééquilibrage, perte de poids) ou Performance Athlétique (récupération, timing).",
  },
];

export const Solution = () => (
  <Section
    id="section-solution"
    testId={NS.sectionSolution}
    eyebrow="La solution"
    title={<>Une photo. L'analyse complète. Deux modes.</>}
    subtitle="NutriSnap simplifie radicalement le suivi : grand public en mode Santé & Bien-être, sportifs ambitieux en mode Performance. Une seule app, deux usages — pilotée par une IA propriétaire."
  >
    <div className="grid items-stretch gap-6 lg:grid-cols-12">
      {/* Left — visual */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-7 relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0b] p-2"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1600&q=80"
            alt="Analyse IA d'un repas"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/40 to-transparent" />

          {/* Floating chips */}
          <FloatingChip className="left-6 top-6" label="Mode" value="Performance" highlight />
          <FloatingChip
            className="right-6 top-6"
            label="Micronutriments"
            value="Fer · Mg · B12"
          />
          <FloatingChip className="left-6 bottom-6" label="Protéines" value="38 g" />
          <FloatingChip className="right-6 bottom-6" label="IA propriétaire" value="CIQUAL+" highlight />
        </div>
      </motion.div>

      {/* Right — steps */}
      <div className="lg:col-span-5 grid gap-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex gap-5 rounded-2xl border border-white/10 bg-[#0c0c0d] p-6 transition-colors hover:border-mint/40"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-mint/10 text-mint">
              {s.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <span className="font-display text-xs font-semibold tracking-[0.22em] text-white/40">
                  {s.n}
                </span>
                <h3 className="font-display text-xl font-semibold text-white">
                  {s.title}
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {s.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

const FloatingChip = ({ className = "", label, value, highlight }) => (
  <div
    className={`absolute rounded-xl border ${
      highlight ? "border-mint/40 bg-mint/10" : "border-white/15 bg-black/55"
    } px-3 py-2 backdrop-blur-md ${className}`}
  >
    <div
      className={`text-[10px] uppercase tracking-[0.18em] ${
        highlight ? "text-mint" : "text-white/55"
      }`}
    >
      {label}
    </div>
    <div className="font-display text-sm font-semibold text-white">{value}</div>
  </div>
);
