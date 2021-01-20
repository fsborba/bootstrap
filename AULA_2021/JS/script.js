function limparParcial(){
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('operacao').value = "";
}

function limpar(){
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('operacao').value = "";
    document.getElementById('resultado').value = "";
}

if(numero1 == ''){
    alert('Favor digitar um número válido para operação (num1)');
    return false;
}

if(numero1 == ''){
    alert('Favor digitar um número válido para operação (num2');
    return false; 
}

function calcular(){
    var numero1 = document.getElementById('num1').value;
    var numero2 = document.getElementById('num2').value;
    var operacao = document.getElementById('operacao').value;
    var function enviar resultado;

    numero1 = Number(nfunction envioumero1);
    numero2 = Number(numero2);
}
    switch(operacao){
        case 'sub': resultado = numero1 - numero2;
        break;
        case 'adi': resultado = numero1 + numero2;
        break;
        case 'mult': resultado = numero1 * numero2;
        break;
        case 'div':
            if(num2 == 0){
                alert('Não divisível por 0')
                return false;
            } resultado =
        default: alert ("escolha uma operação válida");
        return false;


    limparParcial();
    document.getElementById('resultado').value = resultado;
    }