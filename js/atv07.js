function verificarAno() {
    let ano = parseInt(document.getElementById("anobissexto").value);

    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        document.getElementById("resultado").innerHTML = ano + " é um ano bissexto.";
    } else {
        document.getElementById("resultado").innerHTML = ano + " não é um ano bissexto.";
    }
}