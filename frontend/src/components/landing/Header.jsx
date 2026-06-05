import React, { useState } from "react";
import { Logo } from "./Brand";
import { NS } from "@/constants/testIds";
import { Menu, X } from "lucide-react";

const NAV = [
  { id: "section-problem", label: "Problème", testId: NS.headerNavProblem },
  { id: "section-solution", label: "Solution", testId: NS.headerNavSolution },
  { id: "section-market", label: "Marché", testId: NS.headerNavMarket },
  { id: "section-team", label: "Équipe", testId: NS.headerNavTeam },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <button
          onClick={() => scrollTo("section-hero")}
          data-testid={NS.headerLogo}
          className="flex items-center"
          aria-label="NutriSnap"
        >
          <Logo className="h-7 w-auto" />
        </button>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((n) => (
            <button
              key={n.id}
              data-testid={n.testId}
              onClick={() => scrollTo(n.id)}
              className="text-sm text-white/70 transition-colors hover:text-mint"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            data-testid={NS.headerCtaInvestor}
            onClick={() => scrollTo("section-contact")}
            className="hidden rounded-full bg-mint px-4 py-2 text-sm font-semibold text-black shadow-[0_0_24px_rgba(110,234,177,0.35)] transition-all hover:shadow-[0_0_36px_rgba(110,234,177,0.55)] md:inline-flex"
          >
            Contact investisseur
          </button>
          <button
            data-testid={NS.headerMobileToggle}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
            aria-label="Menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-black/90 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-left text-sm text-white/80 hover:text-mint"
              >
                {n.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("section-contact")}
              className="mt-2 rounded-full bg-mint px-4 py-2 text-center text-sm font-semibold text-black"
            >
              Contact investisseur
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
