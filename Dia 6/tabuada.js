

let num1 = parseInt(prompt("Deseja a tabuada de qual número? "))

for(let tabuada = 0; tabuada <=10; tabuada++){
    let num2 = num1 + 1 
    let num3 = num2 + 1
    console.log(num1 + " X " + tabuada + "=" + num1 * tabuada, "| " + 
    num2 + " X " + tabuada + "=" + num2 * tabuada, "| " +
    num3 + " X " + tabuada + "=" + num3 * tabuada)
  }

