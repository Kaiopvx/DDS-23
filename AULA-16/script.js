//FUNÇÕES
//só executa
function teste(){
    console.log("Funcionou aqui");
}
teste()
//mostra o texto do que é aquela função
console.log(teste);

//Com parâmetro
function teste2(parametro){
    console.log("O parametro é:", parametro);
}
teste2("arroz")

//com retorno
function media(n1, n2){
    var resultado = (n1 + n2) / 2
    return resultado
}

console.log(media(3, 4));

var mediaFinal = media(8,6)
console.log("A média final é:", mediaFinal)

//FUÇÃO ANÔNIMA
// É uma funçã que não possui nome, e seu retorno é guardado em uma variavel

var mensagem = function(){
    console.log("OI, MEU CHAPA");
}
console.log(mensagem);
mensagem()

// Apenas guarda o texto de função, sem executar
mensagem

// Executa a função
mensagem()

//AROW FUNCTION - FUNÇÃO DE SETA 

const multiplicar = (x,y) => {
    return x * y
}
console.log("Sua multiplicação deu:", multiplicar(54, 3));

// bem menor
// quando só tem uma linha de retorno, o return pode ser omitido e fica uma linha só
const dobro = numero => numero * 2
console.log("O dobro é:", dobro(4));


const dividir = (x,y) => {
    return x / y
}
console.log("Sua divisão deu:", dividir(4, 3));