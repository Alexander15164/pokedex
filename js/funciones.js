var estado= false;
function Select_favorit(){
  if (estado==false) {
    console.log("cargoif");
    document.getElementById("corazon").setAttribute("src", "img/favoritoMas.png");
    document.getElementById("favor").setAttribute("src", "img/pokebola.png");
    console.log("cargo");
    document.getElementById("corazon").style.display="block";
    console.log("cambio block");
    estado=true;

  }
  else {
    document.getElementById("favor").setAttribute("src", "img/poke.png");
    document.getElementById("corazon").setAttribute("src", "img/favoritoMenos.png");
    estado=false;
  }
}
