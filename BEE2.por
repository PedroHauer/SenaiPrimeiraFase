//2.0

programa {
  inclua biblioteca Matematica
  funcao inicio() {
    real a,b,c, media
    escreva("Qual a nota A: ")
    leia(a)
    escreva("Qual a nota B: ")
    leia(b)
    escreva("Qual a nota C: ")
    leia(c)
    media=(a*2 + b*3 + c*5)/10
    media=Matematica.arredondar(media,1)
    escreva("A média do aluno é: \n" + media)
  }
}