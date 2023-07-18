const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const resultadoDeMultiplicacion = document.getElementById("resultado");

function calc() {
  let valorNumero1 = Number(numero1.value);
  let valorNumero2 = Number(numero2.value);
  let resultado = valorNumero1 * valorNumero2;

  resultadoDeMultiplicacion.innerText = resultado;
}

document.getElementById("calc").addEventListener("click", calc);