const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

//complete o codigo com suas variaveis

const   = Number(lines.shift()); 
const   = Number(lines.shift());

let   = true;

Array.from({ length:  }).forEach((_, i) => {
  const   = Number(lines.shift());
  
  if ( >  ) {
    = false;
  }
});

console.log( ? "S" : "N");