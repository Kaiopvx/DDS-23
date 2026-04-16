let produtos = [
  { nome: "Brabo-Brabissimo", preco: 45.90, categoria: "Lanche" },
  { nome: "Duplo cheadar mecmelt", preco: 32.90, categoria: "Lanche" },
  { nome: "Big Mac", preco: 29.90, categoria: "Lanche" },
  { nome: "Mac lanche feliz", preco: 50.00, categoria: "Lanche" },
  { nome: "Batata Frita Pequena", preco: 8.00, categoria: "Acompanhamento" },
  { nome: "Batata Frita Media", preco: 10.00, categoria: "Acompanhamento" },
  { nome: "Batata Frita Grande", preco: 11.90, categoria: "Acompanhamento" },
  { nome: "Batata Frita com cheadar e bacon", preco: 17.00, categoria: "Acompanhamento" },
  { nome: "Coca Cola zero refil", preco: 18.00, categoria: "Bebida" },
  { nome: "Coca Cola normal refil", preco: 18.00, categoria: "Bebida" },
  { nome: "Fanta laranja refil", preco: 16.00, categoria: "Bebida" },
  { nome: "Fanta guarana refil", preco: 16.00, categoria: "Bebida" },
  { nome: "Sprite refil", preco: 18.00, categoria: "Bebida" },
  { nome: "Milk-shake", preco: 15.00, categoria: "Bebida" },
  { nome: "Casquinha", preco: 4.50, categoria: "Sobremesa" },
  { nome: "Mac flury", preco: 14.90, categoria: "Sobremesa" },
  { nome: "Cascão", preco: 6.50, categoria: "Sobremesa" },
];

let pedidos = [];

function listarMenu(callback) {
  console.log("Cardápio inicial");
  for (var i = 0; i < produtos.length; i++) {
    var produto = produtos[i];
    console.log(
      (i + 1) + " - " + produto.nome + " | Categoria: " + produto.categoria + " | R$ " + produto.preco.toFixed(2)
    );
  }

  if (typeof callback === "function") {
    callback();
  }
}

function cadastrarPedido(nomeProduto, quantidade, callback) {
  var produto = null;

  for (var i = 0; i < produtos.length; i++) {
    if (produtos[i].nome.toLowerCase() === nomeProduto.toLowerCase()) {
      produto = produtos[i];
      break;
    }
  }

  if (!produto) {
    console.log("Produto não encontrado no cardápio: " + nomeProduto);
    return;
  }

  if (typeof quantidade !== "number" || quantidade <= 0) {
    console.log("Quantidade inválida. Informe um número maior que zero.");
    return;
  }

  var valorTotal = produto.preco * quantidade;
  var pedido = {
    produto: produto.nome,
    quantidade: quantidade,
    precoUnitario: produto.preco,
    valorTotal: valorTotal
  };

  pedidos.push(pedido);
  console.log("Pedido cadastrado: " + quantidade + "x " + produto.nome + " - R$ " + valorTotal.toFixed(2));

  if (typeof callback === "function") {
    callback();
  }
}

function listarPedidos() {
  if (pedidos.length === 0) {
    console.log("Ainda não há pedidos cadastrados.");
    return;
  }

  for (var i = 0; i < pedidos.length; i++) {
    var pedido = pedidos[i];
    console.log("Pedido " + (i + 1));
    console.log("Produto: " + pedido.produto);
    console.log("Quantidade: " + pedido.quantidade);
    console.log("Preço unitário: R$ " + pedido.precoUnitario.toFixed(2));
    console.log("Valor total: R$ " + pedido.valorTotal.toFixed(2));
    if (i < pedidos.length - 1) {
      console.log("");
    }
  }
}

function iniciarAtendimento() {
  listarMenu(() => {
    if (typeof prompt !== "function") {
      console.log("Use cadastrarPedido(nome, quantidade, listarPedidos) no console para incluir pedidos.");
      return;
    }

    var nomeProduto = prompt("Informe o nome do produto:");
    if (!nomeProduto) {
      console.log("Cadastro de pedido cancelado.");
      return;
    }

    var quantidadeInformada = prompt("Informe a quantidade desejada:");
    var quantidade = Number(quantidadeInformada);

    if (Number.isNaN(quantidade) || quantidade <= 0) {
      console.log("Quantidade inválida. Use um número inteiro maior que zero.");
      return;
    }

    cadastrarPedido(nomeProduto, quantidade, listarPedidos);
  });
}

iniciarAtendimento();
