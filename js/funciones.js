var estado= false;
var favori =[23,56,78,45,67,89,14,15,46,56,78,36,47,56];
function Select_favorit(){
  if (estado==false) {
    document.getElementById("corazon").setAttribute("src", "img/favoritoMas.png");
    document.getElementById("favor").setAttribute("src", "img/pokebola.png");
    document.getElementById("favor").setAttribute("title", "Quitar de favoritos");
    document.getElementById("corazon").style.display="block";
    idadar=document.getElementById('identificador').textContent;

        favori.push(idadar);
        console.log(favori);
    // favoridocument.getElementById('identificador').value;
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
document.getElementById("information").style.display="none";
document.getElementById("evolucion").style.display="none";
document.getElementById("carga").style.display="block";
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

console.log("entro");

// 141,373,465,767,567,3,56,45,329,1,45,67,87,89,34,85,78,9,56,12,66,7,4
for (var i = 0; i < favori.length; i++) {

  var div =document.createElement("div");
  var br =document.createElement("br");
  var img =document.createElement("img");
  var imgpoke= document.createElement("img");
  var p = document.createElement("p");
  var pname= document.createElement("p");
  var imgquitar= document.createElement("img");
  // var h2 =document.createElement("h2");

  div.setAttribute("class","favoritos");
  div.setAttribute("id","texto"+i);

  document.getElementById("contenido").appendChild(div);
  document.getElementById("texto"+i).appendChild(img);
  img.setAttribute("id","perfil"+i);
  img.setAttribute("class","perfiles");
    img.setAttribute("alt","Cargando datos...");

  document.getElementById("texto"+i).appendChild(imgpoke);
  imgpoke.setAttribute("id","pokebola"+i);
  imgpoke.setAttribute("src","img/pokebola.png" );
  imgpoke.setAttribute("alt","pokebola" );
  imgpoke.setAttribute("class","pokebola");

  document.getElementById("texto"+i).appendChild(p);
  p.setAttribute("class","idpoke");
  p.innerHTML=favori[i];

  document.getElementById("texto"+i).appendChild(pname);
  pname.setAttribute("id","nombre"+i);
  pname.setAttribute("class","nombrefavorito");

  document.getElementById("texto"+i).appendChild(imgquitar);
  imgquitar.setAttribute("id","quitar"+i);
  document.getElementById("contenido").appendChild(br);
    consumirpokemonfavorito(favori[i],i);
}



}
function cerrar(){
  document.getElementById("error").style.display="none";
  
}
