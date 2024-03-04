
let estaComFome = prompt("Você está com fome? ")
let dinheiro = prompt("Você tem dinheiro? ")
let restaurante = prompt(" O restaurante está aberto? ")

if(estaComFome==="Não" || dinheiro=== "Não"){
    console.log("Hoje a janta será em casa")
} else if(estaComFome==="Sim" && dinheiro==="Sim" && restaurante==="Não")
console.log("Peça um delivery")
else if (estaComFome==="Sim" && dinheiro==="Sim" && restaurante==="Sim")
console.log("Hoje o jantar vai ser no seu restaurante preferido") 

let nome = prompt("Qual seu nome? ")
let idade = prompt("Qual sua idade? ")
let carta = prompt("Você tem carta? ")
let carro = prompt("Você tem algum carro? ")

if(idade < 18 || carta === "Não" ){
    console.log(nome + ", você não pode dirigir.")

} else if (idade >= 18 && carta===("Sim") && carro===("Não"))
console.log(nome + ", você pode dirigir mas não tem carro.")

    else if(idade >= 18 && carta===("Sim") && carro===("Sim"))
    console.log(nome + ", você será o motorista.")
