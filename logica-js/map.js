// const numeros = [3,5,8,10]


// const valoresDobrados = numeros.map((valor) => valor*2 )
// console.log(numeros)
// console.log(valoresDobrados)

const usuarios = [
    {nome:"João",idade:23},
    {nome:"Maria",idade:15},
    {nome:"Pedro",idade:21}
]
const nomesUsuarios = usuarios.map(usuario => usuario.nome)
for (let nome of nomesUsuarios) {
    console.log(nome)
}
const idadesUsuarios = usuarios.map(usuario => usuario.idade)
for (let idade of idadesUsuarios) {
    console.log(idade)
}

