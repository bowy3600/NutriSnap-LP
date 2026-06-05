import React from "react";
import { Section } from "./Section";
import { NS } from "@/constants/testIds";
import { motion } from "framer-motion";

const kpis = [
  { value: "12,4k", label: "Utilisateurs en bêta privée" },
  { value: "94%", label: "Rétention J30" },
  { value: "4,8/5", label: "Score satisfaction (NPS 71)" },
  { value: "2,1M", label: "Repas analysés à ce jour" },
];

export const Traction = () => (
  <Section
    id="section-traction"
    testId={NS.sectionTraction}
    eyebrow="Traction"
    title="Une bêta qui parle d'elle-même."
    subtitle="Lancée discrètement en septembre, NutriSnap affiche déjà des courbes que la plupart des apps santé mettent 18 mois à atteindre."
  >
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {kpis.map((k, i) => (
        <motion.div
          key={k.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0d] p-7"
        >
          <div className="font-display text-5xl font-bold tracking-tighter text-mint mint-text-glow">
            {k.value}
          </div>
          <div className="mt-3 text-xs uppercase tracking-[0.2em] text-white/55">
            {k.label}
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-mint/40 to-transparent" />
        </motion.div>
      ))}
    </div>

    {/* Chart */}
    <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0d] p-6 md:p-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="eyebrow">Croissance utilisateurs · MoM</div>
          <h3 className="mt-2 font-display text-2xl font-semibold text-white">
            +38% mois sur mois
          </h3>
        </div>
        <div className="flex items-center gap-4 text-xs text-white/55">
          <Legend color="bg-mint" label="MAU" />
          <Legend color="bg-white/30" label="Repas scannés" />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-12 items-end gap-3">
        {[14, 18, 22, 28, 36, 42, 50, 58, 67, 78, 92, 100].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.04 }}
            className="relative rounded-md bg-gradient-to-t from-mint/40 to-mint"
            style={{ minHeight: 6 }}
          >
            <div className="absolute -top-1 left-0 right-0 mx-auto h-1 w-1 rounded-full bg-mint mint-glow" />
          </motion.div>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-12 text-[10px] uppercase tracking-widest text-white/35">
        {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"].map((m, i) => (
          <div key={i} className="text-center">{m}</div>
        ))}
      </div>
    </div>
  </Section>
);

const Legend = ({ color, label }) => (
  <div className="flex items-center gap-2">
    <span className={`inline-block h-2 w-2 rounded-full ${color}`} />
    {label}
  </div>
);
