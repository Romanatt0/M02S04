const dados = {
  nome: "João",
  idade: null,
  cidade: "São Paulo",
  email: undefined
};

// Remover propriedades com valor null ou undefined
for (let chave in dados) {
  if (dados[chave] == null) {
    delete dados[chave];
  }
}

console.log(dados);
