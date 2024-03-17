// import typeButton for type selection
import typeButton from "./typeButton/typeButton.js";
import animalCard from "./animalCard/animalCard.js";

const showALl = () => {
    fetch("http://0.0.0.0:8001/api/")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            new animalCard(data[0])
        })
}

const loadAll = () => {
    const allbutton = document.querySelector('.all')
    allbutton.onclick = () => {
        showALl();
    }
}

const showButtons = () => {
    fetch("http://0.0.0.0:8001/api/types")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const buttons = new typeButton()
            buttons.loadButtons(data)
        })
}

const initInputSearch = (event) => {
    event.preventDefault()
    const Input = document.querySelector(".main_search_form_input");
    fetch(`http://0.0.0.0:8001/api/name?name=${Input.value}`)
        .then(response => response.json())
        .then(data => {
            new animalCard(data)
        })
}

window.onload = () => {
    showButtons();
    showALl();
    loadAll()
    const form = document.querySelector(".main_search_form");
    form.addEventListener("submit", (event) => {initInputSearch(event)})
}