class animalPage {
    constructor(data){
        console.log(data);
        this.popUp(data);
    }


    popUp(data){
        document.querySelector('.main_animalPage').innerHTML = ''
        document.querySelector('.main_animalPage').style.display = "flex"

        let content = document.createElement('div')
        content.classList.add('popUp')
        content.innerHTML = `
            <img src = '${data.src}' alt='${data.name}' />
            <h2>This animal is ${data.name} </h2>
            <p> ${data.description} </p>
            <p>The maximum age is ${data.maximum_age} </p>
            <p> ${data.type} </p>
          `
        let close = document.createElement('button')
        close.onclick = () => {
            document.querySelector('.main_animalPage').innerHTML = '';
            document.querySelector('.main_animalPage').style.display = "none"

        }
        close.textContent = 'X';
        content.appendChild(close);

        
          document.querySelector('.main_animalPage').appendChild(content)
    }


    
}

export default animalPage;