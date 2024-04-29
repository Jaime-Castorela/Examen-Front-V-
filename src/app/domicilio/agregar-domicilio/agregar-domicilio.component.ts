import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiciosGeneralesService } from 'src/app/Servicios/servicios-generales.service';
import { AddDomicilio } from 'src/app/modelos/AddDomicilio';

@Component({
  selector: 'app-agregar-domicilio',
  templateUrl: './agregar-domicilio.component.html',
  styleUrls: ['./agregar-domicilio.component.css']
})
export class AgregarDomicilioComponent implements OnInit {
  nuevoDomicilio: AddDomicilio = new AddDomicilio();
  constructor(private router: Router,private servicios: ServiciosGeneralesService) { }

  ngOnInit() {  
    
  }

  guardarDomicilio() {
    // Aquí puedes agregar la lógica para guardar el domicilio
    console.log('Domicilio guardado:', this.nuevoDomicilio);
    this.servicios.guardarDomicilio(this.nuevoDomicilio).subscribe(res=>{

    });
  }
       
    
  
}



