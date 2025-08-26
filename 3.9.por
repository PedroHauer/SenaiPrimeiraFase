
// 3.9
programa {
  funcao inicio() {
    real corre1, corre2, corre3, corre4, corre5, totalDoDia, totalLiquido
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
  escreva("O valor total do dia foi: R$ " + totalDoDia) 
  escreva("\nTotal ganho no dia (após o desconto da Uber): " + totalLiquido)  
  // real desconto, total
  // desconto = total * 25/100
  // escreva("\nTotal líquido: R$" + totalLiquido)

  }

}
