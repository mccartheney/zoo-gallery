// import animal components
import animalCard from "./animalCard/animalCard.js";
import animalPage from "./animalPage/animalPage.js";

// import typeButton for type selection
import typeButton from "./typeButton/typeButton.js";

fetch("http://0.0.0.0:8001/api")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })