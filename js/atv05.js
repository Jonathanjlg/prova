function verificarNumero() {
    let numero = parseFloat(document.getElementById("numero").value);
    if (isNaN(numero)) {
        document.getElementById("resultado").textContent = "Por favor, insira um número válido.";
    } else if (numero > 0) {
        document.getElementById("resultado").textContent = "O número é positivo.";
    } else if (numero < 0) {
        document.getElementById("resultado").textContent = "O número é negativo.";
    } else {
        document.getElementById("resultado").textContent = "O número é Neutro.";
    }
}