// import animal card
import animalCard from "../animalCard/animalCard.js";

// class for buttons to chose animal types
class typeButton {
    constructor() {
    };

    // create cards by type
    searchAndGenerateType (type) {
        // getch animals by type
        fetch(`http://localhost:8001/api/type?type=${type}`)
            .then(response => response.json())
            .then(data => {
                // call class to generate cards with animal data
                new animalCard(data);
            }); 
    };

    // method to create button 
    createButton (type) {
        let imageSrc = `../src/images/${type}.png`;

        // create button, add content and add class
        let button = document.createElement("button");
        button.innerHTML = `
            <img src="${imageSrc}" alt="${type}">${type}
        `;
        button.classList.add("main_search_buttonTypes_buttonType");

        // on click button call method to create button
        button.onclick = () => {
            this.searchAndGenerateType(type);
        }

        const img = document.createElement("img");
        img.setAttribute("src",imageSrc)
        document.body.appendChild(img);

        // append button to html
        document.querySelector(".main_search_buttonTypes").appendChild(button);
    }

    // method to generate buttons
    loadButtons (data) {
        // loop through data
        for (let i = 0; i < data.length; i++) {
            // create button
            this.createButton(data[i])
        }
    }

}

export default typeButton;