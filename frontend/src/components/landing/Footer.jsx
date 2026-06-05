import React from "react";
import { Logo } from "./Brand";

export const Footer = () => (
  <footer className="border-t border-white/5 bg-black">
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo className="h-7 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
            NutriSnap est le co-pilote IA santé & performance. Conçu à Paris,
            entraîné sur la donnée nutrition la plus fine d'Europe.
          </p>
        </div>

        <FooterCol
          title="Produit"
          links={[
            { l: "La solution", href: "#section-solution" },
            { l: "Fonctionnalités", href: "#section-features" },
            { l: "Pricing", href: "#section-business" },
            { l: "Roadmap", href: "#section-roadmap" },
          ]}
        />
        <FooterCol
          title="Investisseurs"
          links={[
            { l: "Pitch deck", href: "#section-contact" },
            { l: "Marché", href: "#section-market" },
            { l: "Traction", href: "#section-traction" },
            { l: "Équipe", href: "#section-team" },
          ]}
        />
        <FooterCol
          title="Légal"
          links={[
            { l: "Mentions légales", href: "#" },
            { l: "Confidentialité", href: "#" },
            { l: "CGU", href: "#" },
            { l: "Contact", href: "mailto:hello@nutrisnap.ai" },
          ]}
        />
      </div>

      <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-8 text-xs text-white/40 md:flex-row md:items-center">
        <div>© {new Date().getFullYear()} NutriSnap SAS · Tous droits réservés.</div>
        <div>Fait avec rigueur à Paris · 75011</div>
      </div>
    </div>
  </footer>
);

const FooterCol = ({ title, links }) => (
  <div className="md:col-span-2">
    <div className="text-xs uppercase tracking-[0.22em] text-mint">{title}</div>
    <ul className="mt-4 space-y-2.5">
      {links.map((l) => (
        <li key={l.l}>
          <a
            href={l.href}
            className="text-sm text-white/65 transition-colors hover:text-white"
          >
            {l.l}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
