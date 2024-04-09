let nome = []
let senha = []
function opcao(){
let escolha = prompt("Escolha as opções: 1-Cadastro \n2-Login \n3-Excluir \n4-Encerrar programa")


 
return escolha;


}   
 
function cadastro(){
nome.push(prompt("Digite seu nome: "))
senha.push(prompt("Digite sua senha: "))

}

function login(cadastroNome, cadastroSenha){
    let indice = nome.indexOf(cadastroNome)
    if (indice !== -1 && senha[indice == cadastroSenha]){
        return true;

    }   else {
        return false;
    }
            
    }
    

function exclusao(cadastroNome){
    let indice = nome.indexOf(cadastroNome)

    if(indice !== -1){
        nome.splice(indice, 1);
        senha.splice(indice,1);
        console.log("Cadastro excluido com sucesso!")
    } else{
        console.log("Usuário não encontrado.")

    }
}

let continuar = true;
while(continuar){
    let solicitarOpcao = opcao();

    switch (solicitarOpcao){
     case "1": 
      cadastro()
      break;
        
     case "2":
      let nome = prompt("Digite seu nome")
      let senha = prompt("Digite sua senha: ")
      let fazerLogin = login(nome, senha)
      if(fazerLogin){
        console.log("Login realizado com sucesso")
      }else{
        console.log("Nome ou senha incorretos!");
      }
      break;
     case "3":
      let nome2 = prompt("Digite seu nome")
      exclusao(nome2);
      break;
     case "4":
        continuar = false;
        break;
     default:
        console.log("opção invalida. Tente novamente");
        break;

    }
}
//Tentando corrigir erro