//3.0
programa {
  funcao inicio() {
    inteiro numeroDoFuncionario, horas
    real valorPorHora, salario
    escreva("Qual seu número na fábrica? ")
    leia(numeroDoFuncionario)
    escreva("Qual a quantidade de horas trabalhadas? ")
    leia(horas)
    escreva("Qual o valor que recebe por horas? ")
    leia(valorPorHora)
    salario= horas*valorPorHora
    escreva(" NUMBER = " , numeroDoFuncionario,   "\n SALARY = U$ " + salario)
  }
}
