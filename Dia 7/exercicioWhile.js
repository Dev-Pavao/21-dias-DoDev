let mediaGeral = 0
let qtdHomens = 0
let qtdMulheresAcima7 = 0
let maiorNotaHomens = 0 
let contador = 1

while(contador <= 10){
 nota = Number(prompt("Digite a nota do " + contador + "aluno"))
 sexo = prompt("Digite seu sexo (M/F")
 
 if ( sexo == "M"){
    if (nota > maiorNotaHomens){
        maiorNotaHomens = nota
    }
    qtdHomens++
}

if (sexo == "F" && nota >= 7){
    qtdMulheresAcima7++

}
 mediaGeral += nota
 contador ++
}
mediaGeral = mediaGeral / 10

console.log("A média geral dos alunos foi: " + mediaGeral)
console.log("A quantidade de homens cadastradas foi " + qtdHomens)
console.log("A quantidade de mulheres com nota acima de 7 foi: " + qtdMulheresAcima7)
console.log("A maior nota entre os homens foi: " + maiorNotaHomens)
