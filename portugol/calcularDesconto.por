programa {
 inclua biblioteca Matematica

funcao real calcularDesconto(real preco){
  se(preco>=100){
  retorne  preco*0.9
} senao {
  retorne preco
}
}
  funcao inicio() {
    real valor, valorFinal
    escreva("Digite o valor da compra: R$ ")
    leia(valor)
    valorFinal = calcularDesconto(valor)
    valorFinal=Matematica.arredondar(valorFinal,2)
    escreva("Valor final da compra R$ ", valorFinal)


  }
}
