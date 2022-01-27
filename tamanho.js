validaCep = (string) => {
    cep = string.length;
    if(cep != 8){
        console.log("Valor inválido");        
    }
    console.log(cep)
}

validaCep("08000090")

let cep = "08000090"
console.log(cep.length);
if(cep.length == 8){
    console.log("Valor Correto")
}else{
    console.log("Valor inválido")
}


