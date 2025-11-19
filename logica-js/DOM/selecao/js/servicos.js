// arquivo serviços

const servicoWeb = document.querySelector("#servico-web")

const showButton = document.querySelector("#show")

const hideButton = document.querySelector("#hide")

showButton.addEventListener("click",()=>{
    servicoWeb.classList.add("show")
    servicoWeb.classList.remove("hide")
})

hideButton.addEventListener("click",()=>{
    servicoWeb.classList.add("hide")
     servicoWeb.classList.remove("show")
})

