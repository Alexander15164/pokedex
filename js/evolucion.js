//para consumir las evoluciones
var evolucion;
function consumidor3(url){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          evolucion = JSON.parse(this.responseText);
          console.log(evolucion);
          mostrarPokemon();
      }
  };
  xmlhttp.open("GET", url , true);
  xmlhttp.send();
}
//consumir para crear las imagenes
var evolucion5;
function consumidor4(poke2){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          evolucion5 = JSON.parse(this.responseText);
          console.log(evolucion5);
          var node = document.createElement("IMG");
          node.setAttribute("id", poke2);
          node.setAttribute("src",evolucion5.sprites.front_default);
          document.getElementById("evolucion4").appendChild(node);
      }
  };
  xmlhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/"+poke2+"/" , true);
  xmlhttp.send();
}
