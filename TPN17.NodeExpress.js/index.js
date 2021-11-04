const express = require("express");
const app = express();
const numerosAleatorios = require("./numerosAleatorios");
app.use(express.static(__dirname + "/public"));

app.get("/juego", (req, res) => {
    let numAr = numerosAleatorios.GenerarNumerosAleatorios();
    let numArContainer = "";
    for (x = 0; x < 9; x++) {
        numArContainer += `${numAr[x]}/`;
    }
    res.send(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tp 16</title>
        <link rel="stylesheet" href="css/main.css" />
    </head>
    <body>
        <form autocomplete="off" action="recuperardatos" method="post">
            <div class="CirculoDeCarga">
                <div class="borde"></div>
            </div>
            <div class="ContenedorNumsAleatorios"> 
                <input type="hidden" value="${numArContainer}" id="nums" />
                <label id="respuestaMostrada"></label>
            </div>
            <div class="ContenedorRespuestaMostrada">
            <input type="text" id="respuesta" readonly/>
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
                    <input id="boton" disabled="true" type="button" class="boton numeros" value="Enviar" />
                </div>
            </div>
        </form>
    </body>
    <script src="js/app.js"></script>
    
    </html>`);
});

app.listen(8888, () => {
    console.log("Servidor iniciado en el puerto 8888");
});