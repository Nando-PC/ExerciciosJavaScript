/*const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const filter1 = lines.shift();
const filter2 = lines.shift();
const filter3 = lines.shift();
//complete a solução de acordo com suas variáveis*/

filter1 = gets();

if (filter1 === "vertebrado  ") {
  if (filter2 === "mamifero  ") {
    if (filter3 === "onivoro  ") {
      console.log(" homem     ");
    } else {
      console.log(" vaca");
    }
  } else {
    if (filter3 === " onivoro ") {
      console.log(" pomba  ");
    } else {
      console.log(" aguia ");
    }
  }
} else {
  if (filter2 === "inseto    ") {
    if (filter3 === "hematofago") {
      console.log("pulga  ");
    } else {
      console.log("lagarta");
    }
  } else {
    if (filter3 === "hematofago") {
      console.log("sanguessuga     ");
    } else {
      console.log("minhoca   ");
    }
  }
}