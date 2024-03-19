// create animalPage Class
class animalPage {
    // initialize class
    constructor(data){
        // show popUp when class is called
        this.popUp(data);
    };

    // create popUp method
    popUp(data){
        // clean popUp content
        document.querySelector('.main_animalPage').innerHTML = '';

        // set popUp to visible
        document.querySelector('.main_animalPage').style.display = "flex";

        // create contentDiv and set class
        let content = document.createElement('div');
        content.classList.add('popUp');
        // set html content to contetn
        content.innerHTML = `
            <img src = '${data.src}' alt='${data.name}' />
            <h2>This animal is ${data.name} </h2>
            <p> ${data.description} </p>
            <p>The maximum age is ${data.maximum_age} </p>
            <p> ${data.type} </p>
        `;

        // create button to close popUp
        let close = document.createElement('button');
        // on click close button
        close.onclick = () => {
            // clear popUp content
            document.querySelector('.main_animalPage').innerHTML = '';
            // set popUp to invisible
            document.querySelector('.main_animalPage').style.display = "none";

        };
        // add x to close button
        close.textContent = 'X';
        
        // append button to popUp
        content.appendChild(close);

        // append popUp to html
        document.querySelector('.main_animalPage').appendChild(content);
    }
}

// export animalPage
export default animalPage;