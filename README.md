
# TravelTrucks · Campers (Test Task)

Frontend app built with **Vite + React + TypeScript**, **Redux Toolkit**, **React Router**, and **Axios**.

## Tech
- Vite + React + TS
- Redux Toolkit store (campers, filters, favorites, ui)
- React Router routes: `/`, `/catalog`, `/catalog/:id`
- Axios with base URL: `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io`
- CSS (vanilla + CSS variables), clean and easily skinnable to match Figma

## Getting Started

```bash
# install
npm i

# run
npm run dev

# build
npm run build
npm run preview
```

Open http://localhost:5173

## Deployment
You can deploy to **Vercel** or **Netlify** with default settings for Vite apps.
- Vercel: framework = Vite, build command = `npm run build`, output = `dist`
- Netlify: build command = `npm run build`, publish directory = `dist`

## Notes
- Favorites persist across refreshes via localStorage.
- Loader is shown during async requests.
- Routing works on the live site (use SPA fallback or Vercel default).

