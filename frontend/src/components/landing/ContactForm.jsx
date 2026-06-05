import React, { useState } from "react";
import axios from "axios";
import { Section } from "./Section";
import { NS } from "@/constants/testIds";
import { ApertureMark } from "./Brand";
import { ArrowUpRight, Loader2, CheckCircle2 } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const ticketOptions = [
  "< 50k€",
  "50k€ – 250k€",
  "250k€ – 1M€",
  "1M€ – 5M€",
  "> 5M€",
];

export const ContactForm = () => {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    organization: "",
    ticket_size: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, ok: false, error: "" });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, ok: false, error: "" });
    try {
      const payload = {
        full_name: form.full_name.trim(),
        email: form.email.trim(),
        organization: form.organization.trim() || null,
        ticket_size: form.ticket_size || null,
        message: form.message.trim(),
      };
      await axios.post(`${API}/investor-contacts`, payload);
      setStatus({ loading: false, ok: true, error: "" });
      setForm({
        full_name: "",
        email: "",
        organization: "",
        ticket_size: "",
        message: "",
      });
    } catch (err) {
      const msg =
        err?.response?.data?.detail ||
        "Une erreur est survenue. Réessayez dans un instant.";
      setStatus({ loading: false, ok: false, error: String(msg) });
    }
  };

  return (
    <Section
      id="section-contact"
      testId={NS.sectionContact}
      eyebrow="Contact investisseur"
      title="Parlons de la prochaine étape."
      subtitle="Vous êtes investisseur, family office, ou stratégique health-tech ? Laissez-nous vos coordonnées — nous vous transmettons le pitch deck complet sous 48h."
    >
      <div className="grid gap-10 lg:grid-cols-12">
        {/* Left — info */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-white/10 bg-[#0c0c0d] p-7">
            <ApertureMark className="h-8 w-8" />
            <h3 className="mt-5 font-display text-2xl font-semibold text-white">
              Tour de table en cours
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Série Seed de <span className="text-white">2,5M€</span> ouverte
              jusqu'au T2 2026. Tickets minoritaires bienvenus, BPI/EIC
              participations en cours de validation.
            </p>

            <div className="mt-6 grid gap-3">
              <Info k="Lead investor" v="Annoncé · soft circle 60%" />
              <Info k="Use of funds" v="Équipe IA · acquisition US · brevet vision" />
              <Info k="Closing prévu" v="Avril 2026" />
            </div>

            <div className="mt-7 border-t border-white/10 pt-5 text-xs text-white/45">
              Pour un échange direct&nbsp;:{" "}
              <a
                href="mailto:investors@nutrisnap.ai"
                className="text-mint hover:underline"
              >
                investors@nutrisnap.ai
              </a>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="lg:col-span-7">
          <form
            data-testid={NS.contactForm}
            onSubmit={submit}
            className="grid gap-4 rounded-2xl border border-white/10 bg-[#0c0c0d] p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nom complet *">
                <input
                  data-testid={NS.contactInputName}
                  required
                  type="text"
                  value={form.full_name}
                  onChange={update("full_name")}
                  className="ns-input"
                  placeholder="Jane Doe"
                />
              </Field>
              <Field label="Email *">
                <input
                  data-testid={NS.contactInputEmail}
                  required
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  className="ns-input"
                  placeholder="jane@fund.vc"
                />
              </Field>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Organisation">
                <input
                  data-testid={NS.contactInputOrg}
                  type="text"
                  value={form.organization}
                  onChange={update("organization")}
                  className="ns-input"
                  placeholder="Fund / Family Office"
                />
              </Field>
              <Field label="Ticket envisagé">
                <select
                  data-testid={NS.contactInputTicket}
                  value={form.ticket_size}
                  onChange={update("ticket_size")}
                  className="ns-input"
                >
                  <option value="">— Sélectionner —</option>
                  {ticketOptions.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
            <Field label="Message *">
              <textarea
                data-testid={NS.contactInputMessage}
                required
                rows={5}
                minLength={10}
                value={form.message}
                onChange={update("message")}
                className="ns-input resize-none"
                placeholder="Présentez-vous brièvement, votre thèse d'investissement, et ce qui vous intéresse chez NutriSnap."
              />
            </Field>

            <button
              data-testid={NS.contactSubmit}
              type="submit"
              disabled={status.loading}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-mint px-6 py-3 text-sm font-semibold text-black shadow-[0_0_24px_rgba(110,234,177,0.35)] transition-all hover:shadow-[0_0_44px_rgba(110,234,177,0.55)] disabled:opacity-60"
            >
              {status.loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <ArrowUpRight size={16} />
              )}
              {status.loading ? "Envoi en cours…" : "Recevoir le pitch deck"}
            </button>

            {status.ok && (
              <div
                data-testid={NS.contactSuccess}
                className="mt-2 flex items-start gap-3 rounded-xl border border-mint/30 bg-mint/10 p-4 text-sm text-white"
              >
                <CheckCircle2 size={18} className="mt-0.5 text-mint" />
                Merci — votre demande est bien reçue. Nous revenons vers vous sous
                48h avec le pitch deck complet.
              </div>
            )}
            {status.error && (
              <div
                data-testid={NS.contactError}
                className="mt-2 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200"
              >
                {status.error}
              </div>
            )}
          </form>
        </div>
      </div>

      {/* tiny CSS for inputs */}
      <style>{`
        .ns-input {
          width: 100%;
          background: #0a0a0b;
          border: 1px solid rgba(255,255,255,0.10);
          color: #fff;
          border-radius: 12px;
          padding: 12px 14px;
          font-size: 14px;
          outline: none;
          transition: border-color 160ms ease, box-shadow 160ms ease;
        }
        .ns-input::placeholder { color: rgba(255,255,255,0.35); }
        .ns-input:focus {
          border-color: var(--ns-mint);
          box-shadow: 0 0 0 3px rgba(110,234,177,0.15);
        }
      `}</style>
    </Section>
  );
};

const Field = ({ label, children }) => (
  <label className="block">
    <span className="mb-1.5 block text-[11px] uppercase tracking-[0.18em] text-white/55">
      {label}
    </span>
    {children}
  </label>
);

const Info = ({ k, v }) => (
  <div className="flex items-center justify-between text-sm">
    <span className="text-white/45">{k}</span>
    <span className="text-white">{v}</span>
  </div>
);
