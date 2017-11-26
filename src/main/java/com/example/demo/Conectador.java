package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
//import org.hibernate.validator.internal.util.logging.Log_.logger;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
@Component
@Service
public class Conectador {
String url = "/home/katiro/pokedexdb2.db";
Connection connect;

public void  connect() {
	try {
	connect = DriverManager.getConnection("jdbc:sqlite:"+url);
	if(connect!=null) {
		System.out.println("Conectado");
	}
	} catch (SQLException e) {
		System.err.println("No se ha podido conectar \n"+e.getMessage());
	}
}
public void close() {
	try {
		connect.close();
	}catch (SQLException e) {
		Logger.getLogger(Conectador.class.getName()).log(Level.SEVERE, null, e);;
	}
}

public Usuario buscarUsuario(String usuario){
	Usuario user = null;
	try{
		PreparedStatement st = connect.prepareStatement("SELECT * FROM usuarios WHERE usuario=?");
		st.setString(1, usuario);
		ResultSet rs = st.executeQuery();
		while (rs.next()) {
			user = new Usuario(rs.getInt(1), rs.getString(2), rs.getString(3));
		}
	return user;
	}catch(SQLException ex){
		System.err.println(ex.getMessage());
		return null;
	}}
	

public Usuario guardarUsuario(String usuario, String pass) {
		Usuario user = new Usuario(0,"","");
		try {
			if(buscarUsuario(usuario)==null) {
			PreparedStatement st = connect.prepareStatement("insert into usuarios(usuario, pass) values (?,?)");
			st.setString(1, usuario);
			st.setString(2, pass);
			st.execute();
			user = buscarUsuario(usuario);
			}else {
				 user = new Usuario(0,"","");
			}
		} catch (SQLException ex) {
			System.err.println(ex.getMessage());
			 user = new Usuario(0,"","");
		}
		return user;
	}

public Usuario login(String usuario, String pass) {
	Usuario user = buscarUsuario(usuario);
	if(user != null) {
		if(user.getPass() == pass) {
			return user;
		}
	}
	return user;
}

public void favoritos(int id, int pokemon) {
	try {
	PreparedStatement st = connect.prepareStatement("insert into pokemon(id, id_pokemon) values (?,?)");
	st.setInt(1, id);
	st.setInt(2, pokemon);
	st.execute();
	}catch (SQLException e) {
		System.err.println(e.getMessage());
	}
}

public String buscarPokemon(Integer usuario){
	try{
		String pokemons = "";
		PreparedStatement st = connect.prepareStatement("SELECT * FROM pokemon WHERE id=?");
		st.setInt(1, usuario);
		ResultSet rs = st.executeQuery();
		while (rs.next()){
			pokemons += rs.getString(3)+",";
		}
		return pokemons;
	}catch(SQLException ex){
		System.err.println(ex.getMessage());
		return "";
	}
}

	}


