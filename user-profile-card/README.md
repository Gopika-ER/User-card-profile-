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
└── src/
    ├── main.jsx        # mounts App into the page
    ├── App.jsx         # renders the list of UserCard components
    ├── UserCard.jsx    # the reusable card component
    └── index.css       # all styling
```

## Run it in VS Code

1. Open this folder in VS Code.
2. Open a terminal (`` Ctrl+` ``) and install dependencies:
   ```
   npm install
   ```
3. Start the dev server:
   ```
   npm start
   ```
4. Open the link shown in the terminal (usually `http://localhost:5173`) in your browser.

## Customize

To add another user, just add another object to the `users` array in `App.jsx` — no extra JSX needed, since the component is mapped automatically.
