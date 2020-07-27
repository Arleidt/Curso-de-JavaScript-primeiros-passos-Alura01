console.log(`Trabalhando com condicionais`); //crase para interpolar variaveis caso quiser
const listaDestinos = new Array(
  `Salvador`,
  `Sao Paulo`,
  `Rio de Janeiro`
  );

  const idadeComprador = 17;
  const estaAcompanhada = false;
  const temPassagemComprada = true;
  console.log ("Destino possíveis: ");
  
  if (idadeComprador <=17 && estaAcompanhada == true)  {
    console.log("Comprador acompanhado");
    console.table(listaDestinos);
  }else if (idadeComprador >=18) {
    console.log(`Comprador maior de idade`);
    console.table(listaDestinos);      
  }else{
    console.log(`Comprador menor de idade`);
    listaDestinos.splice(1,1);
    console.table(listaDestinos);      
  };

console.log ("Embarque \n");
    if(idadeComprador >= 18 && temPassagemComprada){
        console.log("Boa Viagem");
    }else if (idadeComprador <=17){
        console.log("Você precisa de um acompanhante maior de idade para embarcar")
    }else{
      console.log("Precisa de passagem")
    };
  // | | ou  & e 