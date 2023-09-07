a = 0
b = -Infinity
while(a < 5){
    nro = parseInt(prompt("Ente com um numero"))
    if(b < nro){
        b = nro
    }
    a = a + 1
}
console.log ("maior", b)
console.log("Fim do programa")