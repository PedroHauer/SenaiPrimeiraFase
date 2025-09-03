
// 3.10
programa {
  funcao inicio() {
    real corre1, corre2, corre3, corre4, corre5, totalDoDia, totalLiquido, salarioMensal
    inteiro diasDeTrabalho=20
    escreva("Digite o valor do primeiro corre: R$ ")
  leia(corre1)
  escreva("Digite o valor do segundo corre: R$ ")
  leia(corre2)
  escreva("Digite o valor do terceiro corre: R$ ")
  leia(corre3)
  escreva("Digite o valor do quarto corre: R$ ")
  leia(corre4)
  escreva("Digite o valor do quinto corre: R$ ") 
  leia(corre5)  
  totalDoDia = corre1+corre2+corre3+corre4+corre5
  totalLiquido = totalDoDia*75/100
  salarioMensal = totalLiquido*diasDeTrabalho
  escreva("O valor total do dia foi: R$ " + totalDoDia) 
  escreva("\nTotal ganho no dia (após o desconto da Uber): " + totalLiquido)
  escreva("\nEstimativa do salário mensal é: " + salarioMensal)

  // real salario
  // salario = totalLiquido * 20
  // escreva("\nEstimativa do salário: R$" + salario)
  }
}
