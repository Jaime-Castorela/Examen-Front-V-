import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosGeneralesService } from 'src/app/Servicios/servicios-generales.service';
import { AddCiudadano } from 'src/app/modelos/AddCiudadano';

@Component({
  selector: 'app-consultar-ciudadano',
  templateUrl: './consultar-ciudadano.component.html',
  styleUrls: ['./consultar-ciudadano.component.css']
})
export class ConsultarCiudadanoComponent implements OnInit {
  closeResult = '';
  employeeList: AddCiudadano[] = [];
  constructor(private router: Router,private servicios: ServiciosGeneralesService
    ) { }

  ngOnInit() {
    this.consultar();
  }
  consultar() {
   this.servicios.consultarCiudadanos().subscribe(res =>{
    this.employeeList = res;
    
   });
  }

  agregarCiudadno() {
    this.router.navigate(['Agregar-Ciudadano']);
  }

  eliminarCiudaddno(ciudadano: AddCiudadano) {
   this.servicios.eliminarCiudadano(ciudadano.id).subscribe(res=>{
   
   });
  }

  editarCiudadano(ciudadano: AddCiudadano) {
    localStorage.setItem('DatosCiudadanos', JSON.stringify(ciudadano));
    this.router.navigate(['/Editar-Ciudadanos']);
  }
  regresar(){
    this.router.navigate(['home']);
  }
}