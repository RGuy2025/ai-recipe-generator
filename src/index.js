function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 5,
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let ingredientElement = document.querySelector("#user-ingredient");

  let apiKey = "5912o91beb33d634bfd91ta0a18fa0bd";

  let context =
    "You are a master chef that can create simple and delicious recipes. Your mission is to generate a simple recipe in basic HTML and separate each line with a <br />. Do not put HTML at the top. Make sure to use the user instructions. ";
  let prompt = `User instructions: Generate a simple recipe using ${ingredientElement.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.innerHTML = `<span class="blink">⌛</span>Creating a recipe using ${ingredientElement.value}`;
  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);
