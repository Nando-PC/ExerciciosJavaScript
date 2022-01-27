var num1 = 5
var num2 = -6
var num3 = 0
var num4 = -3
var num5 = 8
var numeros = Array(num1, num2, num3, num4, num5)
var negativos = numeros.filter((negative)=>negative<0)
var positivos = numeros.filter((positive)=>positive>0)
var pares = numeros.filter((par)=>par%2 === 0)
var impares = numeros.filter((impar)=>impar%2 !== 0)
console.log(pares.length + " valor(es) par(es)");
console.log(impares.length + " valor(es) ímpar(es)");
console.log(positivos.length + " valor(es) positivo(s)");
console.log(negativos.length + " valor(es) negativo(s)");
