import { appRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { AgregarCiudadanoComponent } from './ciudadano/agregar-ciudadano/agregar-ciudadano.component';
import { ConsultarCiudadanoComponent } from './ciudadano/consultar-ciudadano/consultar-ciudadano.component';
import { EditarCiudadanoComponent } from './ciudadano/editar-ciudadano/editar-ciudadano.component';
import { ConsultarDomicilioComponent } from './domicilio/consultar-domicilio/consultar-domicilio.component';
import { AgregarDomicilioComponent } from './domicilio/agregar-domicilio/agregar-domicilio.component';
import { EditarDomicilioComponent } from './domicilio/editar-domicilio/editar-domicilio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiciosGeneralesService } from './Servicios/servicios-generales.service';
import { HttpClientModule } from '@angular/common/http'; // Asegúrate de importar HttpClientModule










@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AgregarCiudadanoComponent,
    ConsultarCiudadanoComponent,
    EditarCiudadanoComponent,
    ConsultarDomicilioComponent,
    AgregarDomicilioComponent,
    EditarDomicilioComponent,
    
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    // MatButtonModule,
    // FlexLayoutModule,
    RouterModule.forRoot(appRoutes,{ useHash: true }) 
  ],
  providers: [
    ServiciosGeneralesService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
