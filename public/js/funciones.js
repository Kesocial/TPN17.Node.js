function GuardarNumeros() {
    let nums = document.querySelector("#nums").value;
    let numsTotales = [];
    nums = nums.split("/");
    nums.pop();
    for (let i = 0; i <= nums.length - 1; i++) {
        numsTotales.push(nums[i].split(","));
    }
    // console.log(numsTotales);
    return numsTotales;
}

function MostrarNumeros() {
    let i = -1;
    let ContenedorNumsAleatorios = document.querySelector(
        ".ContenedorNumsAleatorios"
    );
    let ContenedorRespuestaMostrada = document.querySelector(
        ".ContenedorRespuestaMostrada"
    );
    let resultado = document.querySelector(".resultado");
    let respuestaMostrada = document.querySelector("#respuestaMostrada");
    let responder = document.querySelector(".responder");
    let respuesta = document.getElementById("respuesta");
    switch (x) {
        case 8:
            {
                resultado.style.display = "flex";
                juego.style.display = "none";
                responder.setAttribute("respondiendo", "false");
                RespuestasCorrectas();
                break;
            }
        case undefined:
            {
                resultado.style.display = "flex";
                juego.style.display = "none";
                responder.setAttribute("respondiendo", "false");
                RespuestasCorrectas();
                break;
            }
        default:
            {
                ContenedorNumsAleatorios.style.display = "flex";
                ContenedorRespuestaMostrada.style.display = "none";
                responder.style.display = "none";
                respuesta.value = "";
                respuestaMostrada.innerHTML = "Espere...";
                var timer = setInterval(() => {
                    i++;
                    respuestaMostrada.innerHTML = nums[x][i];
                    if (i >= nums[x].length) {
                        ContenedorNumsAleatorios.style.display = "none";
                        ContenedorRespuestaMostrada.style.display = "flex";
                        responder.style.display = "grid";
                        responder.setAttribute("respondiendo", "true");
                        clearInterval(timer);
                        timer = null;
                    } else {
                        responder.setAttribute("respondiendo", "false");
                    }
                }, delay);
                break;
            }
    }
    if (x != 8) {
        x++;
    }
}

function ComprobarRespuesta() {
    let nums2 = nums[x].toString();
    let numResultado1 = document.querySelectorAll(".numResultado1");
    let resultado = document.querySelector(".resultado");
    let juego = document.querySelector(".juego");
    nums2 = nums2.replaceAll(",", " ") + " ";
    // console.log(`${nums2}${respuesta.value}`);
    if (nums2 == respuesta.value) {
        if (x <= 8) {
            if (x === 0) {
                numResultado1[x].setAttribute("correcto", "true");
                numResultado1[x + 1].setAttribute("correcto", "true");
            } else {
                numResultado1[x + 1].setAttribute("correcto", "true");
            }
            MostrarNumeros();
        }
    } else {
        RespuestasCorrectas();
        resultado.style.display = "flex";
        juego.style.display = "none";
    }
    // console.log(x);
}

function Eventos() {
    let numeros = document.querySelectorAll(".contenedor-grid > .numeros");
    let boton = document.querySelector(".enviar");
    numeros.forEach((e) => {
        e.addEventListener("click", () => {
            let numeroSeleccionado = e.value;
            respuesta.value += numeroSeleccionado + " ";
            boton.disabled = "";
            e.disabled = "true";
        });
    });

    boton.addEventListener("click", () => {
        ComprobarRespuesta();
        numeros.forEach((e) => {
            e.disabled = "";
        });
    });
}

function RespuestasCorrectas() {
    let numResultado1 = document.querySelectorAll(".numResultado1");
    numResultado1.forEach((e) => {
        if (e.getAttribute("correcto") == "true") {
            e.style.borderColor = "#00ff66";
            e.style.color = "#00ff66";
        }
    });
}