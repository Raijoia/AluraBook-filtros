function calcularValorTotalDeLivrosDisponiveis(livros) {
  // reduce serve para somar, diminuir ou mostrar o menor ou maior numero dentro de uma array
  // arr.reduce((acumulador, atual(objeto)) => acumulador + atual, valorInicial), no nosso caso, estamos somando os valores de uma array
  return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
} 
