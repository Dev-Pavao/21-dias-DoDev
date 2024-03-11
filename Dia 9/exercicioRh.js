let dadosCorreto = true
do {

let nome = prompt("Digite seu nome: ")
let idade = parseInt(prompt("Digite sua idade: "))
let salario = parseFloat(prompt("Digite seu salário: "))
console.log(`Olá ${nome}, você tem ${idade} anos e seu salário atual é de ${salario}`)
let dadosErrado = prompt("Suas informções estão corretas?")
if(dadosErrado == "não"){
    console.log("Digite as novamente: ")
} else{
    dadosCorreto = false
}
let porcentagem = 1.015
let ano = 2024
for(let i = ano; i <=2034; i++){
    salario = salario + porcentagem
    porcentagem *= 2   
    console.log(i + "-" + salario.toFixed(2) + "reais" +" de salario")
    }
} while (dadosCorreto);
