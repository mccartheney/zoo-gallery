class animalPage {
    constructor(data){
        console.log(data);
        this.popUp(data);
    }


    popUp(data){
        document.querySelector('.animalPage').innerHTML = ''
        document.querySelector('.animalPage').style.display = "flex"

        let content = document.createElement('div')
        content.classList.add('popUp')
        content.innerHTML = `
            <img src = '${data.src}' alt='${data.name}' />
            <h2> Name: ${data.name} </h2>
            <p> Description: ${data.description} </p>
            <p> Age: ${data.maximum_age} </p>
            <p> Type: ${data.type} </p>
          `
        let close = document.createElement('button')
        close.onclick = () => {
            document.querySelector('.animalPage').innerHTML = '';
            document.querySelector('.animalPage').style.display = "none"

        }
        close.textContent = 'X'
        content.appendChild(close);

        
          document.querySelector('.animalPage').appendChild(content)
    }


    
}

export default animalPage;