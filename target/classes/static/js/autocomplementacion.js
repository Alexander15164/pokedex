var pokecomply = new Array();
window.onload = function() {
	window.setInterval(function(){
		if(document.cookie.length==0){


    		document.getElementById("navlogin").style.display="block";
	         document.getElementById("navreg").style.display="block";
	         document.getElementById("navfav").style.display="none";
	         document.getElementById("navusu").style.display="none";
   	}
   	else{

   		document.getElementById("navlogin").style.display="none";
	         document.getElementById("navreg").style.display="none";
	         document.getElementById("navfav").style.display="block";
	         document.getElementById("navusu").style.display="block";
	         var usuario = document.cookie.split(",")[1];
	     	usuario = usuario.split("usuario=")[0];
	     	document.getElementById("navfav").innerHTML="FAVORITOS DE  "+usuario;


   	}},100);

	
var estado=false;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        estado=true;
        document.getElementById("nombre").setAttribute("placeholder","Buscar por...");
		 document.getElementById("nombre").disabled=false;
		for(i=0 ; i<802 ; i++){
        	pokecomply[i] = String(myObj.results[i].name);
        }
        creadorDeListas();
        
    }

};

xmlhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/?limit=802" , true);
xmlhttp.send();

window.setTimeout(function(){
	if(estado==true){
		 
	}
	else{
		document.getElementById("nombre").setAttribute("placeholder","Error ,revisa tu conexion");
	}
},30000);
}
function creadorDeListas(){

for(i=0; i<802 ; i++){
  var node = document.createElement("OPTION");
  var textnode = document.createTextNode(pokecomply[i]);
  node.appendChild(textnode);
  document.getElementById("lista").appendChild(node);
}
}
function llamarPokemon(){
  document.getElementById("noResultado").style.display="none";

  var poke = document.getElementById("nombre").value;

if (poke=="") {
  document.getElementById("error").style.display="block";
  setTimeout(function(){
  document.getElementById("error").style.display="none";
},6500);

}
else {
  for(i=0; i<802 ; i++){
    if(pokecomply[i] == poke){
      document.getElementById("noResultado").style.display="none";
      document.getElementById("information").style.display="none";
      document.getElementById("evolucion").style.display="none";
      document.getElementById("pageST").style.display="none";
      document.getElementById("carga").style.display="block";
      document.getElementById("tipo2").style.display = "none";
       consumirpokemon((i+1));
       break;
    }
    else{
      document.getElementById("information").style.display="none";
      document.getElementById("evolucion").style.display="none";
      document.getElementById("pageST").style.display="none";

      document.getElementById("tipo2").style.display = "none";
      document.getElementById("noResultado").style.display="block";
    }
  }
  }
}
