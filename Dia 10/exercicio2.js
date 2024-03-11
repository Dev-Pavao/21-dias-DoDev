let array = []
for(let i= 0; i<5; i++){
    const num = parseInt(prompt(`Digite o ${i+1} número`))
   array [i] = num
}
console.log("Original: " + array)
console.log("Reverso: " + array.reverse())

