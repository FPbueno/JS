entrada = "" 
senha = "abc"
while (entrada != senha){
    entrada = prompt("entre com a senha")
    if (entrada != senha){
        console.log("senha incorreta, tente novamente")
    }
    else{
        console.log("acesso liberado!")
    }
}