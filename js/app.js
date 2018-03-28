var scores = {}; // para llevar el registro de los jugadores y sus puntos
console.log(scores);
//
function createPlayer(object, name){//aqui creo la llave(name) dentro del objeto que luego decidire cual, en este caso scores)
    object[name.toLowerCase()] = 0;
    console.log(object);
  }//function createPlayer


function addPoints(name,points){//aqui estoy ligando los puntos
    scores[name.toLowerCase()] += points;
    console.log(scores);
}//function addPoints

function printAllPoints(){
  var arrayPlayers = Object.keys(scores);
  var resultados = "";
  for (var k = 0; k < arrayPlayers.length; k++){
    if(k == arrayPlayers.length -1){//se verifica que estamos en el ultimo index
      resultados += arrayPlayers[k] +': ' scores[arrayPlayers[k]] + ".";
    }else {//si no estamos en el ultimo index se deja la coma
      resultados += arrayPlayers[k] +': ' scores[arrayPlayers[k]] + ",";
    }
  }

  return resultados;
  console.log(printAllPoints());

}//function printAllPoints

createPlayer(scores,"name");
addPoints ("Ana",20);
addPoints("ana",40);
