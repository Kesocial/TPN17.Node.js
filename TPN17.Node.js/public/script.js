function Eventos() {
    let numeros = document.querySelectorAll(".contenedor-grid > .numeros");
    let respuesta = document.getElementById("respuesta");
    let respuestaMostrada = document.getElementById("respuestaMostrada");

    numeros.forEach((e) => {
        e.addEventListener("click", () => {
            let numeroSeleccionado = e.value;
            respuesta.value += numeroSeleccionado + ",";
            respuestaMostrada.textContent += numeroSeleccionado + "   ";
            e.value;
            e.disabled = "true";
        });
    });
    console.log(boton);
}
let boton = document.getElementById("boton");
boton.addEventListener("click", () => {
    ComprobarNumeros();
});

function RecibirNumerosAleatorios() {
    let numerosAleatorios = document.querySelectorAll(
        ".numerosAleatoriosRecibidosMostrados"
    );
    let responder = document.querySelector(".responder");
    let contenedorDeNumeros = document.querySelector(".CirculoDeCarga");

    numerosAleatorios[0].style.display = "flex";
    let i = 0;
    var timer = setInterval(() => {
        i++;
        numerosAleatorios[i].style.display = "flex";

        if (i >= 1) {
            numerosAleatorios[i - 1].style.display = "none";
        }

        if (i == numerosAleatorios.length - 1) {
            contenedorDeNumeros.style.display = "none";
            responder.style.display = "grid";
            respuestaMostrada.classList.add("RespuestaMostrada");
            clearInterval(timer);
            timer = null;
        }
    }, 2000);
}

function ComprobarNumeros() {
    let respuesta = document.getElementById("respuesta");
    let numerosAleatorios = document.getElementById("numerosAleatorios");
    console.log(numerosAleatorios);
    console.log(respuesta);
}

RecibirNumerosAleatorios();
Eventos();