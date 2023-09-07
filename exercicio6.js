a = 0
b = 100
while(a < 5){
    nro = parseInt(prompt("Entre com um numero"))
    if(b > nro){
        b = nro
    }
    a = a + 1
}
console.log ("menor", b)
console.log("Fim do programa")
