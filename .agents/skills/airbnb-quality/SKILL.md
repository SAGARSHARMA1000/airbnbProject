---
name: airbnb-quality
description: Quality assurance, pixel fidelity, accessibility, and interaction standards for the Airbnb listing clone.
---

# Airbnb UI/UX Quality & Pixel Fidelity Standards

This skill ensures adherence to production Airbnb design patterns and visual precision.

## Core Design Principles
1. **Typography & Spacing**:
   - Font family: Circular / Inter / SF Pro with tight letter spacing.
   - Text color hierarchy: `#222222` (primary), `#717171` (secondary), `#B0B0B0` (muted).
   - Base borders: `1px solid #DDDDDD` or `rgb(221, 221, 221)`.
   - Brand color: `#FF385C` (Airbnb Rausch), `#E00B41`, `#D70466`.

2. **Component Architecture**:
   - Modular isolation: Header, HeroMosaic, LightboxGallery, HostInfo, Amenities, DatePickerCalendar, StickyReservationCard, ReviewGrid, InteractiveMap, HostProfile, ThingsToKnow, Footer.
   - Strict TypeScript interfaces with zero `any` types.

3. **Accessibility (a11y) & Interaction**:
   - Full keyboard navigation (focus traps on open modals, Escape key dismissal, Arrow keys in photo gallery).
   - High contrast ratios (> 4.5:1 for standard text).
   - Screen-reader friendly `aria-label`, `role="dialog"`, `aria-modal="true"`.

4. **Animations & Micro-interactions**:
   - Smooth hover scaling on photo gallery cards (`scale-105` with `transition duration-300`).
   - Sticky calculation widget with elevation transitions (`shadow-xl`).
   - Confetti burst on successful booking confirmation.
