# CRWN Clothing Store

A modern e-commerce web application built with **React**, **Redux**, **Vite**, and **Stripe** for payments.  
This project is inspired by the [Zero to Mastery](https://zerotomastery.io/) course and demonstrates a full-featured shopping experience with authentication, cart, checkout, and payment integration.

---

## Features

- ⚡️ **React 19** with Vite for fast development and builds
- 🛒 **Redux** for global state management (cart, user, categories)
- 🔥 **Firebase** for authentication and data storage
- 💳 **Stripe** integration for secure payments (via Netlify Functions)
- 🛍️ Product categories, previews, and detailed pages
- 🛠️ Modular, component-based architecture with styled-components
- 🗂️ Persistent cart with redux-persist
- 🧩 Modern hooks-based code (React, Redux, Stripe)
- 🌐 Routing with React Router v7

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

The app will be available at [http://localhost:5173](http://localhost:5173) (or as shown in your terminal).

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
  components/         # Reusable UI components
  routes/             # Page components and routing
  store/              # Redux logic (actions, reducers, selectors, sagas)
  utils/              # Utility functions (firebase, stripe, etc.)
  assets/             # Images and SVGs
  main.jsx            # App entry point
  App.jsx             # Main app component
netlify/
  functions/          # Serverless functions (Stripe payment intent)
```

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

## Credits

- [Zero to Mastery](https://zerotomastery.io/) for the course inspiration
- [Stripe](https://stripe.com/) for payment processing
- [Firebase](https://firebase.google.com/) for authentication and database

---
