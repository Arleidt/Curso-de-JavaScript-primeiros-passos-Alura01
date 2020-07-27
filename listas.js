console.log(`Trabalhando com listas`); //crase para interpolar variaveis caso quiser
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

console.log ("Destino possíveis: ");
// console.log(salvador, saoPaulo, rioDeJaneiro);

const listaDestinos = new Array(
  `Salvador`,
  `Sao Paulo`,
  `Rio de Janeiro`
  );
  listaDestinos.push(`Curitiba`); // add dinamicamente la dentro na lista empurrar
  //
  console.log(listaDestinos); 
  
  listaDestinos.splice(3,1);// remove um item da lista, quarta posição e somente 1 elemento.
  console.log(listaDestinos); 
  console.log(listaDestinos[2]); //exibe posição 2
  console.log(listaDestinos[2],  listaDestinos[0]); //exibe posição 2