// //5.7// Nosso amigo Mano Juca ganhou tanto dinheiro no Uber que resolveu
// tirar ferias. Sem destino, sem regras, vida loka, lobo solitário, sem
// destino, um dia em cada lugar, sem dia pra voltar, ate o dinheiro
// acabar ...
// Logo nos primeiros dias ele encontrou um paraiso e resolveu quebrar sua
// unica regra e ficar alguns dias por ali. Encontrou um albergue meio bom
// e fez check in, mas nao conseguiu entender de forma alguma como o hotel
// calculava o valor da conta. Ele e meio burro, voces sabem ...
// O albergue utilizas faixas de preco de acordo com o numero de diarias
// Até 5 diárias, o preço por diária é R$100,00;
// De 6 a 10 diarias, R$90,00 por dia;
// A partir de 11 dias, sai R$80,00 por dia;

// Outros fatos relevantes para determinar o valor da conta:
// - Ele acabou ganhando um desconto a mais de 10% do valor total porque
// teve um "envolvimento emocional" com a moca que trabalha no balcao;
// - Quando ele abriu a carteira pra pagar, a moca viu que ele tem a
// carteirinha da Associacao dos motoristas do Uber de Palhoca, entidade
// com a qual o albergue tem convenio, e aplicou mais 15% (do valor total)
// de desconto;
// - Ele se passou e vai pagar multa de R$150 por danos materiais.

// Criar um programa que le o numero de dias que ele vai ficar no albergue
// e apresente o valor final da conta e sua composicao (os detalhes,
// pagamentos, descontos ... );

let dias 
let valorDiaria
let totalBruto
let desconto10 
let desconto15, multa=150, totalLiquido
dias = Number(prompt("Quantos dias: "))
if(dias<=5){
    valorDiaria = 100
}else if(dias<=10){
    valorDiaria = 90
}else{
    valorDiaria = 80
}

totalBruto = dias * valorDiaria
desconto10 = totalBruto * 10/100
desconto15 = totalBruto * 15/100
totalLiquido = totalBruto - (desconto10 + desconto15)+ multa

alert("Número de dias:" + dias + "\nValor da diária: R$" + valorDiaria.toFixed(2) + "\nTotal bruto: R$" + totalBruto.toFixed(2) + "\nDesconto especial: R$" + desconto10.toFixed(2) + "\nDesconto convênio: R$" + desconto15.toFixed(2) + "\nMulta: R$" + multa.toFixed(2) + "\n=============" + "\nTotal a pagar: R$" + totalLiquido.toFixed(2).replace(".",","))
