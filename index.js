function fetchPoemm(event) {
  event.preventDefault;

  let apiKey = "o3cf1124f7350046738b1c34ad3dt312";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemnInput = document.querySelector("#form-input-poem");
  let context =
    "You are a poets Ai assitent. You helped him write the most in-depth poems that even inspire other poets.";
  let prompt = `Plese deliver a poem according to the users ${poemInput}. Be concise, don't write too long poems.`;

  axios.get(apiUrl).then(displayPoem);
}

let form = document.querySelector("#main-form");
form.addEventListener("submit", fetchPoem);
