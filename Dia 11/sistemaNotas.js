let continuar = true
let alunos = []
let notas = []
let contador = 0
while(continuar){
let nomes = prompt(`Digite o nome do ${contador+1} aluno`)
let nota = Number(prompt(`Digite a nota do ${contador+1} aluno:`))
alunos[contador]= nomes 
notas[contador] = nota
contador++

let stop = prompt("Deseja inserir mais informações?")
if(stop === "Não" || stop === "não"){
    continuar = false
}
}
for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i] + " - " + notas[i])

}
let soma = 0
for(let i = 0; i < notas.length; i++){
    soma += notas[i]
}
let media = soma / alunos.length
console.log(`A soma das notas foram de: ${soma}`)
console.log("A média geral da turma foi: " + media) 






