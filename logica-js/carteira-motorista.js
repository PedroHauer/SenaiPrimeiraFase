let prompt = require("prompt-sync")()
let carteiraMotorista = prompt("Tem carteira de motorista? (S) (N) ")
let idade = Number(prompt("Digite sua idade: "))
let bafometro = Number(prompt("Digite o valor do bafômetro: "))
if(idade >=18 && carteiraMotorista.toUpperCase() === "S"){
    console.log("Liberado para dirigir")
}else{
    console.log("Negado para dirigir")
}if(bafometro > 0.05){
    console.log("Multado")
}else{
    console.log("Não multado")
}