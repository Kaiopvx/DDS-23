/*
// MOSTRANDO UMA MENSAGEM NO CONSOLE 
console.log("Salve rapaziada do canal, se nscreve ae!")

// CAIXINHA DE ALERTA
// alert("TESTE PARA VER SE A CAIXINHA FUNCIONA") 

// CRIANDO VARIAVEIS

var nome = "Cristiano"  // String ou cadeia
var numero = 7  // Int ou inteiro
var salto = 2.10  // Float ou real
var theBest = true // boll ou lógico

console.log("Seu nome é:" + nome)
console.log("Seu numero é:", numero)
console.log("Seu pulo é:", salto)
console.log("É o mullior ?", theBest)

nome = 10
console.log(typeof(nome))

// OUTROS TUPOS DE VARIAVEL
var nulo = null
var indefinido = undefined
console.log(nulo)
console.log(indefinido)
*/

// OPERAÇÕES ARITIMÉTICOS
// +,-,*,/,%

/*var a = 10 , b = 5

console.log("soma:", a + b )
console.log("subtração:", a - b )
console.log("multiplicação:", a * b )
console.log("divisão:", a / b )
console.log("Módulo:", a % b )

// OPERAÇÕES LÓGICAS
// E, OU, NÃO
// &&, ||, !

var verdade = true, mentira = false
console.log(verdade && mentira)
console.log(verdade || mentira)
console.log(verdade && !mentira)

// OPERAÇÕES RELACIONAIS
// >, <, >=, <=, ==, !=, ===, !==

var x = 65, y= 32, z= "65"

console.log(x > y)
console.log(x < y)
console.log(x >= y)
console.log(x <= y)
console.log(x == y)
console.log(x != y)
// VERIFICANDO VALOR E TIPO
console.log(x === y)
console.log(x !== y) */

// DESVIOS CONDICIONAIS

// SE = IF

/* var estaVivo = true

// primeira comparção
if(estaVivo == true){
    console.log("Parabens, você está vivo")
}
// segunda comparação, caso a primeira dê errado
else if(estaVivo == undefined){
    console.log("Você não ta nada")
}
// entra aqui, caso todas as outras comparcões deem errado
else{
    console.log("Infelizmente, você está morto ☠️")
}

// SWICH = ESCOLHA
var camisa = "Laranja"
switch(camisa){
    case "Azul":
        console.log("Você ganhou um voucher")
        break
        case "Branco":
            console.log("Você ganhou um body splash da Virginia")
        break
        case "Vermelho":
            console.log("Você ganhou uma ferrari da china")
        break
        default:
            console.log("Camisa invalida e feia, vá trocar")
        break
}*/

// PROMPT - INTERAGE COM O USUÁRIO E COLETA UM VALOR
// prompt("Digite seu nome:")

// var time = prompt("Me diga, para quem voce torce?")

// console.log("Seu time é:", time)

var tamanho1 = prompt("Digite o tamanho da caixa 1:")
var tamanho2 = prompt("Digite o tamanho da caixa 2:")
var tamanho3 = prompt("Digite o tamanho da caixa 3:")

if(tamanho1 > tamanho2 && tamanho1 > tamanho3){
    console.log("numero de viagens = 3")
}
else if(tamanho2 > tamanho1 && tamanho2 > tamanho3){
    console.log("numero de viagens = 3")
}
else{
    console.log("numero de viagens = 3")
}