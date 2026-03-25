const container = document.getElementById("container");
const queryInput = document.getElementById("query");
const searchbtn = document.getElementById("searchbtn");
let books = [];

const fetchBooks = async () => {
  try {
    const res = await fetch("https://api.freeapi.app/api/v1/public/books");
    const data = await res.json();
    books = data.data.data;
    displayBooks(books);
  } catch (error) {
    console.log("Error fetching books:", error);
    container.innerHTML =
      "<p>Failed to load books. Please try again later.</p>";
  }
};

const displayBooks = (books) => {
  container.innerHTML = "";
  if (books.length === 0) {
    container.innerHTML = `<p class="message">😕 No books found. Try a different search.</p>`;
    return;
  }
  books.forEach((book) => {
    const { title, authors, publisher, publishedDate, imageLinks } =
      book.volumeInfo;
    const bookImg = imageLinks.thumbnail;

    const card = document.createElement("div");
    card.classList.add("book-card");
    card.innerHTML = `
            <img src="${bookImg}" alt="${title}">
            <div class="book-info">
              <h3>${title}</h3>
              <p><strong>Author:</strong> ${authors.join(", ")}</p>
              <p><strong>Publisher:</strong> ${publisher}</p>
              <p><strong>Published:</strong> ${publishedDate}</p>
            </div>
          `;
    container.appendChild(card);
  });
};

function filterBooks() {
  const searchText = queryInput.value.toLowerCase().trim();
  const filtered = books.filter((b) => {
    const title = b.volumeInfo.title.toLowerCase();
    return title.includes(searchText);
  });
  displayBooks(filtered);
}
searchbtn.addEventListener("click", filterBooks);
queryInput.addEventListener("input", filterBooks);

fetchBooks();
