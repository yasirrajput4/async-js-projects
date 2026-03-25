## Async JavaScript Projects

This repository is a collection of small, focused web projects built with **HTML**, **CSS**, and **vanilla JavaScript** to practice **asynchronous programming** using the `fetch` API and `async/await`.

Each project is a standalone mini app that calls a public API from `freeapi.app` and renders the results in the browser with simple, modern UI styling.

---

## Tech Stack

- **HTML5**: Structure and semantic markup.
- **CSS3**: Responsive layouts, gradients, cards, loaders, and hover effects.
- **JavaScript (ES6+)**: Async functions, `fetch`, DOM manipulation, event handling, and client-side filtering.
- **Public APIs**: All data is loaded from `https://api.freeapi.app`.

---

## Project Structure

```text
async-js-projects/
├─ random-product-fetcher/
│  ├─ index.html      # Lists random products from an API
│  ├─ app.js          # Fetch + render product titles
│  └─ style.css       # Dark themed list styling
├─ youtube-video-explorer/
│  ├─ index.html      # YouTube-style video listing UI
│  ├─ app.js          # Fetch + search videos by title
│  └─ style.css       # Grid layout, cards, loader animation
├─ random-quote-generator/
│  ├─ index.html      # Random quote viewer with buttons
│  ├─ app.js          # Fetch quote, copy, and share to Twitter
│  └─ style.css       # Centered quote card and buttons
├─ random-joke-generator/
│  ├─ index.html      # Button to show a random joke card
│  ├─ app.js          # Fetch jokes, pick one at random on click
│  └─ style.css       # Card layout and animated hover effects
├─ books-explorer/
│  ├─ index.html      # Searchable books gallery
│  ├─ app.js          # Fetch books and filter by title
│  └─ style.css       # Responsive grid with book cards
└─ README.md
```

Each folder can be opened independently in a browser; there is no build step or backend server required.

---

## Individual Projects

### 1. Random Product Fetcher (`random-product-fetcher`)

- Fetches random products from
  `https://api.freeapi.app/api/v1/public/randomproducts`.
- Uses `async/await` and `fetch` to get data from the API.
- Renders a clean list of product titles inside an unordered list.
- Shows how to:
  - Handle asynchronous data loading.
  - Update the DOM dynamically with JavaScript.

### 2. YouTube Video Explorer (`youtube-video-explorer`)

- Loads a list of videos from
  `https://api.freeapi.app/api/v1/public/youtube/videos`.
- Displays each video as a card with:
  - Thumbnail image.
  - Video title.
  - Channel name.
- Includes a **search box** that filters videos **on the client** by title.
- Shows a loader while fetching and a friendly message if no results are found.

### 3. Random Quote Generator (`random-quote-generator`)

- Fetches a random quote from
  `https://api.freeapi.app/api/v1/public/quotes/quote/random`.
- Displays the quote text and author in a central card.
- Includes buttons to:
  - Load a new quote.
  - Copy the quote to the clipboard.
  - Open a pre-filled tweet with the current quote.
- Demonstrates:
  - Async API calls.
  - Clipboard API (`navigator.clipboard`).
  - Opening external URLs from JavaScript.

### 4. Random Joke Generator (`random-joke-generator`)

- Fetches an array of jokes from
  `https://api.freeapi.app/api/v1/public/randomjokes`.
- Stores the jokes locally and shows a **random joke card** each time the button is clicked.
- Handles API errors by displaying a helpful message.
- Demonstrates:
  - Loading data once and reusing it for multiple interactions.
  - Random selection from an in-memory array.

### 5. Books Explorer (`books-explorer`)

- Fetches a list of books from
  `https://api.freeapi.app/api/v1/public/books`.
- Renders each book as a card with:
  - Cover image.
  - Title.
  - Authors.
  - Publisher and published date.
- Provides an input to **search books by title** in real time.
- Demonstrates:
  - Working with nested JSON structures.
  - Filtering arrays based on user input.
  - Responsive grid layout in CSS.

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/yasirrajput4/async-js-projects.git
cd async-js-projects
```

### Prerequisites

- A modern web browser (Chrome, Edge, Firefox, Safari, etc.).
- Optionally, a simple static server or an editor extension like “Live Server” for a smoother development experience.

### Running the Projects

You can run any project in two simple ways:

- **Directly from the file system**
  - Open the desired folder (for example `random-product-fetcher/`).
  - Double-click `index.html` to open it in your browser.

- **Using a local static server (recommended)**
  - Open the root folder in your editor.
  - Start a static server (for example, using a Live Server extension).
  - Navigate to the specific project path, for example:
    - `/random-product-fetcher/index.html`
    - `/youtube-video-explorer/index.html`
    - `/random-quote-generator/index.html`
    - `/random-joke-generator/index.html`
    - `/books-explorer/index.html`

No additional build tools, bundlers, or package managers are required.

---

## Development Notes

- All data fetching is done with the native `fetch` API and `async/await`.
- Error states are handled in JavaScript and surfaced to the user (for example, when an API call fails).
- Styling focuses on:
  - Simple, modern dark-themed UIs.
  - Clear typography and spacing.
  - Hover and focus states for better UX.

You can extend any of these mini projects by:

- Adding more API endpoints.
- Improving the UI/UX.
- Adding pagination, sorting, or more advanced filters.

---
