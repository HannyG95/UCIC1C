const CALIFICACIONES = document.getElementsByClassName("calif");
const OUTPUT = document.getElementById("output");

function validarCalificaciones() {
    for (let i = 0; i < CALIFICACIONES.length; i++) {
        let calificacion = parseFloat(CALIFICACIONES[i].value);
        if (calificacion > 100) {
            alert("La calificación no puede ser mayor a 100.");
            return false;
        }
    }
    return true;
}

function calcular() {
    if (validarCalificaciones()) {
        let totalCalificaciones = 0;
        for (let i = 0; i < CALIFICACIONES.length; i++) {
            totalCalificaciones += parseFloat(CALIFICACIONES[i].value);
        }
        let promedio = totalCalificaciones / CALIFICACIONES.length;
        if (promedio < 70) {
            OUTPUT.innerText = "Tu promedio fue de " + promedio.toFixed(2) + ", lo siento pero reprobaste";
        } else {
            OUTPUT.innerText = "Tu promedio fue de " + promedio.toFixed(2) + ", felicidades, pasaste el cuatrimestre";
        }
    }
}