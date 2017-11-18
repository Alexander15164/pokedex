var pokecomply = new Array();
window.onload = function() {
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        console.log(myObj);
        console.log(myObj.results[4].name);
        for(i=0 ; i<802 ; i++){
        	pokecomply[i] = String(myObj.results[i].name);
        }console.log(pokecomply);
        creadorDeListas();
    }
};
xmlhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/?limit=802" , true);
xmlhttp.send();
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
  var poke = document.getElementById("nombre").value;
  for(i=0; i<802 ; i++){
    if(pokecomply[i] == poke){
       consumirpokemon((i+1));
       break;
    }
  }
}
