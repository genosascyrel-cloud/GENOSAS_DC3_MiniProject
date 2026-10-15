# Bohol Tourist Guide (Vue 3)

A single-page application for browsing tourist destinations in Bohol. It uses Vue 3, Vue Router, and Vite. The Manage Destinations page demonstrates Create, Read, Update, and Delete (CRUD) using browser localStorage.

## Requirements
- Node.js (current LTS recommended)
- npm

## Run the project
1. Extract this ZIP.
2. Open the `bohol-tourist-guide-arranged` folder in VS Code.
3. Open Terminal in VS Code.
4. Run `npm install`.
5. Run `npm run dev` and open the local URL printed in the terminal.

## Main folder structure
```text
bohol-tourist-guide-arranged/
├── public/                 # Public static files
├── src/
│   ├── assets/             # Images and bundled assets
│   ├── components/         # Reusable Vue components
│   ├── data/               # Initial destination records
│   ├── views/              # Pages used by Vue Router
│   ├── App.vue             # Shared layout and router view
│   └── main.js             # App setup and route definitions
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Pages
- Home
- Destinations
- Destination Details
- Manage Destinations (CRUD)
- Favorites
- Profile
- About

## CRUD demo
Open **Manage** in the navigation bar. Add, edit, and delete destination records. Records are stored in this browser's localStorage, not in a shared database.

## Build
Run `npm run build` to create a production build in `dist/`.
