import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProfesionalService } from 'src/app/services/service.index';
import { Profesional } from 'src/app/models/profesional.model';
declare var $;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {

  constructor(
      private router: Router,
      private _profesionalService: ProfesionalService
  ) { }

  ngOnInit() {
    document.body.className = 'hold-transition login-page';
      $(() => {
          $('input').iCheck({
              checkboxClass: 'icheckbox_square-blue',
              radioClass: 'iradio_square-blue',
              increaseArea: '20%' /* optional */
          });
      });
  }

  ingresar(forma:NgForm){

    if ( forma.invalid){
      return;
    }
    let profesional = new Profesional(
      null,
      null,
      null,
      null,
      forma.value.email,
      forma.value.password
    )

    this._profesionalService.login(profesional)
      .subscribe(correcto => this.router.navigate(['/dashboard'])
      );
  }

}