// teste crud

// const dinossauro = {
//     nome: 'Rex',
//     altura: '6'
// }

let dinossauros = JSON.parse(localStorage.getItem("dinossauros")) || []
mostrarTodosDinos()
let idEditando = 0


// dinossauros.push(dinossauro)

// document.getElementById('dino').innerHTML = `Nome: ${dinossauros[0].nome}; Altura: ${dinossauros[0].altura}`

function cadastrarDino(){

    dinossauros = JSON.parse(localStorage.getItem("dinossauros")) || []

    let nomeLido = document.getElementById('inputNome').value
    let alturaLida = Number(document.getElementById('inputAltura').value)

    const dino = {
        id: Date.now(),
        nome: nomeLido,
        altura: alturaLida
    }
    dinossauros.push(dino)

    console.log(dinossauros);

    // let dinossaurosTexto = JSON.stringify(dinossauros)
    // localStorage.setItem("dinossauros", dinossaurosTexto)

    localStorage.setItem("dinossauros", JSON.stringify(dinossauros))
    
    limparForm()
    alert("Dino cadastrado com sucesso!")

    mostrarTodosDinos()
    
}

function limparForm(){
    document.getElementById('inputNome').value = ''
    document.getElementById('inputAltura').value = ''
    // document.getElementById('inputPesoOuMassa').value = ''
    
    document.getElementById('inputNome').focus()
}

function mostrarTodosDinos(){
    dinossauros = JSON.parse(localStorage.getItem('dinossauros')) || []
    document.getElementById('listaDinos').innerHTML = '' 
    for(let i=0; i<dinossauros.length ; i++){
        // console.log(i);
        document.getElementById('listaDinos').innerHTML += `
            <div class='card'>
                <h3>${dinossauros[i].nome} </h3>
                <p>Altura: ${dinossauros[i].altura}</p>
                <p>ID🤫: ${dinossauros[i].id}</p>
                <button onclick="editarDino(${dinossauros[i].id})">📝</button>
                <button onclick="deletarDino(${dinossauros[i].id})">🗑️</button>
            </div>
        `
    }
}
function deletarDino(id){
    dinossauros = JSON.parse(localStorage.getItem('dinossauros')) || []
    let dinosTemp = dinossauros.filter( (d) => d.id != id )
    localStorage.setItem("dinossauros", JSON.stringify(dinosTemp))
    mostrarTodosDinos()
    alert("Dino deletado com sucesso!")
}
function editarDino(id){ // selecionarDino seria um nome melhor
    console.log(id);
    dinossauros = JSON.parse(localStorage.getItem('dinossauros')) || []

    for(let i=0; i<dinossauros.length; i++){
        if(dinossauros[i].id == id){
            console.log(dinossauros[i]);
            document.getElementById('inputNome').value = dinossauros[i].nome
            document.getElementById('inputAltura').value = dinossauros[i].altura
            idEditando = dinossauros[i].id
        }
    }
    
}

function salvarDino(){
    dinossauros = JSON.parse(localStorage.getItem('dinossauros')) || []
    for(let i=0; i<dinossauros.length; i++){
        if(dinossauros[i].id == idEditando){
            console.log(dinossauros[i]);
            dinossauros[i].nome = document.getElementById('inputNome').value
            dinossauros[i].altura = document.getElementById('inputAltura').value
        }
    }
    localStorage.setItem("dinossauros", JSON.stringify(dinossauros))
    mostrarTodosDinos()
    alert("Alterado com muito sucesso")
    limparForm()
    idEditando = 0
}

function lancarMeteoro(){
    dinossauros = JSON.parse(localStorage.getItem('dinossauros')) || []
    dinossauros.length = 0
    localStorage.setItem("dinossauros", JSON.stringify(dinossauros))
    mostrarTodosDinos()
}

function navegarParaDois(){
    // alert('Tchau')

    let nome = prompt("User:")
    let senha = prompt("Senha: ")

    if(nome == "admin" && senha == "admin"){
        window.location.href = 'dois.html'
    }else{
        alert("Você está tentando invadir, a polícia tá chegando!!")
    }

}


function testar(id){
    for(let i=0; i<dinossauros.length; i++){
        if(dinossauros[i].id == id){
            console.log(dinossauros[i]);

        }
    }
    
}