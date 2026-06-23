# pSkyro Labs

> NOT BUILT TO BLEND IN

Marketing site for pSkyro Labs — a design & technology company.

## Stack
- React (JSX) + Vite
- React Router (SPA routing)
- Tailwind CSS
- lucide-react (icons)
- Animations: CSS keyframes + IntersectionObserver (reduced-motion aware)

## Structure
```
src/
  components/   Nav, Footer, CTA, Wordmark, Reveal, ScrollToTop  (shared)
  pages/        Home, About, Services, Projects, Contact
  App.jsx       Router + layout (Nav + Routes + Footer)
```
Nav and Footer live in the layout, so only page content swaps on navigation.

## Routes
| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/services` | Services (stub) |
| `/projects` | Projects (stub) |
| `/contact` | Contact (stub) |

## Brand
| Token | Hex | Use |
|---|---|---|
| `skyro` | #2400C2 | Primary brand, highlights |
| `launch` | #FFF500 | Accent, emphasis, callouts |
| `studio` | #000000 | Typography, contrast |
| white | #FFFFFF | Backgrounds |

## Breakpoints
`sm md lg xl 2xl` + custom `3xl` (1920) `4xl` (2560) `5xl` (3200). Holds 300px to 3500px.

## Run
```bash
npm install
npm run dev
```

## Pages
- [x] Home
- [x] About Us
- [x] Services
- [~] Projects (skipped for now)
- [x] Contact Us
