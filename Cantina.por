programa {
  funcao inicio() {
    real cafe, coxinha, halls, doceDeLeite, conta
    escreva("Digite o preço do café: ")
    leia(cafe)
    escreva("Digite o preço da coxinha: ")
    leia(coxinha)
    escreva("Digite o valor do halls: ")
    leia(halls)
    escreva("Digite o valor do doce de leite: ")
    leia(doceDeLeite)
    conta = 3*cafe+coxinha+halls+2*doceDeLeite
    escreva("A conta da cantina é: " + conta)
  }
}
