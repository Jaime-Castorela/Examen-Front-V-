import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosGeneralesService } from 'src/app/Servicios/servicios-generales.service';
import { AddDomicilio } from 'src/app/modelos/AddDomicilio';

@Component({
  selector: 'app-editar-domicilio',
  templateUrl: './editar-domicilio.component.html',
  styleUrls: ['./editar-domicilio.component.css']
})
export class EditarDomicilioComponent implements OnInit {
  nuevoDomicilio: AddDomicilio = new AddDomicilio();
  constructor(private router: Router,private servicios: ServiciosGeneralesService) { }


  ngOnInit() {
    const datosString = localStorage.getItem('DatosDomicilios');
    if (datosString !== null) {
      this.nuevoDomicilio = JSON.parse(datosString);
      // this.formulario.setValue(this.nuevoCiudadano)
    } else {
      // Manejar el caso en el que los datos no estén presentes en localStorage
    }
  }


  guardarDomicilio() {
    // Aquí puedes agregar la lógica para guardar el domicilio
    console.log('Domicilio guardado:', this.nuevoDomicilio);
    this.servicios.guardarDomicilio(this.nuevoDomicilio).subscribe(res=>{

    });

}

}