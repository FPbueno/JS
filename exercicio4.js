a = parseInt(prompt("entre com o menor valor"))
b = parseInt(prompt("entre com o maior valor"))
if(a > b){
    c = b
    b = a
    a = c
}
soma = 0
while( a <= b){
    soma = soma + a
    a = a + 1
}
console.log("Somatório", soma)
console.log("fim do programa")
