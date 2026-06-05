import React from "react";
import { Section } from "./Section";
import { NS } from "@/constants/testIds";
import { motion } from "framer-motion";
import {
  Camera,
  Brain,
  Moon,
  Activity,
  Utensils,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    span: "md:col-span-2 md:row-span-2",
    icon: <Camera size={22} />,
    title: "Vision IA — Scan instantané",
    text: "Détection multi-aliments, portions, mode de cuisson. Modèle vision propriétaire entraîné sur 4M+ d'images.",
    visual: (
      <div className="absolute right-0 bottom-0 left-0 mx-auto h-2/3 w-full bg-[radial-gradient(circle_at_70%_80%,rgba(110,234,177,0.18),transparent_60%)]" />
    ),
    big: true,
  },
  {
    icon: <Brain size={22} />,
    title: "Coach IA contextuel",
    text: "Recommandations personnalisées selon vos objectifs, votre charge et votre cycle hormonal.",
  },
  {
    icon: <Activity size={22} />,
    title: "Performance score",
    text: "Indice 0–100 mis à jour en temps réel, croisé avec Whoop, Garmin, Apple Health.",
  },
  {
    icon: <Moon size={22} />,
    title: "Sommeil & récupération",
    text: "Recommandations dîner & timing pour optimiser le sommeil profond et la récupération.",
  },
  {
    icon: <Utensils size={22} />,
    title: "Meal planner adaptatif",
    text: "Plans de repas générés selon votre frigo, votre budget et vos objectifs hebdo.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Privacy-first",
    text: "Données chiffrées, hébergement EU, conforme RGPD & HIPAA-ready.",
  },
];

export const Features = () => (
  <Section
    id="section-features"
    testId={NS.sectionFeatures}
    eyebrow="Produit"
    title="Tout ce qu'il faut pour piloter sa performance. Rien d'autre."
    subtitle="Une architecture modulaire, branchée sur l'écosystème santé existant (Apple Health, Whoop, Garmin, Oura, Strava)."
  >
    <div className="grid auto-rows-[200px] gap-4 md:grid-cols-3">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
          className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0d] p-7 transition-all hover:border-mint/40 ${
            f.span || ""
          }`}
        >
          <div className="relative z-10 flex h-full flex-col">
            <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-mint/10 text-mint">
              {f.icon}
            </div>
            <h3
              className={`font-display font-semibold text-white ${
                f.big ? "text-2xl" : "text-lg"
              }`}
            >
              {f.title}
            </h3>
            <p
              className={`mt-2 text-sm leading-relaxed text-white/55 ${
                f.big ? "max-w-md" : ""
              }`}
            >
              {f.text}
            </p>
            {f.big && (
              <div className="mt-auto pt-6">
                <div className="grid grid-cols-3 gap-2">
                  {["Macros", "Micros", "IG", "Allergènes", "Score A+", "Hydratation"].map(
                    (chip) => (
                      <div
                        key={chip}
                        className="rounded-md border border-white/10 bg-black/40 px-2 py-1 text-[10px] uppercase tracking-widest text-white/55"
                      >
                        {chip}
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
          {f.visual}
          <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_100%_0%,rgba(110,234,177,0.08),transparent_50%)] opacity-0 transition-opacity group-hover:opacity-100" />
        </motion.div>
      ))}
    </div>
  </Section>
);
