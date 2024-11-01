let nomePrato, nomeBebida, nomeSobremesa;
let valorPrato, valorBebida, valorSobremesa;

function botaoSelecionadoAnteriormente(pedido) {
  const cardAnterior = document.querySelector(`${pedido} .checkCard`);
  const checkAnterior = document.querySelector(`${pedido} .aparecer`)

  if (cardAnterior && checkAnterior) {
    cardAnterior.classList.toggle("checkCard");
    checkAnterior.classList.toggle("aparecer");
  }
}

function botaoSelecionado(botaoPedido) {
  botaoPedido.querySelector(".card").classList.toggle("checkCard");
  botaoPedido.querySelector(".check").classList.toggle("aparecer");
}

function conferirPedidoCompleto() {
  if (nomePrato && nomeBebida && nomeSobremesa) {
    const finalizarPedido = document.querySelector('.finalizarPedido');
    finalizarPedido.classList.add('pedidoCompleto');
    finalizarPedido.innerHTML = "Fechar pedido"
  }
}

function checkPrato(prato) {
  botaoSelecionadoAnteriormente('.pratos');
  botaoSelecionado(prato);

  nomePrato = prato.querySelector(".nomePrato h3").innerHTML;
  valorPrato = prato.querySelector(".preco").innerHTML;
  valorPrato = Number(valorPrato.replace('R$ ', '').replace(',', '.')).toFixed(2);
  conferirPedidoCompleto()
}

function checkBebida(bebida) {
  botaoSelecionadoAnteriormente('.bebidas');
  botaoSelecionado(bebida);

  nomeBebida = bebida.querySelector(".nomeBebida h3").innerHTML;
  valorBebida = bebida.querySelector(".preco").innerHTML;
  valorBebida = Number(valorBebida.replace('R$ ', '').replace(',', '.')).toFixed(2);
  conferirPedidoCompleto()
}

function checkSobremesa(sobremesa) {
  botaoSelecionadoAnteriormente('.sobremesas');
  botaoSelecionado(sobremesa);

  nomeSobremesa = sobremesa.querySelector(".nomeSobremesa h3").innerHTML;
  valorSobremesa = sobremesa.querySelector(".preco").innerHTML;
  valorSobremesa = Number(valorSobremesa.replace('R$ ', '').replace(',', '.')).toFixed(2);
  conferirPedidoCompleto()
}

function pedidoCompleto(pedido) {
  if (nomePrato && nomeBebida && nomeSobremesa) {
    pedido.classList.add('aaa')
  }
}