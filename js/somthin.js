"use strict"

let menuElement = document.querySelector(".hamburge-menu")

let button = menuElement.querySelector("button")

button.addEventListener("click", () => {
    menuElement.classList.toggle("open")
})
function myFunction() {
    let text;
    let person = prompt("För att verifiera att du är en person, sätt in ditt namn:", "");
    if (person == null || person == "") {
      text = "Användare har inte lagt till namn.";
    } else {
      text = "Bra, " + person + "! Nu kan vi fortsätta.";
    }
  }
