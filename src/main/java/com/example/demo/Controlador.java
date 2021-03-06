package com.example.demo;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RestController
public class Controlador {

@Autowired
Conectador conexion;

@RequestMapping(value = "/registroPost", method = RequestMethod.POST, headers="Accept=application/json") 
public Usuario crearUsuario(@RequestBody Usuario usuario) {
	System.out.println("usuario: "+usuario.getUsuario());
	conexion.connect();
	Usuario user = conexion.guardarUsuario(usuario.getUsuario(), usuario.getPass());
	conexion.close();
	return user;
}

@RequestMapping(value = "/loginPost", method = RequestMethod.POST, headers="Accept=application/json")
public Usuario login(@RequestBody Usuario usuario) {
	conexion.connect();
	Usuario user = conexion.buscarUsuario(usuario.getUsuario());
	if(user != null) {
		if(!user.getPass().equals(usuario.getPass()) && !user.getUsuario().equals(usuario.getUsuario())) {
			user = new Usuario(0,"","");
		}
	}else {
		//user = new Usuario(0,"","");
	}
	conexion.close();
	return user;
}
@PostMapping("/favoritosPost")
public void favoritos(@RequestBody String info) {
	String id = info.split(",")[0];
	String pokemon = info.split(",")[1];
	conexion.connect();
	conexion.favoritos(Integer.parseInt(id),Integer.parseInt(pokemon));
	conexion.close();
	
}
@GetMapping("/favoritos/{id}")
public String favoritosByUsuario(@PathVariable int id) {
		conexion.connect();
		String resultado = conexion.buscarPokemon(id);
		conexion.close();
		return resultado;
	}



}
