var numero = 5;

if ((numero % 2) == 0) {
    console.log("Número ímpar!");
} else {
    console.log("Número par!");
}

var numero = 20;

(numero % 2) == 0 ? console.log("Número par") : console.log("Número impar");

var idade = 15;
var mensagem = idade >= 18 ? "Seja bem vindo!" : "Fora daqui!!";

console.log(mensagem);

var primeiraValidacao = false;
var segundaValidacao = true;

var acesso = primeiraValidacao ? segundaValidacao ? "Vai firme!!" : "Acesso negado" : "Acesso negado"

console.log(acesso);


var fruta = "mamão"

switch (fruta) {
    case "abacaxi":
        console.log("baita abacaxi");
        break;
    case "mamão":
        console.log(é mamão);
        break;
    default:
        console.log("É outra fruta");
}

var cargo = "gerente";
salario = 3000;

switch (cargo) {
    case "gerente": salario *= 1.15;
        break;
    case "supervisor": salario *= 1.10;
        break;
    default:
        salario *= 1.05;
}

console.log("Cargo " + cargo + "Salário: +salario" + salario);



var mes = "Novembro";

switch (mes) {
    case "Janeiro": console.log("Janeiro é verão");
     break;
    case "Fevereiro": console.log("Fevereiro é verão");
     break;
    case "Março": console.log("Março é verão"); 
     break;
    case "Abril": console.log("Abril é outono");
     break;
    case "Maio": console.log("Maio é outono");
     break;
    case "Junho": console.log("Junho é outono");
     break;
    case "Julho": console.log("Julho é inverno");
     break;
    case "Agosto": console.log("Agosto é inverno");
     break;
    case "Setembro": console.log("Setembro é inverno");
     break;
    case "Outubro": console.log("Outubro é primavera");
     break;
    case "Novembro": console.log("Novembro é primavera");
     break;
    case "Dezembro": console.log("Dezembro é primavera");
}

var mes= "novembro";
switch(mes) {
    case "janeiro":
    case "fevereiro":
    case "março":
        console.log("Este mês é verão!");
        break;
    case "abril":
    case "maio":
    case "junho":
        console.log("Este mês é outono!");
        break;
    case "julho":
    case "agosto":
    case "setembro":
        console.log("Este mês é inverno!");
        break;
    case "outubro":
    case "novembro":
    case "dezembro":
        console.log("Este mês é primavera!");
        break;
        default: console.log("não é um mês valido!");
}

var mes = "fevereiro";

if(mes == "janeiro" || mes == "fevereiro" || mes == "março"){
    console.log("É tempo de bermudas!!");
}else if(mes == "abril" || mes == "maio" || mes == "junho"){
    console.log("Os dias são mais agradáveis!");
}else if(mes == "julho" || mes == "agosto" || mes == "setembro"){
    console.log("Oba, Vinho e queijos!");
}else if(mes == "outubro" || mes == "novembro" || mes == "dezembro"){
    console.log("Ha, as flores!!");
}





/*
Aula de sábado = while / for = Estrutura de repetição
*/

var diaDaSemana = "Segunda-feira"

diaDaSemana == "Domingo"
? console.log("Hoje é dia de churrasco")
: console.log("Hoje não é dia de churrasco :( ");

var numero = 1;

while(numero <= 3){
    console.log("Olá Aluno " +numero);

    numero = numero + 1;
}

var numero = 1;

while(numero <= 100){
    console.log("10 x "+numero+" = "+ 10*numero);
    numero = numero + 1;
}

var numero = 100;

while(numero >= 5){
    console.log("10 x "+numero+" = "+ 10*numero);
    numero = numero - 5;
}

for(var numero = 0; numero <= 10; numero++){
    console.log("10 x "+numero+" = "+ 10*numero);
}

/*
while(n = *2 %=0 )
    console.log()


for(var n = 100; n <= 200; n ++)
if(n % 2 !=0){}
    console.log("$(n) x "+n+" " = "+ 2*n")
*/

var r = 5;
