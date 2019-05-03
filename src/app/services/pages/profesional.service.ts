import { Injectable } from '@angular/core';
import { Profesional } from '../../models/profesional.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalService {

  constructor(
    public http: HttpClient
  ) { }

  crearProfesional(profesional: Profesional){

    let url = URL_SERVICIOS + '/trabajador';

    return this.http.post(url, profesional);

  }
}
