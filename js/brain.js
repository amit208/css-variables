// Selecting the image Element
const image = document.querySelector("#image");

// Selecting all the input elements
const inputs = document.querySelectorAll("input");

function handleUpdate() {
    if(this.name === "spacing" || this.name === "blur") {
        document.documentElement.style.setProperty(`--${this.name}`, `${this.value}px`);
    } else {
        document.documentElement.style.setProperty(`--${this.name}`, `${this.value}`);
    }
}

inputs.forEach(element => element.addEventListener("change", handleUpdate));
inputs.forEach(element => element.addEventListener("mousemove", handleUpdate));