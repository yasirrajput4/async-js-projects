const ul = document.getElementById("ul");

let product = [];
const fetchData = async () => {
  try {
    const jsonData = await fetch(
      "https://api.freeapi.app/api/v1/public/randomproducts",
    );
    const response = await jsonData.json();
    const data = response.data.data;
    product = data;
    displayProducts(product);
  } catch (error) {
    console.log("Error is :", error);
  }
};

function displayProducts(product) {
  ul.innerHTML = "";
  product.forEach((element) => {
    const li = document.createElement("li");
    li.innerText = element.title;
    ul.appendChild(li);
  });
}
fetchData();
