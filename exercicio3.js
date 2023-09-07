a = parseInt(prompt("entre com o menor valor"))
b = parseInt(prompt("entre com o maior valor"))
if(a > b){
    c = b
    b = a
    a = c
}
while(a <= b){
    console.log(a)
    a = a + 1
}
console.log("fim do programa")