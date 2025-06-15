function userExperience() {
  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "Generating poem...";
  displayPoem();
}

function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function fetchPoem(event) {
  event.preventDefault();

  let apiKey = "o3cf1124f7350046738b1c34ad3dt312";
  let poemInput = document.querySelector("#form-input-poem");
  let context =
    "You are a poets Ai assitent. You helped him write the most in-depth poems that even inspire other poets.";
  let prompt = `Please generate  a poem according to the users ${poemInput.value}. Be concise, don't write too long poems.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayPoem);

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
}

let form = document.querySelector("#main-form");
form.addEventListener("submit", fetchPoem);
