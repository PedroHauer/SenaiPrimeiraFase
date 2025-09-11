// Jogo de Adivinhação: Crie um número aleatório entre 1 e 10. Peça ao usuário para adivinhar o número e, em seguida, diga se eles acertaram ou não.
let numeroAleatorio = Math.floor(Math.random() * 10) + 1
let palpite = Number(prompt("Adivinhe o número entre 1 e 10: "))
if(palpite === numeroAleatorio){
    alert("Parabéns! Você acertou!")
} else{
    alert(`Errado! O número era ${numeroAleatorio}`)
}       