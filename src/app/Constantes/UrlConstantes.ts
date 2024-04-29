import { environment } from 'src/environments/environment';
export const UrlConstantes = {

    CONSULTAR_CIUDADANOS: environment.apiUrl + '/Ciudadanos/Consulta',
    GUARDAR_CIUDADANOS: environment.apiUrl + '/Ciudadanos/Insentar',
    ELIMINAR_CIUDADANOS: environment.apiUrl + '/Ciudadanos/Eliminar',

    CONSULTAR_DOMICILIO: environment.apiUrl + '/Domicilios/ConsultaDomicilios',
    GUARDAR_DOMICILIO: environment.apiUrl + '/Domicilios/InsentarDomicilios',
    ELIMINAR_DOMICILIO: environment.apiUrl + '/Domicilios/EliminarDomicilio',
}