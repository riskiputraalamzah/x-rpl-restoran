# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Vite + React SPA, TypeScript, Tailwind CSS, Framer Motion, Supabase Auth (ready for credentials)

## Users

Clients, art directors, partners, and team members accessing the private digital portal of MONOLITH Media.

## Product Purpose

A dark luxury, architectural authentication gateway and client portal for MONOLITH Media. It provides a cinematic, memorable sign-in experience that reflects the studio's avant-garde design standards while maintaining effortless usability, responsive fluidity, and rigorous craft.

## Positioning

Unlike generic SaaS login pages with cookie-cutter purple gradients and flat cards, MONOLITH Media presents an architectural, dark luxury digital atelier experience featuring warm champagne illumination, refined editorial typography, and layered kinetic motion.

## Operating Context

Private client onboarding, creative asset reviews, project dashboards, and account management across desktop workstations, tablets, and mobile devices.

## Capabilities and Constraints

- Dedicated routes for `/login`, `/register`, `/forgot-password`, and `/dashboard`.
- Fluid route-level Framer Motion transitions with `AnimatePresence`.
- Layered architectural 3D visual on the hero side with interactive depth parallax and champagne ambient light leaks.
- WCAG AA contrast compliance, keyboard accessibility, and respect for `prefers-reduced-motion`.
- Prototype-first authentication with complete form validation (Zod + React Hook Form), loading states, and Supabase integration readiness.

## Brand Commitments

- **Brand Name:** MONOLITH Media
- **Identity & Tone:** Architectural, dark luxury, structured elegance, haute couture digital atelier.
- **Palette:** Deep Obsidian (`#08090D`), Charcoal Surface (`#11131B`), Input Field (`#151721`), Warm Champagne / Pale Bronze accent (`#E5C07B`), Emerald Success (`#22C55E`), Crimson Alert (`#EF4444`).
- **Typography:** Architectural Haute Serif (Cormorant Garamond / Cinzel) for titles and display statements, paired with crisp modern geometric Sans (Plus Jakarta Sans / Inter) for form controls and metadata.

## Evidence on Hand

- `docs/login-page.md` - Core requirements and component specifications.
- `docs/animasi-framermotion.md` - Animation choreography and Framer Motion rules.

## Product Principles

1. **Architectural Restraint:** Every glow, border, and transition must have purpose; no gratuitous decoration or trend-stacking.
2. **Tactile Craft:** Micro-interactions (focus states, hover scales, tap responses) must feel weighted and physical.
3. **Cinematic Motion:** Entrances and page transitions move with coordinated momentum, never jarring or sluggish.
4. **Resilience Across Breakpoints:** Flawless responsive behavior from 320px mobile screens to ultra-wide displays.
