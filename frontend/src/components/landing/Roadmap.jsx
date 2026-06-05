import React, { useRef } from "react";
import { Section } from "./Section";
import { NS } from "@/constants/testIds";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

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

export const Roadmap = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 30%"],
  });
  const beamHeight = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
    { stiffness: 80, damping: 24, mass: 0.4 }
  );

  return (
    <Section
      id="section-roadmap"
      testId={NS.sectionRoadmap}
      eyebrow="Roadmap"
      title="Une feuille de route claire, du MVP au scale."
      subtitle="Une exécution séquencée : finaliser le MVP, valider l'engagement utilisateur, puis enrichir avec wearables, gamification et expansion B2B."
    >
      <div ref={containerRef} className="relative">
        {/* Static background line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
        {/* Animated mint beam — fills as user scrolls */}
        <motion.div
          style={{ height: beamHeight }}
          className="absolute left-4 top-0 w-px bg-gradient-to-b from-mint via-mint to-mint/30 mint-glow md:left-1/2 md:-translate-x-1/2"
        />

        <div className="space-y-10">
          {steps.map((s, i) => (
            <RoadmapItem
              key={s.title}
              s={s}
              i={i}
              total={steps.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

const RoadmapItem = ({ s, i, total, progress }) => {
  // Each step activates when the beam crosses ~ its midpoint
  const thresholdStart = i / total;
  const thresholdEnd = (i + 0.6) / total;
  const dotScale = useTransform(progress, [thresholdStart, thresholdEnd], [0.7, 1]);
  const dotOpacity = useTransform(progress, [thresholdStart - 0.05, thresholdStart + 0.02], [0.35, 1]);
  const cardOpacity = useTransform(progress, [thresholdStart - 0.08, thresholdStart + 0.05], [0.35, 1]);
  const cardX = useTransform(
    progress,
    [thresholdStart - 0.05, thresholdStart + 0.05],
    [i % 2 === 0 ? -10 : 10, 0]
  );

  const leftSide = i % 2 === 0;

  return (
    <div className="relative grid items-start md:grid-cols-2 md:gap-12">
      {/* Mobile-first: single column with dot on left */}
      <motion.div
        style={{ opacity: cardOpacity, x: cardX }}
        className={`relative pl-12 md:pl-0 ${leftSide ? "" : "md:order-2"}`}
      >
        {/* Dot — left on mobile, mid line on desktop */}
        <motion.span
          style={{ scale: dotScale, opacity: dotOpacity }}
          className={`absolute left-4 top-5 -translate-x-1/2 ${
            leftSide ? "md:left-auto md:right-[-31px]" : "md:left-[-31px]"
          } z-10`}
        >
          <span className="block h-3.5 w-3.5 rounded-full bg-mint mint-glow ring-4 ring-black" />
        </motion.span>

        <div
          className={`rounded-2xl border border-white/10 bg-[#0c0c0d] p-6 transition-colors ${
            leftSide ? "md:text-right" : ""
          }`}
        >
          <div className="text-[10px] uppercase tracking-[0.22em] text-mint">
            {s.q} {s.done && "· en cours"}
          </div>
          <h3 className="mt-2 font-display text-xl font-semibold text-white">
            {s.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/60">{s.text}</p>
        </div>
      </motion.div>
      <div className="hidden md:block" />
    </div>
  );
};
