let prompt = require("prompt-sync")()
let usuario = prompt("Digite o nome do usuário: ")
let senha = Number(prompt("Digite a senha: "))
if(usuario === "admin" && senha === 12345){
    console.log("Olá admin, seja bem vindo!")
}else{ 
    console.log("Acesso negado")
}
