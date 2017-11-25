//para consumir las evoluciones
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
//consumir para crear las imagenes
var evolucion5;
function consumidor4(poke2,poke){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          evolucion5 = JSON.parse(this.responseText);
          console.log(evolucion5);
          //var node0 = document.createElement("DIV");
          var node = document.createElement("IMG");
          var node2 = document.createElement("P");
          var node3 =document.createElement("IMG");
          var textnode = document.createTextNode(evolucion5.name);
          console.log(textnode);
          node3.setAttribute("src","img/flecha.png");
          node2.appendChild(textnode);
          node.setAttribute("onclick", "consumirpokemon("+poke2+")");
          node.setAttribute("src",evolucion5.sprites.front_default);
          //node0.appendChild(node);
          //node0.appendChild(node2);
        if(poke==0){

          node.setAttribute("id","prinEVO");
          node.setAttribute("class", "evolucioness");
          document.getElementById("evolution1").appendChild(node);
          node2.setAttribute("id","priNOM")
          node2.setAttribute("class", "evolucionesNOM");
          document.getElementById("evolution1").appendChild(node2);

        }else if(poke==1){
          node3.setAttribute("id","next1");
          node3.setAttribute("class", "nexts");
          document.getElementById("evolution2").appendChild(node3);

          node.setAttribute("id","secEVO");
          node.setAttribute("class", "evolucioness");
          document.getElementById("evolution2").appendChild(node);

          node2.setAttribute("id","secNOM");
          node2.setAttribute("class", "evolucionesNOM");
          document.getElementById("evolution2").appendChild(node2);

        }else if (poke==2) {
          node3.setAttribute("id","next2");
          node3.setAttribute("class", "nexts");
          document.getElementById("evolution3").appendChild(node3);

          node.setAttribute("id","terEVO");
          node.setAttribute("class", "evolucioness");
          document.getElementById("evolution3").appendChild(node);

          node2.setAttribute("id","terNOM");
          node2.setAttribute("class", "evolucionesNOM");
          document.getElementById("evolution3").appendChild(node2);
        }

      }

  };
  xmlhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/"+poke2+"/" , true);
  xmlhttp.send();
  document.getElementById("carga").style.display="none";
  document.getElementById("evolucion").style.display="block";
  document.getElementById("information").style.display="block";


}
