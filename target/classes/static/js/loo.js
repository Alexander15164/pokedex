document.getElementById("login").onsubmit = function(e){
	e.preventDefault();
	var usuario = document.getElementById("user").value;
	var pass = document.getElementById("pass").value;

	var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	
	    	 if(this.responseText== ""){
	    		 alert("Usuario no existe");
	    	 }else{
	    		 var login = JSON.parse(this.responseText);

	    		    if(login.id== 0){
	    		    	alert("Usuario o contraseña incorrecta");
	    		    }else{
	    		    	
	    		    	var date = new Date();
	    		         date.setTime(date.getTime() + (180 * 1000));
	    		         var expires = "; expires=" + date.toGMTString();
	    		         document.cookie = "usuario=" + [login.id, login.usuario] + expires;
	    		         alert("Bienvenido "+login.usuario);

	    	        location.href ="index.html";
	    		    }
	    		    }
	    	 }
	   
	  };
	  xhttp.open("POST", "/loginPost");
	  xhttp.setRequestHeader("Content-Type", "application/json");
	  xhttp.setRequestHeader("Accept", "application/json");
	  xhttp.send(JSON.stringify({"id": 0, "usuario": usuario, "pass": pass}));
	  	}
