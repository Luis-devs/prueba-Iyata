let numerosBD = [];
window.onload = () => {
    const form = document.getElementById("form-datos");
    form.addEventListener("submit", guardarNumeros);

    const formEvaluar = document.getElementById("form-buscar");
    formEvaluar.addEventListener("submit", evaluarNumeros);
}

function guardarNumeros(e) {
    e.preventDefault();

    const tamano = document.getElementById("tamano");
    const numeros = document.getElementById("numeros");
    numeros.value.trim();

    numerosBD = numeros.value.split(" ").filter((num) => num != "").map(n => parseInt(n));
    if (parseInt(tamano.value) != numerosBD.length) {
        numerosBD = [];
        numeros.value = "";
        alert("El número de elementos ingresados no coincide con el tamaño especificado.");
        return;
    }
    alert("Números guardados correctamente.");
}

function evaluarNumeros(e) {
    e.preventDefault();
    if (numerosBD.length > 0) {
        const num = parseInt(document.getElementById("buscar").value);
        const masAlto = numerosBD.filter(n => n > num).sort((a, b) => b - a);
        const masBajo = numerosBD.filter(n => n < num).sort((a, b) => a - b);
        const res = `${masAlto.length==0 ? "X": masAlto[0]} ${masBajo.length==0 ? "X": masBajo[0]}`;
        document.getElementById("resultado").value += `${res}\n`
        return;
    }
    alert("Primero debes GUARDAR NÚMEROS EN LA BD");

}