package com.example.ExamenFront;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Domicilios")
public class DomiciliosController {

	@Autowired
	private DomiciliosRepository domicilioRepository;

	@GetMapping("/ConsultaDomicilios")
	public List<Domicilios> jaimeMininio() {
		return domicilioRepository.findAll();
	}

	@PostMapping("/InsentarDomicilios")
	public Domicilios insertar(Domicilios datos) {
		Domicilios c = domicilioRepository.save(datos);
		System.out.println(c.getId());
		datos.setId(c.getId());
		return datos;
	}
	

	@PostMapping("/EliminarDomicilios/{id}")
	public void eliminarDatos(@PathVariable Long id) {
		System.out.println(id);
		domicilioRepository.deleteById(id);
	}
	
	 
	 @PutMapping("/actualizarDomicilios/{id}")
   public ResponseEntity<String> actualizarRegistro(@PathVariable Long id, @RequestBody Domicilios entidadActualizada) {
       Optional<Domicilios> entidadExistente = domicilioRepository.findById(id);
       if (entidadExistente.isPresent()) {
    	   Domicilios entidad = entidadExistente.get();
           entidad.setDireccion(entidadActualizada.getDireccion());
           entidad.setCiudad(entidadActualizada.getCiudad());
           entidad.setCodigo_Postal(entidadActualizada.getCodigo_Postal());
           entidad.setTipo_Residencia(entidadActualizada.getTipo_Residencia());
       
           domicilioRepository.save(entidad);
           return ResponseEntity.ok("Registro actualizado correctamente");
       } else {
           return ResponseEntity.notFound().build();
       }
   }

}
