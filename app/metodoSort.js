// pegando o botão isolado
let btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco")
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
  // sort(ordenar) => para ordenar numeros de forma crescente precisa passar uma função, nesse caso passei a função e coloquei a.preco para pegar o preco na array de livros
  // se for decrescente, precisa passar a função com b.preco - a.preco
  let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
  exibirOsLivrosNaTela(livrosOrdenados)
}