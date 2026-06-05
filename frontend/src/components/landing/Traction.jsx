import React from "react";
import { Section } from "./Section";
import { NS } from "@/constants/testIds";
import { motion } from "framer-motion";

const kpis = [
  { value: "80%", label: "MVP déjà fonctionnel" },
  { value: "51k", label: "MAU cible · fin année 1" },
  { value: "×3", label: "Rétention vs apps actuelles" },
  { value: "+40%", label: "ARPU avec abos annuels & Lifetime" },
];

export const Traction = () => (
  <Section
    id="section-traction"
    testId={NS.sectionTraction}
    eyebrow="Traction & Projections"
    title="Pas une idée. Une solution prête à scaler."
    subtitle="MVP déjà fonctionnel à 80%, une trajectoire claire, et un marché qui a déjà prouvé son appétit (Cal AI : 15M+ téléchargements en moins de 2 ans)."
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

    {/* Chart — MAU projection toward 51k */}
    <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0d] p-6 md:p-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="eyebrow">Projection MAU · 12 premiers mois</div>
          <h3 className="mt-2 font-display text-2xl font-semibold text-white">
            Trajectoire vers 51 000 MAU
          </h3>
        </div>
        <div className="flex items-center gap-4 text-xs text-white/55">
          <Legend color="bg-mint" label="MAU projeté" />
          <Legend color="bg-white/30" label="Cible 51k" />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-12 items-end gap-3">
        {[6, 10, 16, 22, 30, 38, 48, 58, 68, 78, 88, 100].map((h, i) => (
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
        {["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10", "M11", "M12"].map(
          (m, i) => (
            <div key={i} className="text-center">
              {m}
            </div>
          )
        )}
      </div>

      <div className="mt-6 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-3">
        <Mini label="ARPU récurrent pondéré" value="6,08 € /mois" />
        <Mini label="Validation marché" value="Cal AI · 15M+ DL" />
        <Mini label="Catégorie" value="Health-tech · France" />
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

const Mini = ({ label, value }) => (
  <div>
    <div className="text-[10px] uppercase tracking-[0.22em] text-white/40">
      {label}
    </div>
    <div className="mt-1 font-display text-base font-semibold text-white">
      {value}
    </div>
  </div>
);
