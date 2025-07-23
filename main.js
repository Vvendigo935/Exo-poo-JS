import { Lion } from './lion.js';
import { Perroquet } from './perroquet.js';
import { Serpent } from './serpent.js';

const zoo = [];

const form = document.getElementById("animal-form");
const nomInput = document.getElementById("nom");
const ageInput = document.getElementById("age");
const especeSelect = document.getElementById("especes");
const zooDiv = document.getElementById("zoo");


form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nom = nomInput.value.trim();
  const age = parseInt(ageInput.value, 10);
  const espece = especeSelect.value;

  if (!nom || isNaN(age)) {
    alert("Veuillez remplir tous les champs correctement.");
    return;
  }

  let animal;

  switch (espece) {
    case "espece1":
      animal = new Lion(nom, age);
      break;
    case "espece2":
      animal = new Perroquet(nom, age);
      break;
    case "espece3":
      animal = new Serpent(nom, age);
      break;
    default:
      alert("Espèce invalide");
      return;
  }

  zoo.push(animal);
  afficherAnimal(animal);
  form.reset();
});


function afficherAnimal(animal) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${animal.nom} (${animal.constructor.name})</h3>
    <p>Âge : ${animal.age} ans</p>
    <p><strong>Cri :</strong> ${animal.crier()}</p>
  `;

  const btn = document.createElement("button");
  btn.textContent = "Faire une action";
  btn.addEventListener("click", () => {
    if (animal instanceof Lion) animal.chasser();
    else if (animal instanceof Perroquet) animal.parler();
    else if (animal instanceof Serpent) animal.ramper();
  });

  card.appendChild(btn);
  zooDiv.appendChild(card);
}