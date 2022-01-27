// Este desafio DIO verifica o estágio da lua = Em duas noites anteriores verifica a luminosidade
// 0 a 2 - nova, 3 a 96 - crescente, 96 a 3 - minguante e 97 a 100 cheia

let noite1 = 94;
let noite2 = 90;

if (noite1 >= 0 && noite2 <=2){
    console.log('lua nova')
}
else if(noite1 > 3 && noite2 < noite1 && noite1 < 97){
    console.log('lua minguante')
}
else if(noite1 > 3 && noite2 > noite1 && noite2 < 97) {
    console.log('lua crescente')
}
else {
    console.log('lua cheia')
}
