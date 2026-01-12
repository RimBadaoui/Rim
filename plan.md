# AI Control Room Portfolio – Full Implementation Plan

## 1. Project Overview
**Goal:**  
Build a static, GitHub Pages–hosted personal portfolio for a college student applying to **Software Engineering internships**.  
The site should be **AI-themed, animated, creative, but recruiter-friendly**.

**Core Concept:**  
A sleek **“AI Control Room” dashboard** that presents the candidate’s profile, projects, experience, and leadership as system panels and logs—evoking a mission-control / developer-console aesthetic without feeling gimmicky.

**Constraints:**
- Static site only (no backend)
- GitHub Pages hosting
- Lightweight animations (performance-first)
- Accessible & mobile-friendly

---

## 2. Target Audience
- Software Engineering recruiters
- Hiring managers
- Technical interviewers
- Fellow engineers

Primary recruiter goals:
- Quickly assess skills
- See real projects
- Understand impact and growth
- Get contact info fast

---

## 3. High-Level Information Architecture
Single-page application with anchor-based navigation:

- `/` (Home / Overview)
- `#projects`
- `#experience`
- `#leadership`
- `#skills`
- `#contact`

(Optional future extension)
- `/projects/<project-name>.html` for deep dives

---

## 4. Visual Layout Specification

### 4.1 Left Rail (Persistent Sidebar)
**Position:** Fixed on desktop, collapsible on mobile

**Contents (Top → Bottom):**
- Circular profile image: `me.png`
- Name (large, bold)
- Short headline (1 line)
- Status badges:
  - SEEKING: Summer 2026 SWE Internship
  - LOCATION: MA / Remote
  - FOCUS: Human-centered software & AI
- Navigation links:
  - Overview
  - Projects
  - Experience
  - Leadership
  - Skills
  - Contact
- Footer icons:
  - GitHub
  - LinkedIn
  - Email

---

### 4.2 Main Dashboard Grid
Desktop: 12-column CSS grid  
Mobile: stacked card layout

**Row Layout:**
1. Overview Panel (8 cols) + System Log Panel (4 cols)
2. Projects Panel (12 cols)
3. Experience Panel (7 cols) + Skills Panel (5 cols)
4. Leadership Panel (7 cols) + Contact Panel (5 cols)

---

## 5. Core Panels & Content Requirements

### 5.1 Overview Panel
Purpose: quick personal positioning

**Content:**
- Short mission statement (2–3 lines)
- Current role/status
- Interests (SWE, AI, Policy, Human-centered tech)

---

### 5.2 System Log Panel (Animated Terminal)
Purpose: personality + storytelling

**Behavior:**
- Fake terminal-style log output
- Timed messages appear every 1–2 seconds

**Example messages:**
- `Booting portfolio interface...`
- `Loading projects module...`
- `Security principles detected: zero-knowledge`
- `User action recommended: explore projects`

**Implementation:**
- JS array of messages
- `setTimeout` or interval-based rendering
- Monospace font

---

### 5.3 Projects Panel (Highest Priority)
Purpose: show technical skill and impact

**Each Project Card Must Include:**
- Project title
- One-line value statement
- Tech stack chips
- 2–4 bullet points:
  - What was built
  - Problem solved
  - Impact or learning
- Optional image
- Buttons:
  - Live Demo (if available)
  - Code (GitHub)
  - Expand Details (accordion)

**Initial Projects:**
- Styles By Sheyu — Hair Salon Website
- Displaced Documents App (Fletcher IDEA Lab)

---

### 5.4 Experience Panel
Purpose: credibility & progression

**Entries:**
- Role
- Organization
- Date range
- 1–2 bullets highlighting responsibility + impact

---

### 5.5 Leadership Panel
Purpose: differentiate beyond coding

**Entries:**
- AI Safety Students Association (Board Member)
- Youth Program Coordinator
- Interfaith Ambassador

Focus on:
- Initiative
- Mentorship
- Policy + ethics exposure

---

### 5.6 Skills Panel
Purpose: quick skill scan

**Display:**
- Skill tags or grouped lists

**Categories:**
- Programming: HTML, CSS, JS, PHP, SQL, Node.js, C++
- Concepts: Databases, APIs, Web Architecture
- Languages: English, Spanish, Arabic

(Optional)
- Filter toggles: SWE / Web / Leadership

---

### 5.7 Contact Panel
Purpose: conversion

**Elements:**
- Email (click + copy)
- LinkedIn
- GitHub
- Resume PDF download

---

## 6. Animation & Interaction Specification

### Required Animations
- Panel entrance animations (fade + translate)
- Staggered child card entrances
- Active navigation highlighting on scroll
- Hover lift + glow on cards

### Optional Enhancements
- “CPU usage” bar (random CSS animation)
- “Latency” value updating every 2–3 seconds
- Subtle background gradient movement

### Performance Rules
- Use `IntersectionObserver`
- Respect `prefers-reduced-motion`
- No heavy canvas/WebGL

---

## 7. Accessibility Requirements
- Keyboard navigable
- Visible focus states
- High contrast text
- Reduced motion support
- Semantic HTML structure

---

## 8. Tech Stack Options

### Option A: Vanilla (Recommended for Simplicity)
- HTML
- CSS (Grid + Flexbox)
- JavaScript (ES6)

### Option B: Vite + React
- Component-based architecture
- Still fully static
- Deployed via GitHub Pages

**Recommendation:**  
Use **Vanilla** unless component complexity becomes high.

---

## 9. File Structure

### Vanilla Implementation

---

## 10. Data-Driven Content Model
All text/content should live in `content.json`:

```json
{
  "profile": {
    "name": "",
    "headline": "",
    "links": {}
  },
  "projects": [],
  "experience": [],
  "leadership": [],
  "skills": [],
  "systemLog": []
}

If you want, next I can:
- Write the **exact copy** for each panel
- Draft the **system log messages**
- Create a **starter HTML/CSS/JS scaffold**
- Or translate this into a **React + Vite task breakdown** for the junior dev
