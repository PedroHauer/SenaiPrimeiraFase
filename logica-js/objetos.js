const usuario = {
    login: "Pedro Hauer",
    email: "pedro@gmail.com",
    saldo:30.000,
    isLogin:true,
    senha:"123456789"
}

const produtos = ["Notebook", "Smartphone", "Tablet", "Monitor"]


console.log(`O email do usuário é ${usuario.email} e o saldo do usuário é ${usuario.saldo}`)
console.log(`O produto escolhido pelo ${usuario.login} foi ${produtos[1]}`)

if(usuario.saldo > 40){
    console.log("Compra aprovada")
}else{
    console.log("Saldo insuficiente")
}