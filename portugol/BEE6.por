//6

programa {
  inclua biblioteca Matematica
  funcao inicio() {
    inteiro x
    real y, consumo
    escreva("Digite a distância total percorrida: ")
    leia(x)
    escreva("Digite o total de combustivel gasto: ")
    leia(y)
    consumo= x/y
    consumo=Matematica.arredondar(consumo,3)
    escreva(consumo , "km/l")
  }
}
