import React from "react";
import { Section } from "./Section";
import { NS } from "@/constants/testIds";
import { motion } from "framer-motion";

const tiers = [
  {
    key: "TOTAL",
    value: "12 – 15M",
    label: "Personnes en France · cible totale adressable",
    size: 100,
  },
  {
    key: "PHASE 1",
    value: "10 – 13M",
    label: "Santé & Bien-être · 25–55 ans, rééquilibrage & perte de poids",
    size: 80,
  },
  {
    key: "PHASE 2",
    value: "2 – 3M",
    label: "Performance Athlétique · musculation, CrossFit, sports de combat",
    size: 25,
  },
];

const benchmarks = [
  { name: "Cal AI", info: "15M+ téléchargements en <2 ans · racheté par MyFitnessPal (03/2026)" },
  { name: "Foodvisor", info: "Racheté par Xynergy 50–60M€ · fin 2025" },
];

export const Market = () => (
  <Section
    id="section-market"
    testId={NS.sectionMarket}
    eyebrow="Le marché"
    title="12 à 15 millions de Français. Une seule app à conquérir."
    subtitle="Phase 1 grand public massif, Phase 2 athlétique premium. Le marché est validé : Cal AI et Foodvisor prouvent l'appétit. Aucun acteur n'occupe encore la rupture IA × expertise athlète en France."
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
        <div className="absolute inset-[12%] rounded-full border border-white/15" />
        <div className="absolute inset-[34%] rounded-full border border-mint/40 mint-glow" />
        <div className="absolute inset-[52%] rounded-full bg-mint/15 ring-1 ring-mint/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-[11px] uppercase tracking-[0.22em] text-mint">
              Cible totale · France
            </div>
            <div className="font-display text-4xl font-bold text-white">
              12 – 15M
            </div>
            <div className="mt-1 text-xs text-white/45">25 – 55 ans</div>
          </div>
        </div>

        <Label className="left-2 top-6" tag="Total" value="12–15M" />
        <Label className="right-2 top-[28%]" tag="Santé" value="10–13M" />
        <Label
          className="left-1/2 -translate-x-1/2 bottom-2"
          tag="Athlètes"
          value="2–3M"
          highlight
        />
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
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-semibold tracking-widest text-mint">
                    {t.key}
                  </span>
                  <span className="text-sm text-white/60">{t.label}</span>
                </div>
                <span className="font-display text-2xl font-bold text-white whitespace-nowrap">
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

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
          <div className="text-[10px] uppercase tracking-[0.22em] text-white/45">
            Validation marché — concurrents internationaux
          </div>
          <ul className="mt-3 space-y-2.5">
            {benchmarks.map((b) => (
              <li key={b.name} className="flex items-start gap-3 text-sm">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                <span className="text-white/75">
                  <span className="text-white">{b.name}</span> — {b.info}
                </span>
              </li>
            ))}
          </ul>
        </div>
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
