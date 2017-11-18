var pokemons
function consumirpokemon(pokemon) {
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        pokemons = JSON.parse(this.responseText);
        console.log(pokemons);
        var url = pokemons.species.url;
        consumidor2(url);
    }
};
xmlhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/"+pokemon+"/" , true);
xmlhttp.send();
}
function mostrarPokemon(){
document.getElementById("nombre").value = pokemons.species.name;

document.getElementById("habilidad").value = pokemons.abilities[0].ability.name;

var mov="";
document.getElementById("movimiento").value = "";
for(i=0 ; i<pokemons.moves.length ; i++){
  mov = mov + pokemons.moves[i].move.name+"\n";
}
document.getElementById("movimiento").value = mov;

document.getElementById("img").src = pokemons.sprites.front_default;
if(species.habitat != null && species.habitat != undefined){
document.getElementById("localizacion").value = species.habitat.name;
}else {
document.getElementById("localizacion").value = "Desconocido";
}



var tipos="";
for(i=0 ; i<pokemons.types.length ; i++){
  tipos= tipos +","+ pokemons.types[i].type.name;
}
document.getElementById("tipos").value = tipos;

document.getElementById("generacion").value = species.generation.name;
}
var species;
function consumidor2(url){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          species = JSON.parse(this.responseText);
          console.log(species);
var url = species.evolution_chain.url;
          consumidor3(url);
      }
  };
  xmlhttp.open("GET", url , true);
  xmlhttp.send();
}

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
