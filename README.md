# Love Memories

This project uses a Mapbox map in the Journey page. To configure the map, create a `.env` file in the project root with your Mapbox token:

```env
VITE_MAPBOX_TOKEN=your_mapbox_token
```

The `.env` file is ignored by git and allows `src/pages/Journey.tsx` to read the token using `import.meta.env.VITE_MAPBOX_TOKEN`.

A small React + Vite application built to celebrate the journey of a couple. It showcases a timeline, gallery and interactive quiz using Tailwind CSS for styling.

## Prerequisites

- **Node.js** v18 or later
- **npm** v9 or later

## Setup

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Project Structure

```
src/
  components/     # Shared UI components (e.g. Navbar)
  pages/          # React pages for timeline, gallery, map journey and quiz
  data/           # Static JSON used by the quiz
  index.css       # Tailwind CSS entry
  main.tsx        # App entry point that mounts React
```

Other notable files include `vite.config.ts` for Vite configuration and `tailwind.config.js` for Tailwind setup. The `index.html` in the project root serves as the entry HTML page.

The application was bootstrapped with a Vite React + TypeScript template, making it quick to iterate and deploy.
