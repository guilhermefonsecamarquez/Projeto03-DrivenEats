let nomePrato, nomeBebida, nomeSobremesa;
let valorPrato, valorBebida, valorSobremesa;
let total = 0;
let overlay = document.querySelector('.overlay');

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
    finalizarPedido.removeAttribute('disabled');
    finalizarPedido.classList.add('pedidoCompleto');
    finalizarPedido.innerHTML = "Fechar pedido"
  }
}

function aparecerOverlay() {
  overlay.classList.toggle('escondido')
}

function valoresOverlay() {
  overlay.querySelector('.prato .nomePrato').innerHTML = nomePrato;
  overlay.querySelector('.bebida .nomeBebida').innerHTML = nomeBebida;
  overlay.querySelector('.sobremesa .nomeSobremesa').innerHTML = nomeSobremesa;
  overlay.querySelector('.total .nomeTotal').innerHTML = "TOTAL";

  overlay.querySelector('.prato .precoPrato').innerHTML = valorPrato.toFixed(2).replace('.', ',');
  overlay.querySelector('.bebida .precoBebida').innerHTML = valorBebida.toFixed(2).replace('.', ',');
  overlay.querySelector('.sobremesa .precoSobremesa').innerHTML = valorSobremesa.toFixed(2).replace('.', ',');
  overlay.querySelector('.total .precoTotal').innerHTML = `R$ ${total.toFixed(2).replace('.', ',')}`;

  aparecerOverlay();
}



function checkPrato(prato) {
  botaoSelecionadoAnteriormente('.pratos');
  botaoSelecionado(prato);

  nomePrato = prato.querySelector(".nomePrato h3").innerHTML;
  valorPrato = prato.querySelector(".preco").innerHTML;
  valorPrato = Number(Number(valorPrato.replace('R$ ', '').replace(',', '.')).toFixed(2));
  conferirPedidoCompleto()
}

function checkBebida(bebida) {
  botaoSelecionadoAnteriormente('.bebidas');
  botaoSelecionado(bebida);

  nomeBebida = bebida.querySelector(".nomeBebida h3").innerHTML;
  valorBebida = bebida.querySelector(".preco").innerHTML;
  valorBebida = Number(Number(valorBebida.replace('R$ ', '').replace(',', '.')).toFixed(2));
  conferirPedidoCompleto()
}

function checkSobremesa(sobremesa) {
  botaoSelecionadoAnteriormente('.sobremesas');
  botaoSelecionado(sobremesa);

  nomeSobremesa = sobremesa.querySelector(".nomeSobremesa h3").innerHTML;
  valorSobremesa = sobremesa.querySelector(".preco").innerHTML;
  valorSobremesa = Number(Number(valorSobremesa.replace('R$ ', '').replace(',', '.')).toFixed(2));
  conferirPedidoCompleto()
}

function pedidoCompleto() {
  if (nomePrato && nomeBebida && nomeSobremesa) {
    total = valorPrato + valorBebida + valorSobremesa;
    valoresOverlay();
  }
}

function finalizarPedido() {
    let mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${nomePrato}\n- Bebida: ${nomeBebida}\n- Sobremesa: ${nomeSobremesa}\nTotal: R$ ${total.toFixed(2).toString().replace('.', ',')}`;
    let linkWhatsApp = `https://wa.me/5531999999999?text=${encodeURIComponent(mensagem)}`;
    window.location.href = linkWhatsApp;
}

function cancelarPedido() {
  aparecerOverlay();
}