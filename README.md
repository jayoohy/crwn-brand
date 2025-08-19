# CRWN Clothing Store

A modern e-commerce web application built with **React 19**, **Redux**, **Vite**, **Firebase**, and **Stripe**.  
Inspired by the [Zero to Mastery](https://zerotomastery.io/) course, this project demonstrates a full-featured shopping experience with authentication, cart, checkout, payment integration, and PWA support.

---

## Features

- ⚡️ **React 19** + **Vite** for fast development and builds
- 🛒 **Redux Toolkit** for global state management (cart, user, categories)
- 🔥 **Firebase** for authentication and Firestore database
- 💳 **Stripe** integration for secure payments (via Netlify Functions)
- 🛍️ Product categories, previews, and detailed pages
- 🧩 Modular, component-based architecture with **TypeScript** and **styled-components**
- 🗂️ Persistent cart with **redux-persist**
- 🌐 Routing with **React Router v7**
- 🧪 **Jest** and **React Testing Library** for unit and integration tests
- 🦾 **Vite PWA** plugin for installable Progressive Web App
- 🧩 Modern hooks-based code (React, Redux, Stripe)
- 🛠️ Custom hooks, sagas, and utility functions
- 🖼️ SVG and image asset support
- 🧹 ESLint and Prettier for code quality

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/jayoohy/crwn-brand
cd crwn-brand
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add your keys:

```
VITE_API_KEY=your_firebase_api_key
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

- `VITE_API_KEY` is for Firebase.
- `VITE_STRIPE_PUBLISHABLE_KEY` is for Stripe.js in the frontend.
- `STRIPE_SECRET_KEY` is for backend payment processing (Netlify Function).

### 4. Run the app locally

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

### 5. Run Netlify Functions locally (for Stripe payments)

Install Netlify CLI if you haven't:

```bash
npm install -g netlify-cli
```

Then run:

```bash
netlify dev
```

This will proxy API requests to your local Netlify Functions.

---

## Project Structure

```
src/
  assets/             # Images and SVGs
  components/         # Reusable UI components (Button, Cart, ProductCard, etc.)
  routes/             # Page components and routing (Home, Shop, Checkout, Auth, etc.)
  store/              # Redux logic (actions, reducers, selectors, sagas, types)
  utils/              # Utility functions (firebase, stripe, test, etc.)
  main.jsx            # App entry point
  App.jsx             # Main app component
netlify/
  functions/          # Serverless functions (Stripe payment intent)
public/
  favicon.ico         # App icon
  manifest.webmanifest# PWA manifest (auto-generated)
  ...
__mocks__/
  svgMock.js          # Jest SVG asset mock
setupTests.js         # Jest setup file (polyfills, custom matchers)
jest.config.js        # Jest configuration
babel.config.js       # Babel configuration for Jest
vite.config.js        # Vite configuration (PWA, React, macros)
.env                  # Environment variables
```

---

## Testing

- **Unit and integration tests** are written with **Jest** and **React Testing Library**.
- Polyfills for browser APIs (`fetch`, `Response`, etc.) are provided in `setupTests.js` for Firebase compatibility.
- SVG and other static assets are mocked for Jest.
- Custom Redux store setup for testing components with providers.

Run all tests:

```bash
npm test
```

---

## Progressive Web App (PWA)

- Uses `vite-plugin-pwa` for service worker and manifest generation.
- App is installable on desktop and mobile.
- PWA assets are generated via `npm run generate-pwa-assets`.

---

## Deployment

This project is ready to deploy on [Netlify](https://www.netlify.com/):

- Push your code to GitHub.
- Connect your repo on Netlify.
- Set the following environment variables in Netlify dashboard:
  - `VITE_API_KEY`
  - `VITE_STRIPE_PUBLISHABLE_KEY`
  - `STRIPE_SECRET_KEY`
- Netlify will handle both static hosting and serverless functions.

---

## Development Notes

- **TypeScript** is used throughout for type safety.
- **Redux Saga** is used for handling async logic.
- **ESLint** and **Prettier** are configured for code quality.
- **Jest** config and Babel config are set up for React, TypeScript, and asset support.
- **Vite** config includes PWA, React, and macros plugins.

---

## Credits

- [Zero to Mastery](https://zerotomastery.io/) for the course inspiration
- [Stripe](https://stripe.com/) for payment processing
- [Firebase](https://firebase.google.com/) for authentication and database

---
