const prompt = require("prompt-sync")()

const notaFinal = parseFloat(prompt("Digite a nota final(0-10): "))

const frequencia = prompt("Digite a frequência(0-10): ")

if(notaFinal >= 7 && frequencia >= 8){
    console.log("Aprovado")
}else{
    console.log("Reprovado")
}