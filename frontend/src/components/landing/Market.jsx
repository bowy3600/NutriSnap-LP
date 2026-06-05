import React from "react";
import { Section } from "./Section";
import { NS } from "@/constants/testIds";
import { motion } from "framer-motion";

const tiers = [
  { key: "TAM", value: "320 Md€", label: "Marché global Health & Performance", size: 100 },
  { key: "SAM", value: "48 Md€", label: "Nutrition connectée & sport tech (EU + US)", size: 70 },
  { key: "SOM", value: "1,2 Md€", label: "Cible 5 ans · sportifs ambitieux + B2B coaches", size: 40 },
];

export const Market = () => (
  <Section
    id="section-market"
    testId={NS.sectionMarket}
    eyebrow="Le marché"
    title="Une opportunité à plusieurs milliards, en accélération."
    subtitle="Le wellness premium + l'IA appliquée à la santé dessinent la plus grande catégorie tech post-LLM. NutriSnap se positionne au croisement exact des deux."
  >
    <div className="grid items-center gap-12 lg:grid-cols-12">
      {/* Visual — concentric rings */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="lg:col-span-6 relative mx-auto aspect-square w-full max-w-[460px]"
      >
        <div className="absolute inset-0 rounded-full border border-white/10" />
        <div className="absolute inset-[14%] rounded-full border border-white/15" />
        <div className="absolute inset-[30%] rounded-full border border-mint/40 mint-glow" />
        <div className="absolute inset-[48%] rounded-full bg-mint/15 ring-1 ring-mint/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-[11px] uppercase tracking-[0.22em] text-mint">
              SOM 2030
            </div>
            <div className="font-display text-4xl font-bold text-white">
              1,2 Md€
            </div>
          </div>
        </div>

        <Label className="left-1 top-4" tag="TAM" value="320 Md€" />
        <Label className="right-2 top-[26%]" tag="SAM" value="48 Md€" />
        <Label className="left-1/2 -translate-x-1/2 bottom-1" tag="SOM" value="1,2 Md€" highlight />
      </motion.div>

      {/* Right — explanation */}
      <div className="lg:col-span-6">
        <div className="grid gap-4">
          {tiers.map((t, i) => (
            <motion.div
              key={t.key}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-[#0c0c0d] p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-semibold tracking-widest text-mint">
                    {t.key}
                  </span>
                  <span className="text-sm text-white/60">{t.label}</span>
                </div>
                <span className="font-display text-2xl font-bold text-white">
                  {t.value}
                </span>
              </div>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${t.size}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.08 }}
                  className="h-full rounded-full bg-mint"
                />
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-white/55">
          Croissance attendue&nbsp;: +18% CAGR (2024–2030) sur la nutrition
          connectée. Les segments les plus dynamiques&nbsp;: sportifs amateurs
          high-intent, coachs &amp; nutritionnistes (B2B), cliniques de
          performance.
        </p>
      </div>
    </div>
  </Section>
);

const Label = ({ className = "", tag, value, highlight }) => (
  <div
    className={`absolute rounded-lg border ${
      highlight ? "border-mint/40 bg-mint/15" : "border-white/15 bg-black/60"
    } px-3 py-1.5 backdrop-blur ${className}`}
  >
    <div
      className={`text-[10px] uppercase tracking-[0.2em] ${
        highlight ? "text-mint" : "text-white/55"
      }`}
    >
      {tag}
    </div>
    <div className="font-display text-sm font-semibold text-white">{value}</div>
  </div>
);
