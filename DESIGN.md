---
name: MONOLITH Media
description: Architectural dark luxury client portal and authentication gateway
colors:
  obsidian-ground: "#08090D"
  charcoal-surface: "#11131B"
  input-surface: "#151721"
  surface-hover: "#1E212E"
  champagne-accent: "#E5C07B"
  champagne-light: "#F3DC9E"
  champagne-dark: "#C69F54"
  champagne-glow: "rgba(229, 192, 123, 0.18)"
  text-primary: "#FFFFFF"
  text-muted: "#9295A5"
  text-subtle: "#56596A"
  success: "#22C55E"
  error: "#EF4444"
  border-subtle: "rgba(255, 255, 255, 0.08)"
  border-champagne: "rgba(229, 192, 123, 0.25)"
typography:
  display:
    fontFamily: "Cinzel, Cormorant Garamond, serif"
    fontSize: "2.75rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Cinzel, serif"
    fontSize: "2rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  label:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.champagne-accent}"
    textColor: "{colors.obsidian-ground}"
    rounded: "{rounded.md}"
    padding: "14px 24px"
  input-field:
    backgroundColor: "{colors.input-surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "14px 16px"
---

# Design System : MONOLITH Media

## Overview

MONOLITH Media's design language embodies architectural dark luxury, structured elegance, and haute couture digital craft. Built for executive clients, art directors, and creative partners, the interface rejects generic purple SaaS gradients in favor of deep obsidian stone, warm champagne illumination, and museum-grade typographic composure.

## Colors

- **Obsidian Ground (`#08090D`):** The deep monolithic foundation of all surfaces.
- **Charcoal Surface (`#11131B`):** Elevation layer for authentication cards and modal containers.
- **Input Surface (`#151721`):** Recessed form control background with high contrast against white text.
- **Champagne Accent (`#E5C07B`):** The signature warm gold luminescence used for primary actions, focus rings, and focal geometry.
- **Pale Bronze / Champagne Dark (`#C69F54`):** Secondary depth tones for tactile gradients.
- **Muted Text (`#9295A5`):** High legibility secondary copy conforming to WCAG AA 4.5:1 contrast standards.

## Typography

- **Architectural Display & Headings:** `Cinzel` & `Cormorant Garamond`. Conveys permanence, classical proportion, and luxury stature.
- **Interface & Form Controls:** `Plus Jakarta Sans`. Clean, precise geometric sans-serif that ensures effortless scanability.
- **Technical Metadata & Telemetry:** Monospace monospace styling with wide tracking for coordinate badges and cryptographic status.

## Layout

- **Split Desktop Composition:** 50% architectural 3D visual showcase on the left, 50% focused authentication card on the right.
- **Fluid Breakpoints:** Collapses gracefully to a focused single-column experience on tablet and mobile viewports with full 44px minimum touch targets.
- **No Overflow Guarantee:** Strict container bounds prevent any horizontal spill across 320px to 4K displays.

## Elevation & Depth

- **Tactile Shadows:** `box-shadow: 0 30px 90px -20px rgba(0, 0, 0, 0.85)` for volumetric elevation.
- **Hairline Seams:** 1px subtle borders (`rgba(255, 255, 255, 0.08)`) and directional gold highlights (`rgba(229, 192, 123, 0.25)`).
- **Ambient Lighting:** Multi-layered background blurs providing subtle ambient warmth without distracting from readable form text.

## Shapes

- **Corner Geometry:** 24px (`rounded-3xl`) for primary structural containers; 12px (`rounded-xl`) for interactive inputs and buttons.
- **Monolith Geometry:** Multi-faceted angular SVG prism with 3D coordinate parallax.

## Components

- **EmailInput & PasswordInput:** Feature animated focus states, password visibility toggling, validation indicators, and custom gold caret styling.
- **LoginButton:** Tactile button with idle gradient, hover sheen, micro-tap scale response, animated loader, and success check states.
- **SocialLogin:** Custom styled Google Workspace and Client SSO integration buttons.
- **AuthFeedback:** Animated toast / alert banners driven by Framer Motion's `AnimatePresence`.

## Do's and Don'ts

### Do
- Maintain high contrast ratios for all input text and secondary labels.
- Use Framer Motion's spring transitions for natural physical momentum.
- Respect `prefers-reduced-motion` across all kinetic components.
- Keep layout balanced and spacious.

### Don't
- Do NOT use generic purple-and-black cyber gradients.
- Do NOT use em dashes (`—`) in user-facing copy.
- Do NOT place eyebrow badges above primary headings.
- Do NOT use fake testimonials or unverified statistics.
