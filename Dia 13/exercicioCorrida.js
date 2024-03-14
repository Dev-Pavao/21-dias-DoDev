 class Carro{
    Nome 
    Potencia
    VelocidadeMaxima
    Aceleracao
    Distancia
    constructor(nome,potencia,velocidadeMaxima,aceleracao){
        this.Nome = nome
        this.Potencia = potencia
        this.VelocidadeMaxima = velocidadeMaxima
        this.Aceleracao = aceleracao
        
    }
 
    calculo(distancia){
    
        let resultado = distancia / (this.VelocidadeMaxima / this.Aceleracao)
        return resultado
    }
}

class Corrida{
    Nome2
    Tipo
    Distancia2
    Participantes
    Vencedor
    constructor(nome2,tipo, distancia2, participantes,vencedor){
        this.Nome2 = nome2
        this.Tipo = tipo
        this.Distancia2 = distancia2
        this.Vencedor = ""
        this.Participantes = []
    }
    DefinirVencedor(){
     let menorTempo = this.Participantes[0].calculo(this.Distancia2)
     let vencedor = this.Participantes[0]
     for(let index = 1; index < this.Participantes.length; index++){
        let tempo = this.Participantes[index].calculo(this.Distancia2)
        if(tempo < menorTempo){
            menorTempo = tempo
            vencedor = this.Participantes[index]
        }
     }
        return this.Vencedor = vencedor
    }
    ExibirVencedor(){
        alert("O vencedor é: " + this.Vencedor.Nome2)
    }
}

let corrida = new Corrida("Mercedes", "Formula 1" , 70000)
corrida.Participantes[0] = new Carro("Kicks", 130, 170, 4)
corrida.Participantes[1] = new Carro("Marea", 230, 200, 9)
corrida.Participantes[2] = new Carro("Peugot 208", 310, 220, 8)

corrida.DefinirVencedor()
corrida.ExibirVencedor()