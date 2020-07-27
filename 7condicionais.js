console.log(`Trabalhando com condicionais`); //crase para interpolar variaveis caso quiser
const listaDestinos = new Array(
  `Salvador`,
  `Sao Paulo`,
  `Rio de Janeiro`
  );

  const idadeComprador = 18;
  const estaAcompanhada = false;
  console.log ("Destino possíveis: ");
  console.log(listaDestinos); 
  
  if(idadeComprador <=17){
        console.log("Comprador menor de idade");
        listaDestinos.splice(1,1);//removendo item
  }else if(estaAcompanhada){
        console.log("Está Acompanhado");
        console.log(listaDestinos);
      }else{
        console.log(`Comprador maior de idade`);
        console.table(listaDestinos);
      };
        











/* console.log(`Trabalhando com condicionais`); //crase para interpolar variaveis caso quiser
const listaDestinos = new Array(
  `Salvador`,
  `Sao Paulo`,
  `Rio de Janeiro`
  );

  const idadeComprador = 18;
  const estaAcompanhada = false;
  console.log ("Destino possíveis: ");
  console.log(listaDestinos); 
  
  if(idadeComprador <=17){
        console.log("Comprador menor de idade");
        listaDestinos.splice(1,1);//removendo item
  }else{
       if(estaAcompanhada){
        console.log("Comprador maior de idade");
      }else{
        console.log("Comprador menor de idade");
        listaDestinos.splice(1,1);//removendo item

      }
  }
  console.log(listaDestinos); 
  console.table(listaDestinos); */

  // console.log(idadeComprador > 18);
  // console.log(idadeComprador < 18);
  // console.log(idadeComprador <= 18);
  // console.log(idadeComprador >= 18); 
  // console.log(idadeComprador == 18); 
  
  
