var pokemons
var aEvoluciones = [];
var iContador = 0;
function consumirpokemonfavorito(pokemon,iddato) {
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        pokemons = JSON.parse(this.responseText);
        console.log(pokemons);
        var url = pokemons.species.url;
        mostrarfavorito(iddato)
    }
};
xmlhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/"+pokemon+"/" , true);
xmlhttp.send();
}
//mostrar los pokemon
function mostrarfavorito(iddato){

 document.getElementById("nombre"+iddato).innerHTML = "Nombre: "+pokemons.species.name;
 document.getElementById("perfil"+iddato).src = pokemons.sprites.front_default;
 console.log(iddato);
 console.log(favori.length-1);
 if (iddato==favori.length-1) {
   document.getElementById("cargarFavorito").style.display="none";
 document.getElementById("contenido").style.display="block";
 }


}
