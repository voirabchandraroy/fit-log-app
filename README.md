# FitLog — Workout Library

🔗 **Live Demo:** [https://fit-log-app-six.vercel.app/](https://fit-log-app-six.vercel.app/)
📦 **GitHub Repository:** [https://github.com/voirabchandraroy/fit-log-app](https://github.com/voirabchandraroy/fit-log-app)

## Description

FitLog is a dark-themed, no-nonsense gym companion built with Next.js. Users can browse a library of workouts, view detailed instructions for each lift, add exercises to today's plan or save them for later, and track their daily training progress — all in a fast, responsive, and modern interface.

## Technologies Used

- **Next.js** (App Router) — framework and page navigation
- **React** with **TypeScript** — component-based UI
- **Tailwind CSS** — styling and full responsiveness
- **React Context API** — global state management (Today's Plan & Saved list)
- **React Toastify** — toast notifications
- **REST API** — dynamic workout data (`https://api.abcz.workers.dev/api/fitlog`)

## Key Features

- **Exercise Library** — Browse all workouts in a responsive card grid (3-column on desktop, collapsing on tablet/mobile), each showing an image, muscle-group tags, equipment, duration, calories, and rating.

- **Exercise Detail Page** — A dedicated page per workout with a full description, category tags, a key-specs table (equipment, difficulty, sets, reps, duration, calories, rating), and step-by-step instructions.

- **Today's Plan & Saved Workouts** — Add any workout to today's plan or save it for later with one click, complete with duplicate prevention, a 5-lift daily cap, and toast notifications for every action.

- **My Plan Dashboard** — A live-updating stats bar (total exercises, minutes, calories), tabbed views for "Today's Plan" and "Saved," a sort-by dropdown (Duration / Calories / Rating), and per-item actions: View Details, Mark as Done, and Remove.

- **Fully Responsive & Polished UX** — A custom hero banner with a scroll-to-library CTA, a responsive navbar with active-link highlighting and live plan/saved counters, loading states while data is fetched, a custom 404 page, and a dark, consistent design system across every screen size.

## Getting Started

1. **Clone the repository**

   `git clone https://github.com/voirabchandraroy/fit-log-app.git`

   `cd fit-log-app`

2. **Install dependencies**

   `npm install`

3. **Run the development server**

   `npm run dev`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API

Exercise data is fetched from: `https://api.abcz.workers.dev/api/fitlog`

## License

This project was built for educational
