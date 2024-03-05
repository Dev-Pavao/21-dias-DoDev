let opcao = prompt("Deseja abastecer com gasolina, com álcool ou calibrar os pneus? ")

switch (opcao){
    case "gasolina":
        let valor = Number(prompt("Valor que deseja colocar? "))
        let litro = Number(valor / 5)
            console.log("Seu carro foi abastecido com", litro,"L")
            break;
    case "álcool":
        let valorAlcool = Number(prompt("Valor que deseja colocar? "))
        let litroAlcool = Number(valorAlcool / 3)
            console.log("Seu carro foi abastecido com", litroAlcool, "L")
            break;
    case "calibrar":
            console.log("Seu pneu foi calibrado com sucesso")
            break;
    default:
            console.log("Você não selecionou nenhuma das opções.")
            break;
}
