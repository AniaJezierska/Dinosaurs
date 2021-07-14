import "./styles/app.css";
import data from "./js/dino.json";
import Specie from "./js/Specie";
import dinoList from "./js/dinoList";

(function () {
  const formElement = document.querySelector("form");
  const buttonElement = document.querySelector("#btn");

  for (const {
    species,
    weight,
    height,
    diet,
    where,
    when,
    fact,
  } of data.Dinos) {
    const spec = new Specie(weight, height, diet);
    dinoList.addDino(species, where, when, fact, spec);
  }

  buttonElement.addEventListener("click", function submitForm(e) {
    e.preventDefault();
    formElement.classList.toggle("hide");
  });
})();
