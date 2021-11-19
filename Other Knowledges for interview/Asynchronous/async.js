const button = document.getElementById("button");
function clickButton() {
  const newP = document.createElement("p");
  newP.textContent = "This is a paragraph created asynchronously!";
  document.body.appendChild(newP);
}
button.addEventListener("click", clickButton);
///////////////////////////////////////////////////////////////////////////////////
console.log(
  fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
  )
);
fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((json) => console.log(json))
  .catch((error) => console.log(error));
console.log("🤓");
///////////////////////////////////////////////////////////////////////////////////
async function getSuperHeroesData() {
  try {
    let response = await fetch(
      "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
    );
    console.log("async & await", response);
    let data = await response.json();
    console.log("async & await", data);
  } catch (error) {
    console.log(error);
  }
}
getSuperHeroesData();
