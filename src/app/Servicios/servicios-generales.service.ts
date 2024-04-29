import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddCiudadano } from '../modelos/AddCiudadano';
import { UrlConstantes } from '../Constantes/UrlConstantes';
import { Observable } from 'rxjs';
import { AddDomicilio } from '../modelos/AddDomicilio';

@Injectable({
  providedIn: 'root'
})
export class ServiciosGeneralesService {
 
 
 

  constructor(public httpClient: HttpClient, ) { }

  consultarCiudadanos(): Observable<AddCiudadano[]> {
    return this.httpClient.get<AddCiudadano[]>(UrlConstantes.CONSULTAR_CIUDADANOS);
  }

  eliminarCiudadano(id: number): Observable<void> {
    return this.httpClient.post<void>(`${UrlConstantes.ELIMINAR_CIUDADANOS}/${id}`, {});
  }
  guardarCiudadano(datos: AddCiudadano){
    return this.httpClient.post<AddCiudadano>(UrlConstantes.GUARDAR_CIUDADANOS,datos)
  }

  guardarDomicilio(nuevoDomicilio: AddDomicilio) {
    return this.httpClient.post<void>(UrlConstantes.GUARDAR_DOMICILIO,nuevoDomicilio);
  }

  consultarDomicilios() {
    return this.httpClient.get<AddDomicilio[]>(UrlConstantes.CONSULTAR_DOMICILIO);
  }
  eliminarDomicilio(id: number): Observable<void> {
    return this.httpClient.post<void>(`${UrlConstantes.ELIMINAR_DOMICILIO}/${id}`, {});
  }
}