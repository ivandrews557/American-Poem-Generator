function americanPoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Emily Dicken",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#american-poem-form");
poemFormElement.addEventListener("submit", americanPoem);

