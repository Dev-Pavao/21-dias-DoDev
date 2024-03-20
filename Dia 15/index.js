let arrayA = [13,20,10,22,24,20,27,17,19,14]
let arrayB = [24,22,23,11,15,17,29,14,16,21]

function numeroComum(arrayUm,arrayDois){
    let arrayComum = []
    let contador = 0 
    for(let i = 0; i<length.arrayUm; i++){
        for(let j = 0; j<length.arrayDois; j++){
        
            if(arrayUm[i] == arrayDois[[j]]){
                arrayComum[contador] = arrayUm[i]
                contador++
                j = arrayDois.length
            }
        }
    }
    return arrayComum
}
console.log(numeroComum(arrayA,arrayB))