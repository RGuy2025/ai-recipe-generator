function generateRecipe(event) {
  event.preventDefault();
  new Typewriter("#recipe", {
    strings: ["Searching for a recipe"],
    autoStart: true,
    delay: 100,
    loop: true,
  });
}

let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);
