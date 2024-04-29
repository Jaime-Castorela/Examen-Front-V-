package com.example.ExamenFront;

import jakarta.persistence.Entity;
import jakarta.persistence.*;

@Entity
@Table(name = "domicilios")
public class Domicilios  {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String Direccion;
	private String Ciudad;
	private String Codigo_Postal;
	private String Tipo_Residencia;
	


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDireccion() {
		return Direccion;
	}

	public void setDireeccion(String direeccion) {
		Direccion = direeccion;
	}

	public String getCiudad() {
		return Ciudad;
	}

	public void setCiudad(String ciudad) {
		Ciudad = ciudad;
	}

	public String getCodigo_Postal() {
		return Codigo_Postal;
	}

	public void setCodigo_Postal(String codigo_Postal) {
		Codigo_Postal = codigo_Postal;
	}

	public String getTipo_Residencia() {
		return Tipo_Residencia;
	}

	public void setTipo_Residencia(String tipo_Residencia) {
		Tipo_Residencia = tipo_Residencia;
	}

	public void setDireccion(String direccion) {
		Direccion = direccion;
	}

	
	

	
	
}
