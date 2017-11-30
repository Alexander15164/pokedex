var pokemons
var aEvoluciones = [];
var iContador = 0;
var bestado=false;
function consumirpokemonfavorito(pokemon,iddato,favori) {
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        pokemons = JSON.parse(this.responseText);
        bestado=true;
        var url = pokemons.species.url;
        mostrarfavorito(iddato,favori)
    }
};

xmlhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/"+pokemon+"/" , true);
xmlhttp.send();

window.setTimeout(function(){
	if(bestado==true){

	}
	else{
		document.getElementById("cargarFavorito").style.display="none";
		document.getElementById("Conexion").style.display="block";
	}
},30000);
}
//mostrar los pokemon
function mostrarfavorito(iddato,favori){


 document.getElementById("nombre"+iddato).innerHTML = "Nombre: "+pokemons.species.name;
 document.getElementById("perfil"+iddato).src = pokemons.sprites.front_default;

 if (iddato==favori.length-2) {
   document.getElementById("cargarFavorito").style.display="none";
 document.getElementById("contenido").style.display="block";
 }

	}
