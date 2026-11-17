# Paradise Nursery 🌿

A responsive online houseplant shop built with React, Vite, Redux Toolkit, and React Router.

## Features

- Landing page with Paradise Nursery branding and a **Get Started** button.
- About Us page describing the company.
- Product catalogue with **18 plants across 3 categories**.
- Product cards display images, names, descriptions, and prices.
- Add to Cart buttons become disabled after a product is added.
- Redux Toolkit cart state with `addItem`, `removeItem`, and `updateQuantity` reducers.
- Dynamic cart item count in the navigation bar.
- Shopping cart with item thumbnails, unit prices, line totals, quantity controls, and remove buttons.
- Dynamic order total and a checkout button that displays a Coming Soon message.
- Continue Shopping navigation.
- Responsive layout for desktop and mobile screens.

## Tech stack

- React 18
- Vite
- Redux Toolkit and React Redux
- React Router
- CSS
- Lucide React icons

## Getting started

Make sure Node.js (LTS) and npm are installed.

```bash
npm install
npm run dev
```

Open the local URL printed in your terminal (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── components/
│   ├── AboutUs.jsx
│   ├── CartItem.jsx
│   ├── Navbar.jsx
│   └── ProductList.jsx
├── data/
│   └── plants.js
├── redux/
│   ├── CartSlice.jsx
│   └── store.js
├── App.jsx
├── App.css
└── main.jsx
```

## Assignment file links

After pushing this project to a **public GitHub repository**, replace `YOUR-USERNAME` with your GitHub username in these URLs:

1. `https://github.com/YOUR-USERNAME/paradise-nursery/blob/main/README.md`
2. `https://github.com/YOUR-USERNAME/paradise-nursery/blob/main/src/components/AboutUs.jsx`
3. `https://github.com/YOUR-USERNAME/paradise-nursery/blob/main/src/App.css`
4. `https://github.com/YOUR-USERNAME/paradise-nursery/blob/main/src/App.jsx`
5. `https://github.com/YOUR-USERNAME/paradise-nursery/blob/main/src/redux/CartSlice.jsx`
6. `https://github.com/YOUR-USERNAME/paradise-nursery/blob/main/src/components/ProductList.jsx`
7. `https://github.com/YOUR-USERNAME/paradise-nursery/blob/main/src/components/CartItem.jsx`

These are URL templates, not live repository links. Publish the repository and verify each link before submitting.
