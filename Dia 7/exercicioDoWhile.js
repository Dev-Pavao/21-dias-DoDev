 
let somaValoresInseridos = 0
let maiorValorInserido= 0 
let saldoAtual = 100
let continuar = false 
let totalTransacoes = 0 
const nome = prompt("Digite seu nome: ")
const cpf = prompt("Digite seu CPF: ")   
console.log(`Olá ${nome} ${cpf} seu saldo atual é de R$ ${saldoAtual}`)
do {  
const valor = Number(prompt("Digite o valor da transação: "))    
const opcao = prompt("Deseja a opção de saque ou depósito? ")
    
    if(valor < 0){
        console.log("Valor inválido, transação não foi realizada ")
    }

    else if(opcao == "saque" && saldoAtual < valor){
        console.log("Saldo insuficiente, transação não foi realizada")
    
    }else if(opcao == "saque" && saldoAtual > valor){
        saldoAtual -= valor
        somaValoresInseridos +=valor
        totalTransacoes ++ 
        console.log(`Transação realizada com sucesso seu saldo atual é de R$ ${saldoAtual}`)
    } 
    
    if(valor > maiorValorInserido){
        maiorValorInserido = valor
    }

    if(opcao == "depósito"){
        saldoAtual += valor
        somaValoresInseridos += valor
        totalTransacoes++
        console.log(`Transação realizada com sucesso seu saldo atual é de R$ ${saldoAtual}`)
    } 
   
    
    const continuarParar = prompt("Deseja continuar ou parar ")
    
    if  (continuarParar === "continuar"){
        continuar = true    
    } else if (continuarParar === "parar"){
        continuar = false
    } else {
        console.log("Opção inválida programa encerrando")
        continuar = false
    }   
        
}   

while(continuar)
   
   console.log("Seu saldo atual é de R$ " + saldoAtual)
   console.log("O maior valor inserido foi de R$ " +  maiorValorInserido)
   console.log("A média dos valores inserido é de R$ " + (somaValoresInseridos / totalTransacoes))
