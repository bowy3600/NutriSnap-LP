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

    {/* Chart — MAU trajectory toward 51k */}
    <MAUTrajectory />
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

/* ---------- MAU Trajectory ---------- */
const MONTHS = ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10", "M11", "M12"];
// Values in MAU, ending at 51 000
const MAU_VALUES = [600, 1500, 3200, 5800, 9000, 13200, 18500, 25000, 32000, 39500, 45500, 51000];

const MAUTrajectory = () => {
  const W = 1000;
  const H = 280;
  const PAD_L = 48;
  const PAD_R = 24;
  const PAD_T = 24;
  const PAD_B = 40;

  const maxV = 51000;
  const step = (W - PAD_L - PAD_R) / (MAU_VALUES.length - 1);

  const points = MAU_VALUES.map((v, i) => {
    const x = PAD_L + i * step;
    const y = PAD_T + (H - PAD_T - PAD_B) * (1 - v / maxV);
    return { x, y, v };
  });

  const linePath = points.reduce(
    (acc, p, i) => acc + (i === 0 ? `M ${p.x} ${p.y}` : ` L ${p.x} ${p.y}`),
    ""
  );
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${H - PAD_B} L ${points[0].x} ${H - PAD_B} Z`;

  return (
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
          <Legend color="bg-white/30" label="Palier · 25 000" />
        </div>
      </div>

      <motion.svg
        viewBox={`0 0 ${W} ${H}`}
        className="mt-6 h-[260px] w-full md:h-[320px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <defs>
          <linearGradient id="mauArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6EEAB1" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#6EEAB1" stopOpacity="0" />
          </linearGradient>
          <filter id="mauGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((g, i) => {
          const y = PAD_T + (H - PAD_T - PAD_B) * g;
          const label = Math.round(maxV * (1 - g)).toLocaleString("fr-FR");
          return (
            <g key={i}>
              <line
                x1={PAD_L}
                y1={y}
                x2={W - PAD_R}
                y2={y}
                stroke="rgba(255,255,255,0.06)"
                strokeDasharray="3 4"
              />
              <text
                x={PAD_L - 8}
                y={y + 4}
                textAnchor="end"
                fontSize="10"
                fill="rgba(255,255,255,0.35)"
                fontFamily="Manrope, sans-serif"
              >
                {label}
              </text>
            </g>
          );
        })}

        {/* 25k milestone marker */}
        {(() => {
          const yMid = PAD_T + (H - PAD_T - PAD_B) * (1 - 25000 / maxV);
          return (
            <line
              x1={PAD_L}
              y1={yMid}
              x2={W - PAD_R}
              y2={yMid}
              stroke="rgba(255,255,255,0.18)"
              strokeDasharray="6 6"
            />
          );
        })()}

        {/* Animated area */}
        <motion.path
          d={areaPath}
          fill="url(#mauArea)"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 1.6, duration: 0.8 } },
          }}
        />

        {/* Animated line — draws from start to end */}
        <motion.path
          d={linePath}
          fill="none"
          stroke="#6EEAB1"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#mauGlow)"
          variants={{
            hidden: { pathLength: 0 },
            visible: {
              pathLength: 1,
              transition: { duration: 2.2, ease: "easeInOut" },
            },
          }}
        />

        {/* Dots that pop in along the path */}
        {points.map((p, i) => (
          <motion.g
            key={i}
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.15 + (i / (points.length - 1)) * 1.9,
                  duration: 0.25,
                },
              },
            }}
            style={{ transformOrigin: `${p.x}px ${p.y}px` }}
          >
            <circle cx={p.x} cy={p.y} r="6" fill="#6EEAB1" opacity="0.18" />
            <circle cx={p.x} cy={p.y} r="3" fill="#6EEAB1" />
          </motion.g>
        ))}

        {/* Final label — 51k MAU pinned to last point */}
        <motion.g
          variants={{
            hidden: { opacity: 0, y: -6 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 2.2, duration: 0.5 },
            },
          }}
        >
          <line
            x1={points[points.length - 1].x}
            y1={points[points.length - 1].y - 8}
            x2={points[points.length - 1].x}
            y2={points[points.length - 1].y - 36}
            stroke="rgba(110,234,177,0.6)"
            strokeDasharray="2 3"
          />
          <rect
            x={points[points.length - 1].x - 80}
            y={points[points.length - 1].y - 70}
            width="78"
            height="34"
            rx="8"
            fill="#6EEAB1"
          />
          <text
            x={points[points.length - 1].x - 41}
            y={points[points.length - 1].y - 52}
            textAnchor="middle"
            fontSize="11"
            fontWeight="700"
            fill="#000"
            fontFamily="Manrope, sans-serif"
          >
            51 000 MAU
          </text>
          <text
            x={points[points.length - 1].x - 41}
            y={points[points.length - 1].y - 40}
            textAnchor="middle"
            fontSize="9"
            fill="rgba(0,0,0,0.7)"
            fontFamily="Manrope, sans-serif"
          >
            Cible · fin année 1
          </text>
        </motion.g>

        {/* X axis labels */}
        {points.map((p, i) => (
          <text
            key={i}
            x={p.x}
            y={H - PAD_B + 18}
            textAnchor="middle"
            fontSize="10"
            fill="rgba(255,255,255,0.4)"
            fontFamily="Manrope, sans-serif"
            letterSpacing="0.08em"
          >
            {MONTHS[i]}
          </text>
        ))}
      </motion.svg>

      <div className="mt-6 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-3">
        <Mini label="ARPU récurrent pondéré" value="6,08 € /mois" />
        <Mini label="Validation marché" value="Cal AI · 15M+ DL" />
        <Mini label="Catégorie" value="Health-tech · France" />
      </div>
    </div>
  );
};
