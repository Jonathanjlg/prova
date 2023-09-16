function ParOuImpar() {
    let numero = document.getElementById("numero").value;
    numero = parseInt(numero);
    if (numero % 2 === 0) {
        document.getElementById("resultado").innerHTML = numero + " é um número PAR.";
    } else {
        document.getElementById("resultado").innerHTML = numero + " é um número ÍMPAR.";
    }
}