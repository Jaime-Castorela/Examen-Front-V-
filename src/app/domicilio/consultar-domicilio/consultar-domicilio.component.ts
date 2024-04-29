import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosGeneralesService } from 'src/app/Servicios/servicios-generales.service';
import { AddDomicilio } from 'src/app/modelos/AddDomicilio';

@Component({
  selector: 'app-consultar-domicilio',
  templateUrl: './consultar-domicilio.component.html',
  styleUrls: ['./consultar-domicilio.component.css']
})
export class ConsultarDomicilioComponent implements OnInit {

  Domicilios: AddDomicilio[] = [];
  constructor(private router: Router,
    private servicios: ServiciosGeneralesService
    ) { }

  ngOnInit(): void {
    this.consultar();
  }
 

  consultar() {
    this.servicios.consultarDomicilios().subscribe(res =>{
     this.Domicilios = res;
     
    });
  }

  agregarCiudadno() {
    this.router.navigate(['Agregar-Domicilio']);
  }

  eliminarDomicilio(domicilio: AddDomicilio) {
    this.servicios.eliminarCiudadano(domicilio.id).subscribe(res=>{
    
    });
   }
 
   editarDomicilio(domicilio: AddDomicilio) {
     localStorage.setItem('DatosDomicilios', JSON.stringify(domicilio));
     this.router.navigate(['/Editar-Domicilio']);
   }
  regresar(){
    this.router.navigate(['home']);
  }
}