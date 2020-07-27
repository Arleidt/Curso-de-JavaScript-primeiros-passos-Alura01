console.log(`\nTrabalhando com condicionais`); //crase para interpolar variaveis caso quiser
const listaDestinos = new Array(
  `Salvador`,
  `Sao Paulo`,
  `Rio de Janeiro`
  );

  const idadeComprador = 18;
  const estaAcompanhada = false;
  let temPassagemComprada = false;
  const destino = "Salvador";

  console.log ("\nDestino possíveis: ");
  console.table (listaDestinos);
  
  const podeComprar = idadeComprador <=17 && estaAcompanhada 
    == true;

    let contador = 0;
    let destinoExiste = false;
    while (contador < 3){
        if(listaDestinos[contador++] == destino){
            console.log(`Destino Existente ` + destino);
            destinoExiste = true;
            break;
        }else{
            destinoExiste = false;
            console.log("Destino não existe " + destino);
        }
    }; console.log("Destino existe " + destinoExiste);

    if(podeComprar && destinoExiste){
        console.log("Boa Viagem");
    }else{
      console.log("Desculpe tivemos um erro");
    }

    for (let cont = 0; cont < 3; cont++){
      if(listaDestinos[cont] == destino){
          console.log(`Destino Existente ` + destino);
          destinoExiste = true;
          break;
      }else{
          destinoExiste = false;
          console.log("Destino não existe " + destino);
      }
    };


console.log ("\nEmbarque \n");
    if(idadeComprador >= 18 && temPassagemComprada){
        console.log("Boa Viagem");
    }else if (idadeComprador <=17){
        console.log("Você precisa de um acompanhante maior de idade para embarcar")
    }else{
      console.log("Precisa de passagem")
    };
