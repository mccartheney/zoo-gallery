import animalPage from "../animalPage/animalPage.js";

// define animalCard
class animalCard {
    // get data in contructor 
    constructor(data) {
      // chack if exist animal
      if (data.error) { // if dont exists
        window.alert("this animal dont exist");
      }else { // if exist 
        // render all animals
        this.renderImages(data);
      }
    };

    // rendImages method
    renderImages(data) {
      // clear animals content
      document.querySelector(".main_animals").innerHTML = "";

      // loop through animals
      for (let i = 0; i < data.length; i++) {
        // create card
        const card = document.createElement("div");
        // add class too card
        card.classList.add("main_animals_animalCard");
        // add image tag and p to card
        card.innerHTML = `
            <img src="${data[i].src}" alt="${data[i].name}" />
            <p> ${data[i].name} </p>
        `;

        // on click card
        card.onclick= () => {
          // call animalPage and pass animal data
          new animalPage(data[i]) ;

        };

        // append card to animals 
        document.querySelector(".main_animals").appendChild(card);
        
      };
    };

    // show all cards
    showAll(data) {
      this.renderImages(data);
    };
};
    
// export animal Card
export default animalCard;
  