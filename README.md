# Airbnb Listing Clone — Production Quality Web Application

A pixel-perfect, high-fidelity reproduction of an authentic luxury Airbnb listing page built with Next.js 14+ (App Router), TypeScript, Tailwind CSS, Lucide Icons, and Framer Motion.

---

## 🌟 Key Features & Parity Highlights

### 1. Visual & Interactive Parity
- **Sticky Top Navbar**: Airbnb logo, desktop pill search bar with dropdown popover, "Airbnb your home" CTA, language/currency modal trigger, and user profile menu with sub-routes.
- **Hero Photo Mosaic**: 5-photo responsive grid with subtle hover zoom and darkening effects, and a floating **"Show all 24 photos"** badge.
- **Accessible Lightbox Gallery**: Fullscreen modal with category filter tabs (*Infinity Pool, Living Room, Bedrooms, Kitchen, Terrace*), photo index counter (`i / 24`), thumbnail navigation strip, and keyboard arrow/Escape controls.
- **Header & Meta Bar**: Listing title, Guest Favorite laurel wreath badge, Superhost badge, star rating with review jump link, location jump link, Share modal, and wishlist Save toggle with interactive floating toast notification.
- **Left Content Column**:
  - Host quick info with Superhost badge avatar.
  - Authentic **Guest Favorite** banner with rating comparisons.
  - Property Highlights with crisp icons (*Dedicated workspace, Self check-in with smart lock, Superhost, Free cancellation*).
  - **AirCover** protection banner with full coverage modal.
  - Rich expandable property description with **"Show more"** modal.
  - **Sleeping Arrangements** suite cards with bed icons.
  - 10 Featured Amenities + **"Show all 45 amenities"** modal with category grouping and real-time search filter.
  - **Dual-Month Interactive Calendar** with check-in/checkout date range selection, night calculation, and clear dates action.
- **Right Column: Sticky Floating Reservation Widget**:
  - Real-time price breakdown (`$650 x N nights`, cleaning fee, 14% service fee, 12% taxes, weekly discount).
  - Guest counter stepper dropdown (*Adults, Children, Infants, Pets*).
  - **"Reserve" CTA** with Airbnb gradient hover effect, confetti celebration (`canvas-confetti`), and **Reservation Confirmation Itinerary Modal** with receipt download simulation.
  - "Report this listing" modal.
- **Reviews Section**:
  - 4.98 Overall rating with laurel wreath.
  - **6-Category progress bar breakdown** (*Cleanliness, Accuracy, Communication, Location, Check-in, Value*).
  - 2-column verified guest review cards with host response threads.
  - **"Show all 128 reviews"** modal with search filter.
- **Interactive Location Map**: Custom styled map canvas with pulsing price marker, landmark indicators, and Map / Satellite view toggle.
- **Host Profile Section**: Comprehensive host stats (128 reviews, 4.98 rating, 7 years hosting), bio, co-host badges, and **"Message Host"** modal.
- **Things to Know Policies**: 3-column house rules, safety features, and cancellation policy modals.
- **Mobile Responsive Floating Bar**: Bottom reservation bar for mobile devices.
- **Comprehensive Multi-Column Footer**: Future getaway inspiration tabs, support links, currency & language selector, and social links.

---

## 🛠 Tech Stack

- **Framework**: Next.js 14+ / React 19 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations & Micro-interactions**: Framer Motion & Canvas Confetti
- **Date Math & Formatting**: date-fns
- **Language**: TypeScript

---

## 📐 System Architecture & Scaling Strategy

Included in `architecture/`:
1. `architecture/vacation-rental-marketplace-architecture.svg`: High-resolution vector diagram illustrating edge caching, API gateway, microservices, Redlock concurrency locking, sharded PostgreSQL, Elasticsearch geospatial clustering, and Kafka event pipelines.
2. `architecture/SYSTEM_ARCHITECTURE.md`: In-depth 8-section technical blueprint detailing capacity planning, double-booking prevention, geospatial discovery, and multi-region disaster recovery.

---

## 🤖 AI Development Workflow & Prompt Logs

Included in:
- `.agents/skills/airbnb-quality/SKILL.md`: UI/UX design tokens and accessibility guidelines.
- `.agents/skills/production-arch/SKILL.md`: Marketplace scaling standards.
- `.agents/rules/airbnb-rules.md`: Workspace code quality rules.
- `PROMPT_WORKFLOW.md`: Complete sequence of prompts and AI agent workflow steps.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18+ or 20+
- npm 9+ or 10+

### Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in your browser
http://localhost:3000
```

### Production Build
```bash
npm run build
npm run start
```
