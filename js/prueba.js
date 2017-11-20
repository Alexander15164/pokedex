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
  //document.getElementById("evolucion4").innerHTML = "";
  //document.getElementById("evolucion1").innerHTML = "";
  //document.getElementById("evolucion2").innerHTML = "";
  //document.getElementById("evolucion3").innerHTML = "";
document.getElementById("identificador").innerHTML = pokemons.id;
if (pokemons.id=="802") {
  document.getElementById("siguiente").style.display="none";
}
else {
  document.getElementById("siguiente").style.display="block";}

if (pokemons.id=="1") {
    document.getElementById("anterior").style.display="none";}
  else {
    document.getElementById("anterior").style.display="block";}
document.getElementById("nombre2").innerHTML = "Nombre: "+pokemons.species.name;
document.getElementById("imagenpoke").setAttribute("title", ""+pokemons.species.name+"");
var peso = pokemons.weight;
peso = (peso/10);
document.getElementById("load").innerHTML = "Peso: "+peso+" kg";
var altura = pokemons.height;
altura = (altura/10);
document.getElementById("altitude").innerHTML = "Altura: "+altura+" m";

document.getElementById("capacitys").value = pokemons.abilities[0].ability.name;

var mov="";
document.getElementById("powers").value = "";
for(i=0 ; i<pokemons.moves.length ; i++){
  mov = mov + pokemons.moves[i].move.name+"\n";
}
document.getElementById("powers").value = mov;

document.getElementById("imagenpoke").src = pokemons.sprites.front_default;
if(species.habitat != null && species.habitat != undefined){
document.getElementById("location").innerHTML ="Ubicacion: " + species.habitat.name;
}else {
document.getElementById("location").innerHTML = "Ubicacion: Desconocido";
}
document.getElementById("type1").innerHTML = "";
document.getElementById("type2").innerHTML = "";
for(i=0 ; i<pokemons.types.length ; i++){
  if (i == 1) {
    document.getElementById("tipo2").style.display = "block";
    document.getElementById("type2").innerHTML = pokemons.types[i].type.name;
}else {
    document.getElementById("type1").innerHTML = pokemons.types[i].type.name;
  }
}
//document.getElementById("tipos").value = tipos;

document.getElementById("generacion2").innerHTML = "Generacion: "+species.generation.name;
for(var i=0; i<species.flavor_text_entries.length ; i++){
  if(species.flavor_text_entries[i].language.name == "es"){
document.getElementById("description").value = species.flavor_text_entries[i].flavor_text;
break;
  }
}
var poke=0;
//evolucion 1
    //document.getElementById("evolucion1").innerHTML = evolucion.chain.species.name;
    aEvoluciones[0] = evolucion.chain.species.url.slice(42, -1);
    consumidor4(aEvoluciones[iContador],poke);
    iContador = 1;
    console.log("urlEvolucion 1:  " + aEvoluciones[0]);


//evolucion 2
    if (evolucion.chain.evolves_to[0] != null && evolucion.chain.evolves_to[0] != undefined) {
        for (var i = 0; i < evolucion.chain.evolves_to.length; i++) {
          //  document.getElementById("evolucion2").innerHTML += evolucion.chain.evolves_to[i].species.name + "<br>";
            aEvoluciones[iContador] = evolucion.chain.evolves_to[i].species.url.slice(42, -1);
            console.log("urlEvolucion " + iContador + ":  " + aEvoluciones[iContador]);
            poke=1;
            consumidor4(aEvoluciones[iContador],poke);
            iContador = iContador + 1;
        }

    }

//evolucion 3
    if ((evolucion.chain.evolves_to[0] != null && evolucion.chain.evolves_to[0] != undefined) && (evolucion.chain.evolves_to[0].evolves_to[0] != null && evolucion.chain.evolves_to[0].evolves_to[0] != undefined)) {
       for (var i = 0; i < evolucion.chain.evolves_to.length; i++) {
            for (var j = 0; j < evolucion.chain.evolves_to[i].evolves_to.length; j++) {
                aEvoluciones[iContador] = evolucion.chain.evolves_to[i].evolves_to[j].species.url.slice(42, -1);
               console.log("urlEvolucion " + iContador + ":  " + aEvoluciones[iContador]);
               poke=2
                consumidor4(aEvoluciones[iContador],poke);
                iContador = iContador + 1;
            }
        }
    }
      document.getElementById("carga").style.display="none";
      document.getElementById("information").style.display="block";
      document.getElementById("evolucion").style.display="block";

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
