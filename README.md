## Asynchronous JavaScript Projects

A collection of five focused mini-apps built with **HTML**, **CSS**, and **vanilla JavaScript** to practice asynchronous programming using the `fetch` API and `async/await`.

Each project calls a public API from `freeapi.app` and renders results in the browser. A hub page (`index.html`) links to all five projects from one place.

🔗 **Live Demo:** [async-js-projects.netlify.app](https://async-js-projects.netlify.app/)

---

## Tech Stack

- **HTML5** — Semantic structure and markup.
- **CSS3** — Responsive grid layouts, custom properties, hover effects, and animations.
- **JavaScript (ES6+)** — `async/await`, `fetch`, DOM manipulation, event handling, and client-side filtering.
- **Public APIs** — All data loaded from `https://api.freeapi.app`.
- **Google Fonts** — Syne (headings) + Inter (body) across all projects.
- **Deployment** — Hosted on **Netlify**.

---

## Project Structure

```text
async-js-projects/
├─ index.html                    # ← Hub page — links to all 5 projects
├─ product-fetcher/
│  ├─ index.html
│  ├─ app.js
│  └─ style.css
├─ video-explorer/
│  ├─ index.html
│  ├─ app.js
│  └─ style.css
├─ quote-generator/
│  ├─ index.html
│  ├─ app.js
│  └─ style.css
├─ joke-generator/
│  ├─ index.html
│  ├─ app.js
│  └─ style.css
├─ books-explorer/
│  ├─ index.html
│  ├─ app.js
│  └─ style.css
└─ README.md
```

Open `index.html` in the root to navigate all five projects from the hub page, or visit the [live demo](https://async-js-projects.netlify.app/) directly.

---

## Color Themes

Each project has a dedicated dark color theme matched to its content:

| Project         | Theme Color     | Rationale                       |
| --------------- | --------------- | ------------------------------- |
| Product Fetcher | Emerald green   | Commerce, growth, fresh         |
| Video Explorer  | Crimson red     | YouTube brand association       |
| Quote Generator | Violet / indigo | Literary, thoughtful, editorial |
| Joke Generator  | Amber / orange  | Playful, warm, energetic        |
| Books Explorer  | Burnt orange    | Library warmth, paper, print    |

---

## Individual Projects

### 1. Product Fetcher (`product-fetcher`)

- Fetches random products from `https://api.freeapi.app/api/v1/public/randomproducts`.
- Renders a numbered list of product titles with a left-accent hover animation.
- Theme: **Emerald green** on deep dark background.
- 🔗 [Live](https://async-js-projects.netlify.app/product-fetcher/)

### 2. Video Explorer (`video-explorer`)

- Loads videos from `https://api.freeapi.app/api/v1/public/youtube/videos`.
- Displays thumbnail, title, and channel name as clickable cards.
- Includes a search input that filters by title on the client.
- Shows a spinner while fetching; graceful empty state on no results.
- Theme: **Crimson red** on near-black background.
- 🔗 [Live](https://async-js-projects.netlify.app/video-explorer/)

### 3. Quote Generator (`quote-generator`)

- Fetches a random quote from `https://api.freeapi.app/api/v1/public/quotes/quote/random`.
- Renders quote text and author in a centered card with an italic serif font.
- Three action buttons: **New Quote**, **Copy to Clipboard**, **Share on X (Twitter)**.
- Theme: **Violet / indigo** on deep dark background.
- 🔗 [Live](https://async-js-projects.netlify.app/quote-generator/)

### 4. Joke Generator (`joke-generator`)

- Fetches an array of jokes from `https://api.freeapi.app/api/v1/public/randomjokes`.
- Caches all jokes in memory; delivers one at random on each button click.
- New joke cards pop in with a spring animation.
- Theme: **Amber / orange** on warm near-black background.
- 🔗 [Live](https://async-js-projects.netlify.app/joke-generator/)

### 5. Books Explorer (`books-explorer`)

- Fetches books from `https://api.freeapi.app/api/v1/public/books`.
- Renders cover image, title, authors, publisher, and published date per card.
- Real-time title search filter on input.
- Theme: **Burnt orange** on dark warm background.
- 🔗 [Live](https://async-js-projects.netlify.app/books-explorer/)

---

## Getting Started

### Clone

```bash
git clone https://github.com/yasirrajput4/async-js-projects.git
cd async-js-projects
```

### Run Locally

Open `index.html` from the root in any modern browser — no build step, no installs.

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

Using a static server (recommended to avoid CORS warnings on some browsers):

```bash
# With VS Code Live Server — right-click index.html → Open with Live Server
# Or with npx
npx serve .
```

### Deployment

This project is deployed on **Netlify**: [async-js-projects.netlify.app](https://async-js-projects.netlify.app/)

To deploy your own copy:

1. Push the repo to GitHub.
2. Log in to [Netlify](https://netlify.com) and click **Add new site → Import an existing project**.
3. Connect your GitHub repo — no build command needed, publish directory is `/` (root).
4. Deploy. Netlify auto-redeploys on every push to `main`.

---

## Notes

- All data is fetched with the native `fetch` API and `async/await`.
- Errors are caught and surfaced to the user in each project.
- No frameworks, no bundlers, no `npm install` required.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
