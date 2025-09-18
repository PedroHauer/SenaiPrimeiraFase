let placa  
placa = Number(prompt("Digite o ultimo número da placa do veículo: "))
if(placa == 1 || placa == 0){
  alert("Não pode circular na segunda-feira")
}else if(placa == 0 || placa == 3){
    alert("Não pode circular na terça-feira")
}else if (placa == 4 || placa == 5){ 
    alert("Não pode circular na quarta-feira")
}else if(placa==6|| placa == 7){
    alert("Não pode circular na quinta-feira")      
}else if (placa== 8|| placa == 9){
    alert("Não pode circular na sexta-feira")
}