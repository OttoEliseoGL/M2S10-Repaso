console.log("Entro al main.js");

const body = document.querySelector("body");

function btnCambiarColor() {
    console.log("Entró al botón")
    // setTimeout(cambiarColor, 30);
    setInterval(cambiarColor, 2000);
    // cambiarColor()
}

function cambiarColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    // console.log("Mi numero aleatorio es: " + randomColor);
    body.style.backgroundColor = `#${randomColor}`;
}