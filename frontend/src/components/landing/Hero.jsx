import React from "react";
import { motion } from "framer-motion";
import { NS } from "@/constants/testIds";
import { Logo, ApertureMark } from "./Brand";
import { ArrowUpRight } from "lucide-react";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export const Hero = () => {
  return (
    <section
      id="section-hero"
      className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-[0.35]" />
      <div className="absolute inset-0 -z-10 bg-radial-mint" />
      <div className="absolute -z-10 right-[-12%] top-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(110,234,177,0.22),transparent_60%)]" />
      <div className="absolute -z-10 inset-0 bg-noise opacity-40 mix-blend-overlay" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="eyebrow">Pre-Seed · MVP 80% prêt</span>
          <span className="h-px w-12 bg-white/20" />
          <span className="text-xs text-white/50">Investor Deck v4.2</span>
        </motion.div>

        <div className="grid items-end gap-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <h1
              data-testid={NS.heroTitle}
              className="font-display text-5xl font-extrabold leading-[0.95] tracking-tighter text-white sm:text-6xl lg:text-7xl"
            >
              Votre suivi nutritionnel
              <br />
              <span className="text-mint mint-text-glow">sans effort</span>.
            </h1>
            <p className="mt-7 max-w-2xl text-lg text-white/65 leading-relaxed">
              NutriSnap est la première app française qui allie une IA
              propriétaire à une vraie expertise du corps de l'athlète. Une
              photo&nbsp;= analyse complète&nbsp;: calories, macros et
              micronutriments instantanément.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                data-testid={NS.heroCtaInvestor}
                onClick={() => scrollTo("section-contact")}
                className="group inline-flex items-center gap-2 rounded-full bg-mint px-7 py-3.5 text-sm font-semibold text-black shadow-[0_0_24px_rgba(110,234,177,0.35)] transition-all hover:shadow-[0_0_44px_rgba(110,234,177,0.6)]"
              >
                Devenir investisseur · Prendre rdv
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>
            </div>

            <div className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <Stat value="80%" label="MVP déjà fonctionnel" />
              <Stat value="51k" label="MAU cible · fin année 1" />
              <Stat value="×3" label="Rétention vs apps actuelles" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="lg:col-span-4"
          >
            <HeroCard />
          </motion.div>
        </div>

        <Marquee />
      </div>
    </section>
  );
};

const Stat = ({ value, label }) => (
  <div>
    <div className="font-display text-3xl font-bold text-white sm:text-4xl">
      {value}
    </div>
    <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/45">
      {label}
    </div>
  </div>
);

const HeroCard = () => (
  <div className="relative">
    <div className="absolute -inset-4 -z-10 rounded-[36px] bg-[radial-gradient(circle_at_50%_30%,rgba(110,234,177,0.25),transparent_60%)] blur-2xl" />
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0b0c] p-5 shadow-2xl">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ApertureMark className="h-5 w-5" />
          <span className="text-xs uppercase tracking-[0.18em] text-white/50">
            scan · live
          </span>
        </div>
        <span className="rounded-full bg-mint/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-mint">
          AI v3
        </span>
      </div>

      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
        <img
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80"
          alt="Repas analysé"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute left-3 top-3 rounded-md border border-mint/40 bg-black/40 px-2 py-1 text-[10px] uppercase tracking-widest text-mint">
          Bowl saumon · 612 kcal
        </div>
        <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-2">
          <Macro k="Protéines" v="38 g" />
          <Macro k="Glucides" v="52 g" />
          <Macro k="Lipides" v="22 g" />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/40 p-3 text-xs text-white/70">
        <div>
          <span className="text-mint">+12%</span> de performance prévue après ce
          repas
        </div>
        <ApertureMark className="h-4 w-4" glow={false} />
      </div>
    </div>
  </div>
);

const Macro = ({ k, v }) => (
  <div className="rounded-md border border-white/10 bg-black/60 px-2 py-1.5 text-[10px] backdrop-blur">
    <div className="text-white/50">{k}</div>
    <div className="font-display text-sm font-semibold text-white">{v}</div>
  </div>
);

const Marquee = () => {
  const items = [
    "CIQUAL",
    "Open Food Facts",
    "Made in France",
    "Sport de haut niveau",
    "iOS · Android",
    "RGPD compliant",
    "IA propriétaire",
    "Phase 1 · France",
  ];
  const row = [...items, ...items];
  return (
    <div className="mt-20 overflow-hidden border-y border-white/5 py-6">
      <div className="text-center text-[11px] uppercase tracking-[0.28em] text-white/40">
        Conçu sur des fondations solides
      </div>
      <div className="mt-5 flex w-[200%] gap-14 ns-marquee">
        {row.map((it, i) => (
          <div
            key={i}
            className="shrink-0 font-display text-lg font-semibold text-white/45"
          >
            {it}
          </div>
        ))}
      </div>
    </div>
  );
};
