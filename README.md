# Expense AI

Expense AI is an intelligent expense tracking app with smart categorization, AI-powered insights, secure authentication, and interactive charts.

## Table of Contents

-   [Getting Started](#getting-started)
-   [Features](#features)
    -   [Authentication](#authentication)
    -   [Database & Backend](#database--backend)
    -   [AI-Powered Categorization](#ai-powered-categorization)
    -   [Charts & Visualization](#charts--visualization)
-   [Tech Stack & Rationales](#tech-stack--rationales)
-   [Project Structure](#project-structure)

## Getting Started

To run the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## Features

### Authentication

-   **Clerk Integration:** Secure sign-in with providers like GitHub, Google, and more. Authentication is simple and robust using Clerk’s drop-in components.

### Database & Backend

-   **Neon (PostgreSQL) Cloud Database:** Highly scalable and cloud-hosted.
-   **Prisma (ORM):** All database queries and models managed with Prisma for type-safety and productivity.
-   **Custom DB Connection Logic:** The `/lib/db.ts` file ensures the connection to your database is established efficiently.

### AI-Powered Categorization

-   **OpenRouter Platform:** Utilizes the OpenAI npm package routed through OpenRouter.
-   **Free AI Model:** Uses `deepseek/deepseek-chat-v3-0324:free` endpoint for categorizing expenses automatically.
-   **Intelligent Suggestions:** The app suggests optimal expense categories using AI, reducing manual entry and errors.

### Charts & Visualization

-   **Bar Charts:** Uses `chart.js` and `react-chartjs-2` to visually display expenses and insights.
-   **Interactive Data:** Instantly see your spending trends and category breakdowns.

---

## Tech Stack & Rationales

| Technology                     | Why It Was Chosen                                                                             |
| :----------------------------- | :-------------------------------------------------------------------------------------------- |
| **Next.js 15**                 | Modern React framework with support for App Router, SSR/SSG, and great developer tooling.     |
| **React 19**                   | Latest stable version; enables concurrent features, hooks, and the best developer experience. |
| **Tailwind CSS 4**             | Utility-first CSS framework allows rapid, maintainable, and responsive UI development.        |
| **Prisma & Neon**              | Prisma provides type-safe, robust data access; Neon offers free, scalable Postgres hosting.   |
| **Clerk**                      | Hassle-free authentication with social sign-in and strong security out-of-the-box.            |
| **Chart.js & react-chartjs-2** | Easy chart integration, great for dashboards and visual trend breakdowns.                     |
| **OpenRouter AI Platform**     | Enables intelligent automation for expense categorization using free, modern AI models.       |

---

## Project Structure

```
/lib              # Database connection logic (db.ts)
/app              # Next.js app directory
/components       # UI components (Navbar, Footer, etc.)
/contexts         # React context providers (Theme, etc.)
```

---

## How Expense AI Stands Out

-   Simple, modern authentication flow
-   Expansive cloud-powered backend
-   AI-driven expense category suggestions
-   Beautiful, interactive charts
-   Clean codebase leveraging latest Next.js, React, and Tailwind CSS

---
