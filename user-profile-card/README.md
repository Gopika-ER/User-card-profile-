# User Profile Card

A React project demonstrating **props**, **conditional rendering**, and **mapping over data** to build reusable profile card UI components.

## How it works

- **`UserCard.jsx`** — a reusable component that receives props: `name`, `city`, `description`, `image`, `online`, and `skills`.
- **Conditional rendering** — the `online` prop decides whether the badge says `ONLINE` (green) or `OFFLINE` (orange).
- **Mapping over data** — `App.jsx` keeps an array of user objects and maps over it to render a `UserCard` for each one; inside `UserCard.jsx`, the `skills` array is mapped into skill tags.

## Project structure

```
user-profile-card/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
└── src/
    ├── main.jsx        # mounts App into the page
    ├── App.jsx         # renders the list of UserCard components
    ├── UserCard.jsx    # the reusable card component
    └── index.css       # all styling
```

## Run it locally

```
npm install
npm start
```

Then open the link shown in the terminal (usually `http://localhost:5173`).

## Upload to GitHub

If you don't already have a repo, create one on github.com first (don't add a README there — you already have one). Then, from inside this project folder in a terminal:

```bash
git init
git add .
git commit -m "Initial commit: user profile card project"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your actual GitHub username and repo name.

If the repo already exists locally with a remote set up, you only need:

```bash
git add .
git commit -m "Add Sarah and Michael"
git push
```

## Deploy it live (optional)

Once it's on GitHub, you can deploy for free with **Vercel** or **Netlify**:

- **Vercel**: go to vercel.com → New Project → Import your GitHub repo → it auto-detects Vite → Deploy.
- **Netlify**: go to netlify.com → Add new site → Import from GitHub → Build command: `npm run build`, Publish directory: `dist` → Deploy.

## Customize

To add another user, just add another object to the `users` array in `App.jsx` — no extra JSX needed, since the component is mapped automatically.
