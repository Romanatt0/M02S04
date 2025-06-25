const contador  = {

valor:  0,

incrementar(){

  this.valor += 1;
},

decrementar(){

  this.valor -= 1;
},

mostrarValor(){

  console.log(this.valor);
}
}

contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.decrementar();
contador.mostrarValor();