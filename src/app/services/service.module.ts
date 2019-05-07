import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { 
  AsidenavbarService,
  UsuarioService,
  LayoutService,
  ProfesionalService,
  LoginGuardGuard
 } from './service.index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    AsidenavbarService,
    UsuarioService,
    LayoutService,
    ProfesionalService,
    LoginGuardGuard
  ]
})
export class ServiceModule { }
