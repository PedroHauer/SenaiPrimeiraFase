let pontuacao = Number(prompt("Digite a pontuação do jogador: "))
if (pontuacao<=10){
    alert("Deu ruim")
}else if(pontuacao>10 && pontuacao<=100){
    alert("Tá, amanhã é um novo dia")
}else if(pontuacao>100 && pontuacao<=200){
    alert("Supimpa!")

}else if(pontuacao>200){
    alert("Uau, você é demais!")
}