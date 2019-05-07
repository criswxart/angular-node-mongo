import { Injectable } from '@angular/core';
import { Profesional } from '../../models/profesional.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import Swal from 'sweetalert2';
import {map, catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class ProfesionalService {

  profesional:Profesional;
  token: string;

  constructor(
    public http: HttpClient, public router:Router
  ) { 
    this.cargarStorage();
  }

  estaLogueado(){
    return (this.token.length >5) ? true : false;
  }
  cargarStorage(){
    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
      this.profesional = JSON.parse(localStorage.getItem('profesional'));
    }else{
      this.token = '';
      this.profesional = null;

    }
  }
  guardarStorage(id: string, token: string, profesional: Profesional){

    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('profesional', JSON.stringify(profesional));
    this.profesional = profesional;
    this.token=token;

  }
  logout(){
    this.profesional = null;
    this.token = '';

    //localStorage.clear();
    //o
    localStorage.removeItem('token');
    localStorage.removeItem('profesional');
    this.router.navigate(['/login']);
  }
  login(profesional: Profesional){
    return this.http.post(URL_SERVICIOS+'/login', profesional).pipe(
      map((response: any) => {

        localStorage.setItem('id', response.id);
        localStorage.setItem('token', response.token);
        localStorage.setItem('profesional', JSON.stringify(profesional));
        
        return true;
      }
    ));

  }

 /*  crearProfesional(profesional: Profesional){

    const url = URL_SERVICIOS +'/trabajador';

    return this.http.post( url, profesional )
    .map( (resp: any) => {

    });


  } */
  crearProfesional(profesional: Profesional): Observable<Profesional>{
    return this.http.post<Profesional>(URL_SERVICIOS+'/trabajador', profesional).pipe(
      map((response: any) => 
        response.profesional as Profesional),
      catchError( e => {

        if (e.status==400){
          return throwError(e);
        }
        Swal.fire('Error al crear al profesional', e.error.mensaje, 'error');
        return throwError(e);
      })
    );

  }
  
}
