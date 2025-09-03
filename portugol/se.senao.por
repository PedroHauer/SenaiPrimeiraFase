programa {
  funcao inicio() {
    cadeia nome
    real nota1, nota2, nota3, media, frequencia 
    nota1= 9
    nota2= 9
    nota3= 2
    media = (nota1 + nota2 + nota3)/3
    frequencia = 0.8
    escreva(media , "\n" )
    se(media>=7 e frequencia>=0.7){
      escreva("aprovado")
    } senao{
      escreva("reprovado")
    }

  }
}
