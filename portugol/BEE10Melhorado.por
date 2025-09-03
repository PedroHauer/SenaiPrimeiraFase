programa {
  funcao inicio() {
    inteiro valor, nota100, nota50, nota20, nota10, nota5, nota2, nota1,valorOriginal
    escreva("Digite o valor: ")
    leia(valorOriginal)
    valor=valorOriginal
    nota100= valor/100
    valor= valor%100
    nota50= valor/50
    valor=valor%50
    nota20=valor/20
    valor=valor%20
    nota10=valor/10
    valor=valor%10
    nota5=valor/5
    valor=valor%5
    nota2=valor/2
    valor=valor%2
    nota1=valor/1
    valor=valor%1

    escreva(nota100, " nota de 100 reais\n", nota50, " nota de 50 reais\n", nota20, " nota de 20 reais\n", nota10, " nota de 10 reais\n", nota5, " nota de 5 reais\n", nota2, " nota de 2 reais\n", nota1, " nota de 1 real")
    escreva("\nValor: R$" , valorOriginal)

  }
}