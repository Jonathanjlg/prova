
function calcularRaiz() {
   let numero = parseFloat(document.getElementById("num1").value);
   if (!isNaN(numero)) {
   let raizQuadrada = Math.sqrt(numero);
     document.getElementById("resultado").innerHTML = "A raiz quadrada de " + numero + " é " + raizQuadrada;
 } else {
     document.getElementById("resultado").innerHTML = "Por favor, insira um número válido.";
  } 
 }
