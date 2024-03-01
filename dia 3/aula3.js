let nome = prompt("Digite seu nome")
let idade = parseInt(prompt("Digite sua idade"))
let altura = Number(prompt("Digite sua altura"))
let peso = Number(prompt("Digite seu peso"))
let anoNascimento = 2024 - idade
let imcUsuario = parseInt(peso / (altura **2))
console.log("Olá, " + nome, "voce tem " + idade, "nasceu em " + anoNascimento, "tem " + altura + " de altura, pesa " + peso + "kg seu IMC é " + imcUsuario + "Kg/m2")