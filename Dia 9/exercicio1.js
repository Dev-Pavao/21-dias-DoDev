let continuar = true
do {
let nome = prompt("Digite seu nome: ")
let idade = Number(prompt("Digite sua idade: "))
let peso = parseFloat(prompt("Digite seu peso: "))
let altura = parseFloat(prompt("Digite sua altura: "))
let profissao = prompt("Digite sua profissão: ")

console.log(`Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura}M de altura e pesa ${peso}kg`)

if(idade >= 18){
    console.log("Já que voce tem " + idade + " Está liberado para tomar umas geladas")
} else{
    console.log("Sem gelada para você")
}

console.log("Você tem " + idade * 12 + " meses de vida, já em semanas são" + idade * 48 
+ " e por fim você tem "  + idade * 365 + " dias de vida")

let imc = peso / (altura * altura)

if(imc < 18,5 ){
    console.log(`Seu imc é de ${imc} e você é considerado magro`)
}else if( imc > 18,5 && imc< 24,9){
    console.log(`Seu imc é de ${imc} e você é considerado normal`)
}else if (imc > 24,9 && imc < 30 ){
    console.log(`Seu imc é de ${imc} e você está com sobrepeso`)
}else{
    console.log(`Seu imc é de ${imc} e você está com obesidade`)
}

let anoNascido = 2024 - idade;

console.log("Você nasceu em " + anoNascido);

for (let i = anoNascido; i <= 2024; i++) {
    let idadePorAno = i - anoNascido;
    console.log(i + " - " + idadePorAno + " anos de idade");
}
let parar = prompt("Você deseja continuar ou parar? ")
if(parar == "continuar"){
    continuar = true
} else{
    continuar = false
}
} while (continuar);
