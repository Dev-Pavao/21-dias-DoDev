var parar = true
function exibirPerguntas(){
let nome = prompt("Digite seu nome: ")
let salario = Number(prompt("Digite seu salário: "))
     aumentoSalario(nome,salario)
}

function aumentoSalario(nome,salario){
    let salarioNovo = 0
    if(salario <= 1500){
        salarioNovo = salario + (salario * 0.2)
    } if(salario  >= 1501 && salario <= 2000 ){
        salarioNovo = salario + (salario * 0.15)
    
    } if (salario >= 2001 && salario <= 3000){
        salarioNovo=  salario + (salario * 0.1)
        
    } if(salario >= 3001 ){
        salarioNovo =  salario + (salario * 0.05)
        
    }
    console.log(`Olá colaborador seu nome é: ${nome}`)
    console.log(`Seu salário é de ${salario}`)
    console.log(`Seu reajuste foi de ${parseFloat((salarioNovo - salario)/salario *100)}%`)
    console.log(`Seu salário após o reajuste é de: ${salarioNovo} `)
    
     novasInformacoes()
        
    }

    function novasInformacoes(){
        let continuar = prompt("Digite 1 se deseja inserir novas informações: ")
        if(continuar == "1"){
            parar = true
            exibirPerguntas()
        } else{
            parar = false
            console.log("Programa encerrado")
        }
    }
exibirPerguntas()

