// pegando a section
const section = document.getElementById("livros")
const section2 = document.getElementById("valor_total_livros_disponiveis")

function exibirOsLivrosNaTela(listaDeLivros) {
  section2.innerHTML = ''
  section.innerHTML = ''
  // forEach faz uma dada função para todos os elementos de uma array
  listaDeLivros.forEach(livro => {
    // verifica a quantidade de livros e armazena o resultado nessa variável
    // let disponibilidade = verificarDisponibilidadeDoLivro(livro)

    // verificando a quantidade porem com operador ternário, passaCondição ? oqueÉParaFazerSeForTrue : oqueÉParaFazerSeForFalse
    let disponibilidade = livro.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel"

    section.innerHTML += `<div class="livro">
      <img class="${disponibilidade}" src=${livro.imagem} alt=${livro.alt}/>
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>`;
  });
}

// function verificarDisponibilidadeDoLivro(livro) {
//   if (livro.quantidade > 0) {
//     // retorna para a variável armazenar
//     return "livro_imagens"
//   } else {
//     // retorna para a variável armazenar
//     return "livro_imagens indisponivel"
//   }
// }
