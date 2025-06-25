const vendas = [
  { produto: "Notebook", valor: 2500 },
  { produto: "Monitor", valor: 1200 },
  { produto: "Teclado", valor: 250 }
];

let total = 0;


console.log("Hello Word");
vendas.forEach((item) => {
  console.log(`Produto vendido: ${item.produto}, Valor: R$ ${item.valor}`);
  total += item.valor;
});

console.log(`Total de vendas: R$ ${total}`);