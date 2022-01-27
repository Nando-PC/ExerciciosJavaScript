// Verificar o tipo de combustível a ser escolhido pelo cliente
let alcohol = 0
let gasoline = 0 
let diesel = 0
let opcao = true
while (opcao){
    const code = parseInt(gets()); // Número inteiro de entrada
    switch (code){
        case 1:
            return alcohol++
            break;
        case 2:
            return gasoline++
            break;
        case 3:
            return diesel++
            break;
        case 4:
            opcao = false;
            break;
    }
}
console.log("MUITO OBRIGADO")
console.log("Álcool: ", alcohol);
console.log("Gasolina: ", gasoline);
console.log("Diesel: ", diesel);


