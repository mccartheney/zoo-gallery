// import typeButton for type selection
import typeButton from "./typeButton/typeButton.js";

// import animalCard to show animalCard
import animalCard from "./animalCard/animalCard.js";

// function to show all animals
const showALl = () => {
    // get all animals
    fetch("http://0.0.0.0:8001/api/")
        .then(response => response.json())
        .then(data => {
            // show all animals with data
            new animalCard(data[0]);
        });
};

// fuctiobn to show all animals when click "all" animals button 
const loadAll = () => {
    // get button
    const allbutton = document.querySelector('.all');

    // on click button
    allbutton.onclick = () => {
        // show all animals
        showALl();
    };
};

// function to show all button types
const showButtons = () => {
    // fetch animal types
    fetch("http://0.0.0.0:8001/api/types")
        .then(response => response.json())
        .then(data => {
            // call class to initialize button
            const buttons = new typeButton();

            // load all buttons with data which have types
            buttons.loadButtons(data);
        });
};

// funtion to show animal when submit form
const initInputSearch = (event) => {
    // funtion to not reload page when submit formulary
    event.preventDefault();

    // get input
    const Input = document.querySelector(".main_search_form_input");

    // fetch data to get animal with name == input.value
    fetch(`http://0.0.0.0:8001/api/name?name=${Input.value}`)
        .then(response => response.json())
        .then(data => {
            // show animal if it exists
            new animalCard(data);
        });
};

// on load window 
window.onload = () => {
    // load all funtions
    showButtons();
    showALl();
    loadAll();

    // get form to submit input
    const form = document.querySelector(".main_search_form");
    // on submit form, search info and generate card to show animal
    form.addEventListener("submit", (event) => {initInputSearch(event)});
}