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
