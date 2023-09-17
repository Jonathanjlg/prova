function calcularDias() {
    let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let ano = parseInt(document.getElementById("ano").value);


    if (dia < 1 || dia > 31 || mes < 1 || mes > 12 || isNaN(dia) || isNaN(mes) || isNaN(ano)) {
        alert("Por favor, insira uma data válida.");
        return; //return = Retorna e encerra a função sem um valor de retorno.
    }

    let dataAtual = new Date(ano, mes - 1, dia); 
    dataAtual.setDate(dataAtual.getDate() + 1); 

    let diaSeguinte = dataAtual.getDate();
    let mesSeguinte = dataAtual.getMonth() + 1; 
    let anoSeguinte = dataAtual.getFullYear();

    document.getElementById("resultado").innerHTML = "O dia seguinte é: " + diaSeguinte + "/" + mesSeguinte + "/" + anoSeguinte;
}