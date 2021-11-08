const express = require("express");
const app = express();
const numerosAleatorios = require("./numerosAleatorios");
let i = 0;
app.use(express.static(__dirname + "/public"));
app.get("/resultado", (req, res) => {
    res.send();
});
app.get("/juego", (req, res) => {
    i++;
    console.log(`Cantidad de pedidos a "juego" ${i}`);
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
        <div id="iniciarContainer" class="container">
            <h3>Aprete el boton cuando este listo</h3>
            <input class="boton" id="iniciarJuego" type="button" value="Iniciar" />
        </div>
        <div class="juego"">
            <div class="ContenedorNumsAleatorios">
                <input type="hidden" value="${numArContainer}" id="nums" />
                <label id="respuestaMostrada"></label>
            </div>
            <div>
                <div class="ContenedorRespuestaMostrada">
                    <input type="text" id="respuesta" placeholder="Ingrese un numero" readonly />
                </div>
                <div class="responder" respondiendo="false">
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
                        <input id="boton" disabled="true" type="button" class="boton enviar" value="Enviar" />
                    </div>
                </div>
            </div>
        </div>
        <div class="resultado">
            <div class="ResultadosFinales">
                <div class="barraResultado1">
                    <div correcto="false" class="numResultado1">0</div>
                    <div correcto="false" class="numResultado1">1</div>
                    <div correcto="false" class="numResultado1">2</div>
                    <div correcto="false" class="numResultado1">3</div>
                    <div correcto="false" class="numResultado1">4</div>
                    <div correcto="false" class="numResultado1">5</div>
                    <div correcto="false" class="numResultado1">6</div>
                    <div correcto="false" class="numResultado1">7</div>
                    <div correcto="false" class="numResultado1">8</div>
                    <div correcto="false" class="numResultado1">9</div>
                </div>
                <div class="conclusion">
                    <h3>Conclusion</h3>
    
                    Se puede observar que a medida que aumenta la cantidad de dígitos a recordar la tarea resulta más compleja. La cantidad de dígitos que se logró recordar es un indicador de la amplitud de la memoria de trabajo. Los dígitos en orden directo valoran especialmente
                    la capacidad de atención inmediata y la vigilancia. Este tipo de atención además de tener capacidad limitada es sensible a las interferencias.
                </div>
                <a id="volver" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" style="fill: #ffffff;transform: ;msFilter:;"><path d="M11.999 1.993C6.486 1.994 2 6.48 1.999 11.994c0 5.514 4.486 10 10.001 10 5.514-.001 10-4.487 10-10 0-5.514-4.486-10-10.001-10.001zM12 19.994c-4.412 0-8.001-3.589-8.001-8 .001-4.411 3.59-8 8-8.001C16.411 3.994 20 7.583 20 11.994c0 4.41-3.589 7.999-8 8z"></path><path d="m12.012 7.989-4.005 4.005 4.005 4.004v-3.004h3.994v-2h-3.994z"></path></svg>
            </a>
            </div>
             
        </div>
    </body>
    <script src="js/variables.js"></script>
    <script src="js/funciones.js"></script>
    <script src="js/app.js"></script>
    </html>`);
});

var server_port = process.env.YOUR_PORT || process.env.PORT || 8888;
var server_host = process.env.YOUR_HOST || "0.0.0.0";
servidor.listen(server_port, server_host, function() {
    console.log("Listening on port %d", server_port);
});