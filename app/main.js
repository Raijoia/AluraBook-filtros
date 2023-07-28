let livros = []
const API = "https://guilhermeonrails.github.io/casadocodigo/livros.json"

getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
  // fazendo requisição
  const res = await fetch(API)

  // transformando a promise em json, para virar um object array
  livros = await res.json()
  
  let livrosDesconto = aplicarDesconto(livros)
  exibirOsLivrosNaTela(livrosDesconto)
}
