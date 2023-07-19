# Test for Agile Pixel - Paloma - React + Tailwindcss (Vite)

![Paloma Test for Agile Pixel](https://res.cloudinary.com/drpcjt13x/image/upload/v1689720229/Proyectos/Paloma%20Test%20-%20Agile%20Pixel/paloma-test-astro_gt6ybl.jpg)

## 💻 Vite Starter Kit: Basics

Start by creating a new Vite project.

```
npm create vite@latest
```

Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Start your build process
Run your build process with npm run dev.

```
npm run dev
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── paloma-infinity.png
|   |   └── react.svg
│   ├── components/
│   │   └── Logo.jsx
|   |   └── MenuIcon.jsx
|   |   └── Navigation.jsx
│   └── App.css
|   └── App.jsx
|   └── index.css
|   └── main.jsx
└── index.html
│
└── package.json
```

Any static assets, like images, can be placed in the `src/assets/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:5173`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |
