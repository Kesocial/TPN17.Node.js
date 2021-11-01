const express = require("express");
const app = express();

app.use(express.static("public"))

app.get("/juego", (req, res) => {
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
            <div class="ContenedorRespuestaMostrada">
                <input type="hidden" value=" " id="numerosAleatorios" />
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
    <script src="js/app.js"></script>
    
    </html>`)
})

app.listen(8888, () => {
    console.log("Servidor iniciado en el puerto 8888")
})