programa {
  funcao inicio() {
    real salario, salarioDiario
    inteiro dias 
    escreva("Digite seu salário: R$")
    leia(salario)
    escreva("Digite o número de dias que vocÊ trabalhou: ")
    leia(dias)
    salarioDiario = salario/dias 
    escreva("Seu salário diário deu: R$" + salarioDiario)
  }
}
