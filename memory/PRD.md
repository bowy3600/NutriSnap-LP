# NutriSnap — Investor Landing Page

## Original Problem Statement
> "i want create a modern designed landing page to showcase a new app called NutriSnap, it's an IA co-pilot health/performance app, i gave you the logo, i need same colors in the page. The page should be structured to showcase the app for futur investors, so the struture of the page should follow the best rules to create it."

## User Choices (Dec 2025)
- Value prop: Photo scan AI + complete health/performance coach
- Structure: Standard investor pitch (Hero → Problem → Solution → Market → Features → Traction → Business → Team → Roadmap → Contact)
- Numbers: placeholders (user will provide real figures later)
- Language: **French**
- Investor contact: **functional form persisted in MongoDB**

## Architecture
- **Frontend**: React 19 + Tailwind 3 + framer-motion + lucide-react. Single route `/` rendering composed sections.
- **Backend**: FastAPI + Motor (Mongo async). `/api/investor-contacts` POST/GET endpoints. Pydantic v2 with EmailStr.
- **Database**: MongoDB collection `investor_contacts`.
- **Design**: Dark theme `#050505` + mint green `#6EEAB1` (logo-matched). Cabinet Grotesk (display) + Manrope (body).

## Persona
- **Primary**: VC / family office / strategic health-tech investors scanning the page for: thesis fit, market size, traction, team, ask.
- **Secondary**: Press / partners scouting the brand.

## Done — Dec 2025
- Hero with logo, dual CTA, animated scan card, trust marquee
- Problem (3-card stats + market context)
- Solution (3-step flow + product mockup)
- Market (TAM/SAM/SOM concentric rings + animated bars)
- Features (bento grid with hero feature)
- Traction (KPI cards + animated growth chart)
- Business Model (3 tiers + unit economics strip)
- Team (4 founders/leads, grayscale → color hover)
- Roadmap (vertical timeline, Q-by-Q)
- Investor contact form → POST /api/investor-contacts (persisted)
- Footer
- 100% backend tests pass, 100% frontend smoke + e2e form submission

## Backlog (P1 — User-Supplied Data)
- Replace placeholder KPIs/users/MRR/market numbers with real figures
- Insert real founder photos & LinkedIn URLs
- Add real partner/incubator logos to marquee
- Add demo video to "Voir la démo" CTA
- Add PDF download once pitch deck PDF is provided

## Backlog (P2 — Enhancements)
- Lead notifications: forward investor contacts to email via SendGrid/Resend
- Add /investor-contacts admin dashboard (auth-gated)
- i18n EN/FR toggle for international VCs
- OG image + meta tags for LinkedIn shares
- Analytics (Plausible / GA4)
- Replace inline `<style>` in ContactForm with global stylesheet (test agent suggestion)
