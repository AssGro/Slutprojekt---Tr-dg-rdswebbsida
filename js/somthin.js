"use strict"

let menuElement = document.querySelector(".hamburge-menu")

let button = menuElement.querySelector("button")

button.addEventListener("click", () => {
    menuElement.classList.toggle("open")
})