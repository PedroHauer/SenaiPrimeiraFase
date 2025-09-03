programa {
  inclua biblioteca Matematica

  funcao inicio() {
    cadeia nome
    real nota1, nota2, nota3, media, frequencia
    escreva("Digite o nome do aluno: ")
    leia(nome)
    escreva("Digite a primeira nota: ")
    leia(nota1)
    escreva("Digite a segunda nota: ")
    leia(nota2)
    escreva("Digite a terceira nota: ")
    leia(nota3)
    escreva("Digite a frequência: ")
    leia(frequencia)
    frequencia=frequencia*100
    limpa()
    media = (nota1+nota2+nota3)/3

    media= Matematica.arredondar(media,1)
    escreva("A média do aluno é " , media, "\nE a frequência é: ", frequencia ,"% \n")
    se (media>=7 e frequencia>=8){
    escreva("\nAPROVADO O ALUNO: " + nome)
    } senao{
     escreva("\nREPROVADO O ALUNO: " + nome)
    }

  }
}
