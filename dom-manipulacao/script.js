function mostrarMensagem(){
    alert("Mensagem")
    alert("resto da mensagem")
}

function executarExercicio() {
    // let nome = prompt("Qual seu nome? ")
    // alert("Olá" + nome)
    let nome = document.getElementById("entrada").value
    document.getElementById("resultado").innerHTML = `Olá ${nome}`
}

function efetuarLogin() {
    let resultado = document.getElementById("resultadoLogin")
    let user = document.getElementById("username").value
    if(user === "Pedro"){
       resultado.innerHTML = "Login com sucesso"
    }else{
         resultado.innerHTML = "Erro"
    }
}

