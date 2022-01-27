let totalItems = parseInt(gets());
let items = Array(totalItems);


for (let i = 0; i < totalItems; i++) {
  item = parseInt(gets());
  if (item>=0) {
    items[i] = item;
    i++;
  }
}

pares = items.filter(valor => valor%2 == 0);
impares  = items.filter(valor => valor%2 != 0);

pares.sort((a,b) => a-b);
impares.sort((a,b) => b-a);

pares.forEach(n => console.log(n));
impares.forEach(n => console.log(n));
