var pokemons
var aEvoluciones = [];
var iContador = 0;
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
//mostrar los pokemon 
function mostrarPokemon(){
  document.getElementById("evolucion4").innerHTML = "";
  document.getElementById("evolucion1").innerHTML = "";
  document.getElementById("evolucion2").innerHTML = "";
  document.getElementById("evolucion3").innerHTML = "";
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
for(var i=0; i<species.flavor_text_entries.length ; i++){
  if(species.flavor_text_entries[i].language.name == "es"){
document.getElementById("descripcion").value = species.flavor_text_entries[i].flavor_text;
break;
  }
}

//evolucion 1
    document.getElementById("evolucion1").innerHTML = evolucion.chain.species.name;
    aEvoluciones[0] = evolucion.chain.species.url.slice(42, -1);
    consumidor4(aEvoluciones[iContador]);
    iContador = 1;
    console.log("urlEvolucion 1:  " + aEvoluciones[0]);


//evolucion 2
    if (evolucion.chain.evolves_to[0] != null && evolucion.chain.evolves_to[0] != undefined) {
        for (var i = 0; i < evolucion.chain.evolves_to.length; i++) {
            document.getElementById("evolucion2").innerHTML += evolucion.chain.evolves_to[i].species.name + "<br>";
            aEvoluciones[iContador] = evolucion.chain.evolves_to[i].species.url.slice(42, -1);
            console.log("urlEvolucion " + iContador + ":  " + aEvoluciones[iContador]);
            consumidor4(aEvoluciones[iContador]);
            iContador = iContador + 1;
        }

    } else {
        document.getElementById("evolucion2").innerHTML = "Desconocido";
    }

//evolucion 3
    if ((evolucion.chain.evolves_to[0] != null && evolucion.chain.evolves_to[0] != undefined) && (evolucion.chain.evolves_to[0].evolves_to[0] != null && evolucion.chain.evolves_to[0].evolves_to[0] != undefined)) {
        for (var i = 0; i < evolucion.chain.evolves_to.length; i++) {
            for (var j = 0; j < evolucion.chain.evolves_to[i].evolves_to.length; j++) {
                document.getElementById("evolucion3").innerHTML += evolucion.chain.evolves_to[i].evolves_to[j].species.name+ "<br>";
                aEvoluciones[iContador] = evolucion.chain.evolves_to[i].evolves_to[j].species.url.slice(42, -1);
                console.log("urlEvolucion " + iContador + ":  " + aEvoluciones[iContador]);
                consumidor4(aEvoluciones[iContador]);
                iContador = iContador + 1;
            }
        }
    } else {
        document.getElementById("evolucion3").innerHTML = "Desconocido";
    }

}
//llamar las especies
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
