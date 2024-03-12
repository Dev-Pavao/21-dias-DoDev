let modelos = []
let anos = []
let valores = []
let continuar = true
let contadorCarro = 0
while(continuar){
let modelosCarro = prompt("Digite o modelo do " + (contadorCarro+ 1) + " do carro: ")
let anosCarro = Number(prompt("Digite o ano " + (contadorCarro+ 1) + " do carro: "))
let valoresCarro = Number(prompt("Digite o valor " + (contadorCarro+ 1) + " do carro: "))
modelos[contadorCarro] = modelosCarro
anos[contadorCarro] = anosCarro
valores[contadorCarro] = valoresCarro
contadorCarro++
let stop = prompt("Digite 1 se deseja continuar e 2 se deseja parar")
if(stop == 2){
    continuar = false
}
}

for(let i = 0; i < modelos.length; i++){
console.log(`(${modelos[i]}), (${anos[i]})  Valor: (${valores[i]})`)
}

valores.sort(function(a, b) {
    return a - b;
})
modelos.sort()
console.log(`Em Ordem de valor -> (${modelos}), (${anos})  Valor: (${valores})`)

