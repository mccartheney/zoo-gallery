import animalPage from "../animalPage/animalPage.js";

// define animalCard
class animalCard {
    // get data in contructor 
    constructor(data) {
      // call render Image with data
      this.renderImages(data)
    }

    // rendImages method
    renderImages(data) {
      // clear animals content
      document.querySelector(".animals").innerHTML = "";

      // loop through animals
      for (let i = 0; i < data.length; i++) {
        // create card
        const card = document.createElement("div");
        // add class too card
        card.classList.add("animalCard");
        // add image tag and p to card
        card.innerHTML = `
            <img src="${data[i].src}" alt="${data[i].name}" />
            <p> ${data[i].name} </p>
            `;

        card.onclick= () => {
            new animalPage(data[i]) 

        }

        // append card to animals 
        document.querySelector(".animals").appendChild(card)
        
      }
    }
}
    
// export animal Card
export default animalCard;
  