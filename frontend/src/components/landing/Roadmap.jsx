import React from "react";
import { Section } from "./Section";
import { NS } from "@/constants/testIds";
import { motion } from "framer-motion";

const steps = [
  {
    q: "Aujourd'hui",
    title: "MVP fonctionnel à 80%",
    text: "App iOS & Android, IA propriétaire, deux modes (Santé & Performance) — bientôt prêt à scaler.",
    done: true,
  },
  {
    q: "Fin Année 1",
    title: "Lancement public + wearables",
    text: "Premières intégrations wearables, suivi sommeil & hydratation basique. Cible : 51 000 MAU.",
  },
  {
    q: "Année 2",
    title: "Gamification + Readiness Score",
    text: "Optimisation performance & récupération, rapports exportables pour coachs et nutritionnistes.",
  },
  {
    q: "Année 3",
    title: "Coaching IA prédictif + B2B",
    text: "Plans de repas générés automatiquement, communauté intégrée, déploiement B2B (clubs, salles, fédérations).",
  },
];

export const Roadmap = () => (
  <Section
    id="section-roadmap"
    testId={NS.sectionRoadmap}
    eyebrow="Roadmap"
    title="Une feuille de route claire, du MVP au scale."
    subtitle="Une exécution séquencée : finaliser le MVP, valider l'engagement utilisateur, puis enrichir avec wearables, gamification et expansion B2B."
  >
    <div className="relative">
      <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-mint/50 via-white/10 to-transparent md:left-1/2" />

      <div className="space-y-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className={`relative grid md:grid-cols-2 md:gap-12 ${
              i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="relative pl-12 md:pl-0">
              {/* dot */}
              <span
                className={`absolute left-2.5 top-3 h-3 w-3 -translate-x-1/2 rounded-full md:left-auto ${
                  i % 2 === 0 ? "md:right-[-7px]" : "md:left-[-7px]"
                } ${
                  s.done
                    ? "bg-mint mint-glow"
                    : "bg-black ring-2 ring-mint/50"
                }`}
              />
              <div
                className={`rounded-2xl border border-white/10 bg-[#0c0c0d] p-6 ${
                  i % 2 === 0 ? "md:text-right" : ""
                }`}
              >
                <div className="text-[10px] uppercase tracking-[0.22em] text-mint">
                  {s.q} {s.done && "· en cours"}
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {s.text}
                </p>
              </div>
            </div>
            <div />
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);
