var estado= false;
function Select_favorit(){
  if (estado==false) {
    document.getElementById("corazon").setAttribute("src", "img/favoritoMas.png");
    document.getElementById("favor").setAttribute("src", "img/pokebola.png");
    document.getElementById("favor").setAttribute("title", "Quitar de favoritos");
    document.getElementById("corazon").style.display="block";
    estado=true;
    setTimeout(function(){
    document.getElementById("corazon").style.display="none";
  },700);

  }
  else {
    document.getElementById("favor").setAttribute("src", "img/poke.png");
    document.getElementById("corazon").setAttribute("src", "img/favoritoMenos.png");
    document.getElementById("favor").setAttribute("title", "Agregar a favoritos");
    document.getElementById("corazon").style.display="block";
    estado=false;
    setTimeout(function(){
    document.getElementById("corazon").style.display="none";
  },700);
  }
}


function cargarSiguiente(){
console.log("entro");
var ifg = document.getElementById("identificador").textContent;
ifg = parseInt(ifg);
console.log(ifg);
consumirpokemon(ifg+1);
console.log("lo paso");
}

function cargarAnterior(){
console.log("entro");
var ifg = document.getElementById("identificador").textContent;
ifg = parseInt(ifg);
console.log(ifg);
consumirpokemon(ifg-1);
document.getElementById("information").style.display="none";
document.getElementById("evolucion").style.display="none";
document.getElementById("carga").style.display="block";
console.log("lo paso");
}
function concetrado(){
var cantidad = 4;
console.log("entro");
for (var i = 0; i < cantidad; i++) {
  var div =document.createElement("div");
  var br =document.createElement("br");
  div.setAttribute("class","favoritos");
  div.setAttribute("id","texto"+i);
div.setAttribute("id","texto"+i);
  document.getElementById("contenido").appendChild(div);
  var h2 =document.createElement("h2");
  h2.innerHTML="Contenido del favorito";
  document.getElementById("texto"+i).appendChild(h2);
  document.getElementById("contenido").appendChild(br);
}
}
