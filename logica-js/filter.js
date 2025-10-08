const numeros = [2,5,7,8,9,98,6,3,5,8,10]

const numerosMaioresQueCinco = numeros.filter(valor => valor>5)
console.log(numerosMaioresQueCinco)

numerosPares = numeros.filter(valor => valor % 2 === 0)
console.log(numerosPares)

const usuarios = [
    {nome:"João",idade:23},
    {nome:"Maria",idade:15},
    {nome:"Pedro",idade:21}
]

const usuariosMenoresDeIdade = usuarios.filter(usuario => usuario.idade<18)
console.log(usuariosMenoresDeIdade)


