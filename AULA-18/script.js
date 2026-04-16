// Com arrays
var barquinho = ["Pedro", "Tiago", "João"]
var profissoes = ["Pescador", "Pescador", "Carpinteiro"]

console.log("0",barquinho[0], "é", profissoes[0]);

// Com obejto
// {chave: valor}
var cantor = {
    // chave : "Valor"
    nome : "Menos é mais",
    generoMusical : "Pagode",
    estaVivo: true,
    idade: 10
}

// Printa o objeto inteiro
console.log(cantor);

// Printa uma chave o objeto
console.log("cantor.nome");
console.log("cantor.generoMusical");

// typeof(cantor)

// acessando propriedades
var intervalo = {
    horaInicio :"15h00"
    horaFim : "15:20"
    local : "Patio"
    duração : "20 min"
}

console.log("O intervalo inicia às :", intervalo(horaInicio))

// Alterando novas propriedades
garrafa.cor ="Azul"
garrafa.tamanho = "600 ml"
garrafa.preco = 8.5
garrafa["marca"] = "Suco Glub"

console.log(garrafa);

// Alterando valores, de propriedades já existentes
garrafa.cor = "Rosa"
garrafa.["marca"] = "Topoué"

console.log(garrafa);

// OBJETOS
var animal = {
    // propriedades 
    nome : "Tom",
    especie : "Garça",
    raca : "Adidas",

    // métodos
    falar : function(){
        console.log("SHAZAM");
    },
    andar : () => {
        console.log("FUUUUUUUU");
    },
    dormir : () => {
        console.log(ZZZZZZZZZZZZZZZ);
        
    }
}

// mostando um valor através da propriedade 
console.log(animal.nome);

// mostra o texto da função
console.log(animal.falar)

// executa a função
animal.falar()
