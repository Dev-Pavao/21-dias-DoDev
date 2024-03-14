let nomes = []
let senhas = []
let continuar = true
let contador = 0 

while(continuar){
let opções = prompt("Digite o que deseja realizar: \n1-Cadastro \n2-Login \n3-Excluir um cadastro \n4-Encerrar programa")

switch(opções){

case "1":
let nome = prompt("Digite seu nome: ")
let senha = prompt("Digite sua senha: ")
nomes[contador] = nome
senhas[contador] = senha
contador++
break;

case "2":
let loginNome = prompt("Digite seu nome: ");
let loginSenha = prompt("Digite sua senha: ");
let index = nomes.indexOf(loginNome);

if (index !== -1 && senhas[index] === loginSenha) {
    console.log("Login realizado com sucesso");
} else{
console.log("Informações incorretas! Tente novamente.");
}
break;

case "3":
let excluirNome = prompt("Digite seu nome: ")
let excluirSenha = prompt("Digite sua senha: ")
if(nomes.includes(excluirNome)){
nomes.splice(nomes.indexOf(excluirNome), 1)
senhas.splice(senhas.indexOf(excluirSenha), 1)
console.log("Cadastro excluido com sucesso")
}
break;
case "4":
console.log("Programa encerrado!")
continuar = false

}

}