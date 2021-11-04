function Eventos() {
    let numeros = document.querySelectorAll(".contenedor-grid > .numeros");
    let respuesta = document.getElementById("respuesta");
    let boton = document.querySelectorAll("#boton");
    numeros.forEach((e) => {
        e.addEventListener("click", () => {
            let numeroSeleccionado = e.value;
            respuesta.value += numeroSeleccionado + " ";
            e.value;
            e.disabled = "true";
            boton.disabled = "false";
        });
    });
    boton.forEach((element1) => {
        element1.addEventListener("click", (element2) => {
            ComprobarRespuesta();
        });
    });
    console.log(boton);
}

function MostrarNumeros(x) {
    let i = -1;
    let nums = GuardarNumeros();
    let ContenedorNumsAleatorios = document.querySelector(
        ".ContenedorNumsAleatorios"
    );
    let ContenedorRespuestaMostrada = document.querySelector(
        ".ContenedorRespuestaMostrada"
    );
    let CirculoDeCarga = document.querySelector(".CirculoDeCarga");
    let respuestaMostrada = document.querySelector("#respuestaMostrada");
    let responder = document.querySelector(".responder");

    respuestaMostrada.innerHTML = "Espere...";
    var timer = setInterval(() => {
        i++;
        respuestaMostrada.innerHTML = nums[x][i];
        if (i >= nums[x].length) {
            ContenedorNumsAleatorios.style.display = "none";
            CirculoDeCarga.style.display = "none";
            ContenedorRespuestaMostrada.style.display = "flex";
            responder.style.display = "grid";
            clearInterval(timer);
            timer = null;
        }
        console.log(i);
    }, 2000);
}

function GuardarNumeros() {
    let nums = document.querySelector("#nums").value;
    let numsTotales = [];
    nums = nums.split("/");
    nums.pop();
    for (let i = 0; i <= nums.length - 1; i++) {
        numsTotales.push(nums[i].split(","));
    }
    console.log(numsTotales);
    return numsTotales;
}

function ComprobarRespuesta() {
    console.log("hola");
}
Eventos();
GuardarNumeros();
MostrarNumeros(0);