function aplicarDesconto(livros) {
  const desconto = 0.3
  // o map precisa retornar alguma coisa, por isso, colocar o return
  // o map cria uma nova array, por isso é diferente do forEach
  livrosDesconto = livros.map(livro => {
    // {...livro, objetoQueIraMudar: mudança} ... = faz uma cópia da array
    return {...livro, preco: livro.preco * (livro.preco * desconto)}
  })

  // precisa retornar alguma coisa, pois está numa variável
  return livrosDesconto
}