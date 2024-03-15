import animalCard from "../animalCard/animalCard.js";

class typeButton {
    constructor() {
    }

    searchAndGenerateType (type) {
        fetch(`http://localhost:8001/api/type?type=${type}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                new animalCard(data)
            }) 
    }

    createButton (type) {
        let button = document.createElement("button");
        button.textContent = type;
        button.classList.add("buttonType");
        button.onclick = () => {
            this.searchAndGenerateType(type);
        }
        document.querySelector(".buttonTypes").appendChild(button);
    }

    loadButtons (data) {
        for (let i = 0; i < data.length; i++) {
            this.createButton(data[i])
        }
    }

}

export default typeButton;