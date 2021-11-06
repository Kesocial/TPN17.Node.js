function GenerarNumerosAleatorios() {
    var arrayNumerosAleatorios = [];
    var n = 2;
    for (var i = 0; i < 9; i++) {
        var numerosAleatorios = [];
        for (var x = 0; x < n; x++) {
            var numAleatorio = Math.round(Math.random() * 9);
            if (numerosAleatorios.includes(numAleatorio) == false) {
                numerosAleatorios.push(numAleatorio);
            } else {
                x--;
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


exports.GenerarNumerosAleatorios = GenerarNumerosAleatorios;