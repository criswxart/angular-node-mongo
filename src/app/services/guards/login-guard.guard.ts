import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ProfesionalService } from '../pages/profesional.service';

@Injectable()
export class LoginGuardGuard implements CanActivate {

  constructor(public _profesionalService: ProfesionalService,
              public router: Router){

  }
  canActivate(){

    if(this._profesionalService.estaLogueado()){
      console.log('PASO EL GUARD');

      return true;
    }else{
      console.log('Bloqueado por guard');
      this.router.navigate(['/login']);
      return false;
    }
    console.log(' Paso por el login Guard ');
    return true;
  } 
}
