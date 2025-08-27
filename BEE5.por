//5.0

programa {
  inclua biblioteca Matematica
  funcao inicio() {
    inteiro codigo1, quantidade1, codigo2, quantidade2
    real preco1, preco2, total
    escreva("Qual o código da peça 1? ")
    leia(codigo1)
    escreva("Quantas peças 1 tem? ")
    leia(quantidade1)
    escreva("Qual o preço de uma peça 1? ")
    leia(preco1)
    escreva("Qual o código da peça 2? ")
    leia(codigo2)
    escreva("Quantas peças 2 tem? ")
    leia(quantidade2)
    escreva("Qual o preço de uma peça 2? ")
    leia(preco2)
    total = (preco1*quantidade1 + preco2*quantidade2 )
    total = Matematica.arredondar(total,2)
    escreva("O VALOR A PAGAR É: R$ " , total)
  }
}
