programa {
  funcao inicio() {
    inteiro cafe, alunos, extra, cafePerCapita
    escreva("Digite o número de café: ")
    leia(cafe)
    escreva("Digite o número de extra: ")
    leia(extra)
    escreva("Digite o número de alunos: ")
    leia(alunos)
    cafePerCapita = (cafe+extra)/alunos
    escreva("O café extra per capita é: " + cafePerCapita)
  }
}
