import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AddCiudadano} from '../../modelos/AddCiudadano';

@Component({
  selector: 'app-agregar-ciudadano',
  templateUrl: './agregar-ciudadano.component.html',
  styleUrls: ['./agregar-ciudadano.component.css']
})
export class AgregarCiudadanoComponent implements OnInit {

  nuevoCiudadano: AddCiudadano = new AddCiudadano();
  formulario!: FormGroup;

  @ViewChild("employeeForm")
  employeeForm!: NgForm;
  isSubmitted: boolean = false;
  constructor(private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Define el formulario y sus controles con las validaciones necesarias
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required]
    });
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




