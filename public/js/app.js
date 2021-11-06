document.getElementById("iniciarJuego").addEventListener("click", () => {
    juego.style.display = "flex";
    iniciarContainer.style.display = "none";
    nums = GuardarNumeros();
    x = -1;
    Eventos();
    MostrarNumeros(true);
});