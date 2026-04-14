const container = document.getElementById("container");
const btn = document.getElementById("btn");
const copyBtn = document.getElementById("copyBtn");
const twitterBtn = document.getElementById("twitterBtn");

let currentQuote = "";
let currentAuthor = "";

const fetchQuote = async () => {
  container.innerHTML = `<div class="loader"></div>`;
  try {
    const res = await fetch(
      "https://api.freeapi.app/api/v1/public/quotes/quote/random",
    );
    const data = await res.json();

    const quote = data.data.content;
    const author = data.data.author || "Unknown";

    currentQuote = quote;
    currentAuthor = author;

    container.innerHTML = `
            <p>"${quote}"</p>
            <h3>— ${author}</h3>
          `;
  } catch (error) {
    console.log("Error", error);
    container.innerHTML = `<p class="message">⚠️ Failed to load quote.</p>`;
  }
};

// Copy to clipboard
copyBtn.addEventListener("click", async () => {
  if (!currentQuote) return;
  try {
    await navigator.clipboard.writeText(`${currentQuote} — ${currentAuthor}`);
    copyBtn.textContent = "✅ Copied!";
    setTimeout(() => (copyBtn.textContent = "📋 Copy"), 2000);
  } catch (err) {
    alert("Failed to copy");
    console.error(err);
  }
});

// Share on Twitter
twitterBtn.addEventListener("click", () => {
  if (!currentQuote) return;
  const text = encodeURIComponent(`"${currentQuote}" — ${currentAuthor}`);
  const url = `https://twitter.com/intent/tweet?text=${text}`;
  window.open(url, "_blank");
});

btn.addEventListener("click", fetchQuote);
fetchQuote();
