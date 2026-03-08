const jokeBtn = document.getElementById("jokebtn");
const jokeContainer = document.getElementById("jokeContainer");
let array = [];

const fetchJokes = async () => {
  try {
    const res = await fetch(
      "https://api.freeapi.app/api/v1/public/randomjokes",
    );
    const data = await res.json();
    array = data.data.data;
  } catch (err) {
    console.error("Error fetching jokes:", err);
    jokeContainer.innerHTML =
      "<p style='color:red;'>Failed to load jokes. Please try again!</p>";
  }
};
jokeBtn.addEventListener("click", () => {
  // Clear previous joke card
  jokeContainer.innerHTML = "";

  const randomIndex = Math.floor(Math.random() * array.length);
  const joke = array[randomIndex].content;

  const card = document.createElement("div");
  card.classList.add("jokeCard");
  card.innerText = joke;

  jokeContainer.appendChild(card);
});
fetchJokes();
