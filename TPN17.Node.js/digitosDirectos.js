//consumo los modulos que voy a utilzar////

const http = require("http");
const url = require("url");
const fs = require("fs");
const querystring = require("querystring");
const mime = require("mime-types");

///////////////////////////////////////////
// Creo el Servidor////
const servidor = http.createServer((pedido, respuesta) => {
    const objetourl = url.parse(pedido.url);
    let camino = "public" + objetourl.pathname;
    if (camino == "public/") camino = "public/index.html";
    encaminar(pedido, respuesta, camino);
});
//Defino en que puerto va a escuchar el servidor: localhost:8888///
servidor.listen(8888);
////////////////////////////////////////////////
function encaminar(pedido, respuesta, camino) {
    console.log(camino);
    switch (camino) {
        case "public/juego":
            {
                recuperar2(pedido, respuesta);
                break;
            }
        default:
            {
                fs.stat(camino, (error) => {
                    if (!error) {
                        fs.readFile(camino, (error, contenido) => {
                            if (error) {
                                respuesta.writeHead(500, { "Content-Type": "text/plain" });
                                respuesta.write("Error interno");
                                respuesta.end();
                            } else {
                                //revisa que tipo de archivo es por medio de mime, en esta caso utilizamos una API para faciltiar la lectura de archivos///
                                const mimearchivo = mime.lookup(camino);
                                respuesta.writeHead(200, { "Content-Type": mimearchivo });
                                respuesta.write(contenido);
                                respuesta.end();
                            }
                        });
                    } else {
                        respuesta.writeHead(404, { "Content-Type": "text/html" });
                        respuesta.write(
                            "<!doctype html><html><head></head><body>Recurso inexistente</body></html>"
                        );
                        respuesta.end();
                    }
                });
            }
    }
}
let i = -1;

function recuperar2(pedido, respuesta) {
    let info = "";
    let arrayTotalNumerosAr = [];

    arrayTotalNumerosAr = GenerarNumerosAleatorios();

    pedido.on("data", (datosparciales) => {
        info += datosparciales;
    });

    pedido.on("end", () => {
        const formulario = querystring.parse(info);
        respuesta.writeHead(200, { "Content-Type": "text/html" });

        let arrayNumAr = LlamarArrayDeNumerosAleatorios(arrayTotalNumerosAr, i);

        let pagina = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tp 16</title>
    <link rel="stylesheet" href="style.css" />
</head>

<body>
    <form autocomplete="off" action="recuperardatos" method="post">
        <div class="CirculoDeCarga">`;
        for (let x = 0; x <= arrayNumAr.length; x++) {
            pagina += `<div class="numerosAleatoriosRecibidosMostrados display-none">`;
            pagina += arrayNumAr[x] + `</div>`;
        }
        pagina += `<div class="borde"></div>
        </div>
        <div class="ContenedorRespuestaMostrada">
            <input type="hidden" value="${arrayNumAr}" id="numerosAleatorios" />
            <input type="hidden" id="respuesta" />
            <label id="respuestaMostrada"></label>
        </div>
        <div class="responder">
            <div class="contenedor-grid center c1">
                <input class="numeros" type="button" value="1" />
                <input class="numeros" type="button" value="2" />
                <input class="numeros" type="button" value="3" />
                <input class="numeros" type="button" value="4" />
                <input class="numeros" type="button" value="5" />
                <input class="numeros" type="button" value="6" />
                <input class="numeros" type="button" value="7" />
                <input class="numeros" type="button" value="8" />
                <input class="numeros" type="button" value="9" />
                <div></div>
                <input class="numeros" type="button" value="0" />
                <div></div>
            </div>
            <div class="contenedor center">
                <input id="boton" type="button" class="boton" value="Enviar" />
            </div>
        </div>
    </form>
</body>
<script src="script.js"></script>

</html>`;

        respuesta.end(pagina);
    });
    i++;
}

function GenerarNumerosAleatorios() {
    let arrayNumerosAleatorios = [];
    let n = 2;
    for (let i = 0; i <= 9; i++) {
        let numerosAleatorios = [];
        for (let x = 0; x < n; x++) {
            let numAleatorio = Math.round(Math.random() * 9);
            if (numerosAleatorios.includes(numAleatorio) == false) {
                numerosAleatorios.push(numAleatorio);
            } else {
                x--;
                console.log(n);
                console.log(`soy x: ${x}`);
            }
        }
        if (n <= 9) {
            n++;
        }

        arrayNumerosAleatorios.push(numerosAleatorios);
    }

    console.log(arrayNumerosAleatorios);
    return arrayNumerosAleatorios;
}

function LlamarArrayDeNumerosAleatorios(array, i) {
    return array[i];
}

console.log("Servidor web iniciado");