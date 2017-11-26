document.getElementById("registro").onsubmit = function(e){
	e.preventDefault();
	var usuario = document.getElementById("login").value;
	var pass = document.getElementById("pass").value;
	console.log(pass);
	var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    console.log(this.responseText);
	    var login = JSON.parse(this.responseText);
	    console.log(login);
	    if(login.id== 0){
	    	alert("ya esta creado");
	    }else{
	    	alert("Creado con exito");
	    }
	    }
	  };
	  xhttp.open("POST", "/registroPost");
	  xhttp.setRequestHeader("Content-Type", "application/json");
	  xhttp.setRequestHeader("Accept", "application/json");
	  xhttp.send(JSON.stringify({"id": 0, "usuario": usuario, "pass": pass}));
	  	}

 