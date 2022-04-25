//exemplo de parcelas com for

function calcularFor() {
  let valorTotal = 3200;
  for (i = 1; i <= 12; i++) {
    let valorParcela = valorTotal / i;
    console.log(
      `N. de Parcelas ${i} - Valor da Parcela: R$${valorParcela.toFixed(2)}`
    );
  }
}

//utilizando while

function calcularWhile() {
  let valorProduto = 3000;
  let parcelas = 1;
  while (parcelas <= 12) {
    let valorDoParcelamento = valorProduto / parcelas;
    console.log(`N. de Parcelas ${parcelas} - Valor da Parcela: R$${valorDoParcelamento.toFixed(2)}`);
    parcelas++;
  }
}
