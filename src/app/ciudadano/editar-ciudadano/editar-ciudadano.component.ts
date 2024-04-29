import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddCiudadano } from 'src/app/modelos/AddCiudadano';

@Component({
  selector: 'app-editar-ciudadano',
  templateUrl: './editar-ciudadano.component.html',
  styleUrls: ['./editar-ciudadano.component.css']
})
export class EditarCiudadanoComponent implements OnInit {
  nuevoCiudadano: AddCiudadano = new AddCiudadano();
  formulario!: FormGroup;
  constructor(private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Define el formulario y sus controles con las validaciones necesarias
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      Domicilio: ['', Validators.required],
      telefono: ['', Validators.required]
    });
    const datosString = localStorage.getItem('DatosCiudadanos');
    if (datosString !== null) {
      this.nuevoCiudadano = JSON.parse(datosString);
      // this.formulario.setValue(this.nuevoCiudadano)
    } else {
      // Manejar el caso en el que los datos no estén presentes en localStorage
    }

  }

  // Método para obtener los controles del formulario
  get f() { return this.formulario.controls; }

  // Método para manejar el envío del formulario
  onSubmit() {
    // Detiene la ejecución si el formulario no es válido
    if (this.formulario.invalid) {
      return;
    }

    // Continúa con la lógica para enviar el formulario
    // Aquí puedes llamar a un servicio para guardar los datos, por ejemplo
    console.log(this.formulario.value);
  }

}
