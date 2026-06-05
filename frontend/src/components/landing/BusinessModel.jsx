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
    desc: "Acquisition large. Idéal pour découvrir et créer une habitude.",
    perks: [
      "3 scans / jour",
      "Calories, macros & micros",
      "Historique limité à 7 jours",
    ],
    badge: "Acquisition",
  },
  {
    name: "Premium",
    price: "7,99 €",
    period: "/mois",
    desc: "Cœur de monétisation. 49,99 € / an (−48%) pour fidéliser les utilisateurs engagés.",
    perks: [
      "Scans illimités",
      "Recommandations IA personnalisées",
      "Statistiques avancées · long terme",
      "Modes Santé & Performance complets",
    ],
    badge: "Monétisation",
    highlight: true,
  },
  {
    name: "B2B · à venir",
    price: "Sur devis",
    period: "",
    desc: "Clubs, salles, coachs, entreprises et fédérations. Exploration active.",
    perks: [
      "Multi-comptes & suivi équipe",
      "Tableau de bord coach",
      "Rapports & exports",
      "Intégration fédérations sportives",
    ],
    badge: "Expansion",
  },
];

const economics = [
  { k: "ARPU récurrent", v: "6,08 € /mo" },
  { k: "Upside ARPU", v: "+40%" },
  { k: "Offre Lifetime", v: "99 € · 500 places" },
  { k: "MAU cible · Y1", v: "51 000" },
];

export const BusinessModel = () => (
  <Section
    id="section-business"
    testId={NS.sectionBusiness}
    eyebrow="Business model"
    title="Freemium B2C · Premium SaaS · Extension B2B."
    subtitle="Acquisition massive en gratuit, monétisation via abonnement Premium, fidélisation par offre annuelle et offre fondateur Lifetime. Expansion B2B en année 3."
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

    {/* Lifetime offer highlight */}
    <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-mint/30 bg-mint/[0.06] p-5 md:flex-row md:items-center">
      <div>
        <div className="text-[10px] uppercase tracking-[0.22em] text-mint">
          Offre fondateur · limitée
        </div>
        <div className="mt-1 font-display text-xl font-semibold text-white">
          99 € à vie — 500 premiers utilisateurs
        </div>
      </div>
      <span className="rounded-full border border-mint/40 bg-black/40 px-3 py-1.5 text-xs text-mint">
        Levier d'acquisition early-adopters
      </span>
    </div>

    {/* Economics strip */}
    <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4">
      {economics.map((e) => (
        <div key={e.k} className="bg-[#0c0c0d] p-6">
          <div className="text-[10px] uppercase tracking-[0.22em] text-white/45">
            {e.k}
          </div>
          <div className="mt-2 font-display text-2xl font-bold text-white">
            {e.v}
          </div>
        </div>
      ))}
    </div>
  </Section>
);
