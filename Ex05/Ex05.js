
function filtrar(lista, propriedades, valores) {
  const resultado = lista.filter((item) => {
    return propriedades.every((prop, i) => item[prop] === valores[i]);
  });

  console.log(resultado);
  return resultado;
}


const pessoas = [
  { nome: "João", idade: 25, cidade: "SP" },
  { nome: "Maria", idade: 30, cidade: "RJ" },
  { nome: "Ana", idade: 25, cidade: "SP" },
  { nome: "Carlos", idade: 25, cidade: "MG" }
];


filtrar(pessoas, ["idade", "cidade"], [25, "SP"]);
