console.log("SIM");

//CALLBACK
//FUNÇÃO PRINCIPAL

// FUNÇÃO QUE SERÁ O CALLBACK
function finalizar(){
    console.log("FINALIZOU");
}

// FUNÇÃO PRINCIPAL
function processar(callback){
    console.log("Iniciando o processamento das informações");
    callback();
}

// Executo a função principal, atrelando ao callback
processar(finalizar);

// CALLBACK COM FUNÇÃO ANÔNIMA
function executarTarefa(callback){
    console.log("Iniciando a execução da tarefa...");
    // executa uma função com delay
    setTimeout(callback, 3000);
}

executarTarefa(() => {
    console.log("Acabou a tarefa!");
})

//CALLBACK COM CONDIÇÃO SIMPLES
function verificarNota(nota, callback){
    if(nota >= 7){
        callback("Aprovado");
    }
}
function aprovado(){
    console.log("Parabéns, você foi aprovado, ou seja, voce é o messi!");
}
verificarNota(8, aprovado)

//verificação com dois callbacks

//se deu certo
function loginCorreto(){
    console.log("Parabéns, você fez login com sucesso!");
}
//se deu errado
function loginErrado(){
    console.log("Usuario ou senha errados, BURROOOOOO!!!")
}

function validarSenha(senha, sucesso, erro){
    // verificar a senha se estiver correta chama 
    if(senha === "1234"){
        sucesso();
    } 
    //se deu erro usa o else erro
    else {
        erro();
    }
}
console.log("--------------------");
// executar os testes
// com senha errada
validarSenha("7", loginCorreto, loginErrado)

console.log("--------------------");
// com senha correta
validarSenha("1234", loginCorreto, loginErrado)
