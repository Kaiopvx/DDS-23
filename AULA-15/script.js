// VAMO Q VAMO
/*console.log("VAMO Q VAMO")

// LACO DE REPETIÇÃO
// FOR = PARA
for (var i = 0; i < 5; i++) {
    console.log("estou aqui no laço de repetição")
}
console.log("finalizei o loop")

// while = enquanto
var c = 1

while(c < 50){
    console.log("FLAMENGO")
    c++
}

console.log("finalizei o loop dnv")

//ARRAY 
var array = ["Kaio", 11, true, 5.0]*/

// mostra o conteúdo do array

/*console.log(array[2])

array[2] = "jogador"
//mostra todo o array
console.log(array)
*/

// Lista de times top(mais ou menos )
var times = ["Flamengo", "Palmeiras", "Atlético-MG", "Grêmio", "São Paulo"]

for(var i = 0; i <2; i++){
    console.log("O time atual é:", times[i]) 
}

//lenght - descobre o tamango do array
console.log(times.length)

console.log("------------------------------")
//Faz a repetição até o fim do array
// independente do tamanho, com o .lenght
for(var i = 0; i < times.length; i++){
    console.log("O time atual é:", times[i]) 
}
console.log("------------------------------")
// FOR ESPECIFICO DE ARRAY
// index - guarda o valor do indice do array
// in - usa o valor do indice para mostra o elemento
// times - define o array
for(var index in times){
    console.log("indice atual:", index)
    console.log("Valor do indice atual:", times[index])

}
//of - já sabe o valor do elemento
for(var index of times){
    console.log(index)
}

frutas.push("uva")
//mostra o array
console.log(frutas);

//PRA REMOÇÃO DE ELEMENTOS
//pop - remove o ultimo elemento do array
var frutaTirada = frutas.pop()
console.log("Fruta removida:", frutaTirada)

//shift - remove o primeiro elemento do array
var exPrimeiraFruta = frutas.shift()
console.log("Ex primeira fruta:", exPrimeiraFruta)

// descobrir o index de um elemento
var index = frutas.indexOf("banana")
console.log("O index da banana é:", index);

// descobrir se há um valor especifico no array
console.log("Tem pitu?:", frutas.includes("pitu"));
console.log("Tem maça?:", frutas.includes("maça"));

// ordena os elementos
frutas.sort()
console.log(frutas);

//inverte a ordem dos elementos do array
frutas.reverse()
console.log(frutas);

//convertendo o array em string
// converte todo o array
console.log("Convertido:", frutas.toString());

// junta um array, ou converte colocando um separador
console.log("Convertido:", frutas.join("-"));

// SLICE - copia parte do array
// (de onde começa, quantos elementos estarão na cópia)
var copaParte = frutas.slice(0, 2)
console.log("Cópia:", copiaParte);

// SPLICE 
// PARA REMOVER ELEMENTOS
// (de onde começa, quantos elementos serão tirados)
var removidos = frutas.splice(1,1)
console.log("Após remoção", frutas);

//PRA ADICIONAR
frutas.splice(1,0,"abacaxi")
console.log("Após adição", frutas);