package com.example.demo;

import org.springframework.stereotype.Service;

@Service
public class Usuario {
	private int id;
	private String usuario;
	private String pass;
	
	public Usuario(int id, String usuario, String pass) {
		this.id= id ;
		this.usuario= usuario;
		this.pass= pass;
	}
	public Usuario(){};
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public void setPass(String pass) {
		this.pass = pass;
	}
	public String getPass() {
		return pass;
	}

}
