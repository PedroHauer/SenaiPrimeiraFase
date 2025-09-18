 const alunosDoSenai = [
    {
        nome: "Justin Bieber",
        email: "bieber@gmail.com",
        matricula:"123",
        idade:31
    },
    {
        nome:"Maria",
        email:"maria@gmail.com",
        matricula:"321",
        idade:30
    },
    {
        nome:"Pedro",
        email:"pedro@gmail.com",
        matricula:"456",
        idade:20
    }
 ]

 console.log(`O nome do usuário é ${alunosDoSenai[0].nome} e o nome da usuária é ${alunosDoSenai[1].nome}`)

 console.log(`O nome do usuário é ${alunosDoSenai[2].nome}, o email do usuário é ${alunosDoSenai[2].email}, a matricula do usuário é ${alunosDoSenai[2].matricula} e a idade do usuário é ${alunosDoSenai[2].idade} anos.`)

 if(alunosDoSenai[2].idade < 18){
    console.log("MENOR DE IDADE. ACESSO NEGADO")
 }else{
   console.log("MAIOR DE IDADE. ACESSO PERMITIDO")
 }

 