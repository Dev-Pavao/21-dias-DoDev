const qtdNum = parseInt(prompt("Quantos números voce deseja inserir no array? "))
let array = []
for(let i=0; i< qtdNum; i++){
const numeros = parseInt(prompt(`Digite o ${i+1} número`))
array [i] = numeros
}
console.log("Original: " + array)
console.log("Reverso: " + array.reverse())

