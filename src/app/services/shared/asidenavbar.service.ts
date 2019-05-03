import { Injectable } from '@angular/core';

@Injectable()

export class AsidenavbarService {

  menu: any = [
    {
        titulo:'Perfil',
        icono: 'fa fa-users',
        url: '/usuarios'
        }
  ]
  constructor() { }
}
