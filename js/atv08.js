function calcularDiaSeguinte() {
    var dia = parseInt(document.getElementById("dia").value);
    var mes = parseInt(document.getElementById("mes").value);
    var ano = parseInt(document.getElementById("ano").value);

    // Verificar se a data é válida
    if (dia < 1 || dia > 31 || mes < 1 || mes > 12 || isNaN(dia) || isNaN(mes) || isNaN(ano)) {
        alert("Por favor, insira uma data válida.");
        return;
    }

    var dataAtual = new Date(ano, mes - 1, dia); // Mês começa do zero (janeiro é 0)
    dataAtual.setDate(dataAtual.getDate() + 1); // Adiciona um dia

    var diaSeguinte = dataAtual.getDate();
    var mesSeguinte = dataAtual.getMonth() + 1; // Mês começa do zero
    var anoSeguinte = dataAtual.getFullYear();

    document.getElementById("resultado").innerHTML = "O dia seguinte é: " + diaSeguinte + "/" + mesSeguinte + "/" + anoSeguinte;
}