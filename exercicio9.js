entrada = "" 
senha = "abc"
i = 0
while (entrada != senha && i < 3){
    entrada = prompt("entre com a senha")
    if (entrada != senha){
        console.log("senha incorreta, tente novamente")
    }
    else{
        console.log("acesso liberado!")
    }
    i = i+1
}
