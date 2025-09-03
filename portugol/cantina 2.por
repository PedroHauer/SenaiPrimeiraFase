programa {
  funcao inicio() {
    inteiro cafe, coxinha, halls, doceDeLeite, conta
    escreva("preço do café: ")
    leia(cafe)
    escreva("preço da coxinha: ")
    leia(coxinha)
    escreva("preço do halls: ")
    leia(halls)
    escreva("preço do doce de leite: ")
    leia(doceDeLeite)
    conta = 2*cafe+coxinha+halls+doceDeLeite
    escreva("Total a pagar: " + conta)
  }
}
