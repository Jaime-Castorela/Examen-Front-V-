import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgregarCiudadanoComponent } from './ciudadano/agregar-ciudadano/agregar-ciudadano.component';
import { ConsultarCiudadanoComponent } from './ciudadano/consultar-ciudadano/consultar-ciudadano.component';
import { EditarCiudadanoComponent } from './ciudadano/editar-ciudadano/editar-ciudadano.component';
import { ConsultarDomicilioComponent } from './domicilio/consultar-domicilio/consultar-domicilio.component';
import { AgregarDomicilioComponent } from './domicilio/agregar-domicilio/agregar-domicilio.component';
import { EditarDomicilioComponent } from './domicilio/editar-domicilio/editar-domicilio.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'Ciudadanos', component: ConsultarCiudadanoComponent },
  {path: 'Agregar-Ciudadano', component: AgregarCiudadanoComponent},
  {path: 'Editar-Ciudadanos', component: EditarCiudadanoComponent},
  { path: 'Domicilio', component: ConsultarDomicilioComponent },
  {path: 'Agregar-Domicilio', component: AgregarDomicilioComponent},
  {path: 'Editar-Domicilio', component: EditarDomicilioComponent}
];
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

