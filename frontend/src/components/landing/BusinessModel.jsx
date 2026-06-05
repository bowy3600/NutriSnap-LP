import React from "react";
import { Section } from "./Section";
import { NS } from "@/constants/testIds";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "0 €",
    period: "/mois",
    desc: "Acquisition large. 3 scans/jour, coach IA limité.",
    perks: ["3 scans / jour", "Macros & qualité", "Historique 7 jours"],
    badge: "Acquisition",
  },
  {
    name: "Performance",
    price: "12,99 €",
    period: "/mois",
    desc: "Notre cœur de cible : sportifs ambitieux & coachs perso.",
    perks: [
      "Scans illimités",
      "Coach IA complet",
      "Sync Whoop / Apple Health",
      "Meal planner adaptatif",
    ],
    badge: "Monétisation",
    highlight: true,
  },
  {
    name: "Coach Pro · B2B",
    price: "Sur devis",
    period: "",
    desc: "Pour coachs, clubs, cliniques de performance. Multi-comptes.",
    perks: [
      "Tableau de bord coach",
      "Jusqu'à 200 clients",
      "API & exports",
      "White-label optionnel",
    ],
    badge: "Expansion",
  },
];

const economics = [
  { k: "ARPU cible", v: "9,80 €" },
  { k: "Marge brute", v: "82%" },
  { k: "Payback CAC", v: "4,2 mois" },
  { k: "LTV : CAC", v: "5,1x" },
];

export const BusinessModel = () => (
  <Section
    id="section-business"
    testId={NS.sectionBusiness}
    eyebrow="Business model"
    title="Freemium B2C × SaaS B2B. Deux moteurs de croissance."
    subtitle="Acquisition virale côté grand public, monétisation premium individuelle, expansion via les coachs et cliniques de performance."
  >
    <div className="grid gap-5 md:grid-cols-3">
      {plans.map((p, i) => (
        <motion.div
          key={p.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
          className={`relative overflow-hidden rounded-2xl border p-7 ${
            p.highlight
              ? "border-mint/40 bg-[linear-gradient(180deg,rgba(110,234,177,0.08),rgba(110,234,177,0)_60%),#0c0c0d]"
              : "border-white/10 bg-[#0c0c0d]"
          }`}
        >
          <div className="mb-5 flex items-center justify-between">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-white/55">
              {p.badge}
            </span>
            {p.highlight && (
              <span className="rounded-full bg-mint px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-black">
                Star
              </span>
            )}
          </div>
          <h3 className="font-display text-xl font-semibold text-white">
            {p.name}
          </h3>
          <div className="mt-3 flex items-baseline gap-1">
            <span className="font-display text-4xl font-bold text-white">
              {p.price}
            </span>
            <span className="text-sm text-white/50">{p.period}</span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-white/55">{p.desc}</p>
          <ul className="mt-6 space-y-2.5">
            {p.perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3 text-sm text-white/75">
                <Check size={16} className="mt-0.5 text-mint" />
                {perk}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>

    {/* Economics strip */}
    <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4">
      {economics.map((e) => (
        <div key={e.k} className="bg-[#0c0c0d] p-6">
          <div className="text-[10px] uppercase tracking-[0.22em] text-white/45">
            {e.k}
          </div>
          <div className="mt-2 font-display text-3xl font-bold text-white">
            {e.v}
          </div>
        </div>
      ))}
    </div>
  </Section>
);
