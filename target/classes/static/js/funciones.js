var estado= false;

function Select_favorit(){
  if (estado==false) {
    if(document.cookie.length>0){
    	var imagen = document.getElementById('favor').alt;
    	console.log(imagen);
    	http://localhost:8080/img/pokebola.png
    	if(imagen=="Pokemon favorito"){
    		alert("El pokemon ya esta agregado a tus favoritos");	
    	} 
    	else{
    		var idpokemon = document.getElementById("identificador").textContent

   		 var xmlhttp = new XMLHttpRequest();
   		 xmlhttp.open("POST","/favoritosPost",true);
   		 var usuario = document.cookie.split(",")[0];
   			usuario = usuario.split("usuario=")[1];

       xmlhttp.send(usuario+","+idpokemon);
       document.getElementById("corazon").setAttribute("src", "img/favoritoMas.png");
       document.getElementById("favor").setAttribute("src", "img/pokebola.png");
       document.getElementById("favor").setAttribute("title", "Quitar de favoritos");
       document.getElementById("corazon").style.display="block";
//       idadar=document.getElementById('identificador').textContent;



       estado=true;
       setTimeout(function(){
       document.getElementById("corazon").style.display="none";
     },700);
       alert("Agregado a tus favoritos");
    	}
		
	}else{
		alert("No estas registrado. Inicia sesion para poder tener favoritos");
	}
  }
}


function cargarSiguiente(){

var ifg = document.getElementById("identificador").textContent;
ifg = parseInt(ifg);

consumirpokemon(ifg+1);
//document.getElementById("information").style.display="none";
//document.getElementById("evolucion").style.display="none";
//document.getElementById("carga").style.display="block";

}

function cargarAnterior(){

var ifg = document.getElementById("identificador").textContent;
ifg = parseInt(ifg);

consumirpokemon(ifg-1);
document.getElementById("information").style.display="none";
document.getElementById("evolucion").style.display="none";
document.getElementById("carga").style.display="block";

}

function concetrado(favori){
	if(favori.length==1){
		document.getElementById("cargarFavorito").innerHTML="No tienes pokemon's favoritos";
	}
	else{



// 141,373,465,767,567,3,56,45,329,1,45,67,87,89,34,85,78,9,56,12,66,7,4
for (var i = 0; i < favori.length-1; i++) {

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

    consumirpokemonfavorito(favori[i],i,favori);
}
}
	}
function llamarfavoritos(){

	    	window.setInterval(function(){
	    		if(document.cookie.length==0){

	    			location.href ="index.html";

	       	}
	       	else{

	       		var usuario = document.cookie.split(",")[1];
		     	usuario = usuario.split("usuario=")[0];
		     	document.getElementById("navfav").innerHTML="FAVORITOS DE  "+usuario;


	       	}},1000);



	var usuario = document.cookie.split(",")[0];
	usuario = usuario.split("usuario=")[1];

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        var pokemons = this.responseText.split(",");
	
	        concetrado(pokemons);

	    }
	};
	xmlhttp.open("GET", "/favoritos/"+usuario , true);
	xmlhttp.send();
	}
function cerrar(){
  document.getElementById("error").style.display="none";

}
