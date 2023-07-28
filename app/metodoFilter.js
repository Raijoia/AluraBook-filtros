// pegando todos os botoes
const botoes = document.querySelectorAll('.btn')

// colocando evento e adicionando a função para todos os botoes
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
  // pega o botão clicado
  const elementoBtn = document.getElementById(this.id)

  // pega o valor do elemento clicado
  const categoria = elementoBtn.value

  let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
  exibirOsLivrosNaTela(livrosFiltrados)
  if (categoria == 'disponivel') {
    const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
    exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
  }
}

function filtrarPorCategoria(categoria) {
  // filter(filtrar) => deixa apenas oque passar na verificação da função
  // arr.filter(função com verificação)
  return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
  // filter(filtrar) => deixa apenas oque passar na verificação da função
  // arr.filter(função com verificação)
  return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valor) {
  section2.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valor}</span></p>
    </div>
  `
}