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
@RequestMapping("/Ciudadanos")
public class CiudadanoController {

	@Autowired
	private CiudadanoRepository ciudadanoRepository;

	@GetMapping("/Consulta")
	public List<Ciudadano> jaimeMininio() {
		return ciudadanoRepository.findAll();
	}

	@PostMapping("/Insentar")
	public Ciudadano insertar(Ciudadano datos) {
		Ciudadano c = ciudadanoRepository.save(datos);
		System.out.println(c.getId());
		datos.setId(c.getId());
		return datos;
	}
	

	@PostMapping("/Eliminar/{id}")
	public void eliminarDatos(@PathVariable Long id) {
		System.out.println(id);
		ciudadanoRepository.deleteById(id);
	}
	
//	@PostMapping("/Actualizar/{id}")
//	public Ciudadano actualizar(@PathVariable Long id, @RequestBody Ciudadano entidadActualizada) {
//		 Optional<Ciudadano> entidadExistente = ciudadanoRepository.findById(entidadActualizada.getId());
//		 Ciudadano entidad = new Ciudadano();
//		 if (entidadExistente.isPresent()) {
//			 entidad = entidadExistente.get();
//       entidad.setNombre(entidadActualizada.getNombre());
//       entidad.setNota(entidadActualizada.getNota());
//       ciudadanoRepository.save(entidad); 
//		 }
//		 return entidad;
//		
//	}
	 
	 @PutMapping("/actualizar/{id}")
   public ResponseEntity<String> actualizarRegistro(@PathVariable Long id, @RequestBody Ciudadano entidadActualizada) {
       Optional<Ciudadano> entidadExistente = ciudadanoRepository.findById(id);
       if (entidadExistente.isPresent()) {
      	 Ciudadano entidad = entidadExistente.get();
           entidad.setNombre(entidadActualizada.getNombre());
           entidad.setApellido(entidadActualizada.getApellido());
           entidad.setCorreo(entidadActualizada.getCorreo());
           entidad.setDomicilio(entidadActualizada.getDomicilio());
           entidad.setTelefono(entidadActualizada.getTelefono());
           ciudadanoRepository.save(entidad);
           return ResponseEntity.ok("Registro actualizado correctamente");
       } else {
           return ResponseEntity.notFound().build();
       }
   }

}
