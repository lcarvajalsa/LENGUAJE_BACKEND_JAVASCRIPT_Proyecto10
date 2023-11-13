const navegacion = document.createElement(".menuPrincipal");
const abrir = document.createElement(".abrirMenu");
const cerrar = document.createElement(".cerrarMenu");

abrir.addEventListener("click", () => {
    navegacion.classList.add("visible");
})
cerrar.addEventListener("click", () => {
    navegacion.classList.remove("visible");
});