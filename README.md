
# TravelTrucks · Campers (Test Task)

Frontend app built with **Vite + React + TypeScript**, **Redux Toolkit**, **React Router**, and **Axios**.

## Tech
- Vite + React + TS
- Redux Toolkit store (campers, filters, favorites, ui)
- React Router routes: `/`, `/catalog`, `/catalog/:id`
- Axios with base URL: `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io`
- CSS (vanilla + CSS variables), clean and easily skinnable to match Figma

## Features (per task)
- Home page: banner + **View Now** CTA -> navigates to catalog
- Catalog page:
  - Camper list with **Load More** (pagination with `?page` and `?limit`)
  - Filters: location (text), **body type** (single), transmission (single), and features (multi: AC, kitchen, bathroom, TV, radio, refrigerator, microwave, gas, water)
  - **Apply filters** resets previous results and fetches from page 1
  - Favorite campers (persisted in `localStorage`)
  - Card shows price formatted as `8000,00`
  - **Show more** opens `/catalog/:id` in a new tab
- Camper details page:
  - Title, rating (stars), location
  - Photo gallery
  - Specs (form, transmission, engine, AC, bathroom, kitchen, TV, radio, refrigerator, microwave, gas, water, length, width, height, tank, consumption)
  - Reviews list (5-star scale)
  - Booking form with success toast

> If some filters are not supported by the backend as query params, the app still works (server returns a broader list); you can add extra client-side filtering if needed.

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

## Project structure
```
src/
  api/           # axios instance + typed API
  components/    # UI atoms/molecules
  pages/         # route pages
  store/         # redux slices + hooks
  utils/         # helpers
```

---

**Task reference**: Implements requirements from the provided test task PDF and connects to the given MockAPI backend.
