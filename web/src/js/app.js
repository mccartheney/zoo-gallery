// import typeButton for type selection
import typeButton from "./typeButton/typeButton.js";

window.onload = () => {
    fetch("http://0.0.0.0:8001/api/types")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const buttons = new typeButton()
            buttons.loadButtons(data)
        })
}