console.log("Olá Fernando");

var nome = "Fernando";

console.log("Olá " + nome + "1");

var numero1 = 20;
var numero2 = 10;
var soma = numero1 + numero2;

console.log("A soma é: " + soma)

var subtracao = numero1 - numero2;

console.log("A subtração é: " + subtracao)

var multiplicacao = numero1 * numero2;

console.log("A multiplicação é: " + multiplicacao);

var divisao = numero1 / numero2;

console.log("A divisão é: " + divisao)

// mod = %

var resto = numero1 % numero2;
console.log("O resto da divisão é:")


var idade = 17;

if (idade >= 18) {
    console, log("Você é maior de idade!")
}

else (idade <= 17);
    console, log("Você é menor de idade!")
}

/*
> maior
< menor
>= maior ou igual
>= menor ou igual
== igual
!= diferente
e = &&(ambas devem ser veradeiras para a expressão ser verdadeira)
ou = || (basta uma ser verdadeira para a expressão ser verdadeira)
para if ser verdadeira as duas tem que ser verdadeira, se uma for falsa vai executar o else
mod = %

*/

/*
Voto obrigatório: >= 18 e < 65
Voto facultativo: >= 16 e < 18 e >= 65
Não pode votar: <16
*/
var idade = 17

if (idade < 16) {
    console.log("Não pode votar!");
} else {
    if(idade >= 18 && idade < 65){
       console.log("Voto obrigatóriio");
    }else{
       console.log("Voto Facultativo");
}
}

var numero = 20;

if(numero >= 0){
    console.log("O número é positivo!")
}else{
    console.log("O número é negativo")
}

var numero = 10;

if((numero % 2) == 0){
    console.log("O número é par!")
}else{
    console.log("O número é ímpar")
}