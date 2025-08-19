programa {
  funcao inicio() {
    real n1, p1, n2, p2, media
    escreva("Digite a nota 1: ")
    leia(n1)
    escreva("Digite a prova um: ")
    leia(p1)
    escreva("Digite a nota 2: ")
    leia(n2)
    escreva("Digite a prova dois: ")
    leia(p2)
    media =  (n1*p1+n2+n2*p2)/(p1+p2)
    escreva("A média ponderada de duas notas é: " + media)
  }
}
