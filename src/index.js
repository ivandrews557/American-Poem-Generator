function displayPoem(response){
new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}







function americanPoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
   let apiKey = "12fb5e8f183t409d043ba8bbea34o7b4";
  let prompt =`Generate an American poem about ${instructionsInput.value}`;
  let context="You are a nature expert and love to write four lines of poem about nature. Generate a short poem in basic HTML. Sign the end of the poem with 'SheCodes AI' inside a <strong> element with a different color than the text.";
  let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `Generating an American poem about ${instructionsInput.value} 🌊🍃🌧️🌔`;

  axios.get(apiUrl).then(displayPoem);
}


let poemFormElement = document.querySelector("#american-poem-form");
poemFormElement.addEventListener("submit", americanPoem);

