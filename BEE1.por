//1.0

programa {
  inclua biblioteca Matematica
  funcao inicio() {
    real a,b,media
    escreva("Qual a nota A: ")
    leia(a)
    escreva("Qual a nota B: ")
    leia(b)
    media=(a*3.5 + b*7.5)/11
    media=Matematica.arredondar(media,2)
    escreva("A média do aluno é: \n" + media)
  }
}
