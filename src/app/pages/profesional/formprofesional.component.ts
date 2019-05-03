import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfesionalService } from '../../services/service.index';
import { Profesional } from 'src/app/models/profesional.model';

@Component({
  selector: 'app-formprofesional',
  templateUrl: './formprofesional.component.html',
  styles: []
})
export class FormprofesionalComponent implements OnInit {
  
  forma: FormGroup;

  constructor(
    public _profesionalService: ProfesionalService
  ) { }
  
  passwordMatchValidator(campo1:string, campo2:string) {
    return (group: FormGroup)=>{
      
      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;

      if(pass1 == pass2){
        return null;
      }
      return{

        passwordMatchValidator:true
      };
     ;
    }
 }
  //Inicalizar componente
  ngOnInit() {
    this.forma = new FormGroup({
      nombre: new FormControl( null, Validators.required),
      apellidos: new FormControl(null, Validators.required),
      especialidad: new FormControl(null, Validators.required),
      telefono: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null,Validators.required),

    },{ validators: this.passwordMatchValidator('password', 'password2') });
  }

  registrarProfesional(){

    if(this.forma.invalid){
      return;
    } 

    let profesional = new Profesional(
      this.forma.value.nombre,
      this.forma.value.apellidos,
      this.forma.value.especialidad,
      this.forma.value.telefono,
      this.forma.value.correo,
      this.forma.value.password,
      this.forma.value.password2
    );
    this._profesionalService.crearProfesional( profesional )
      .subscribe( resp => {
        console.log(resp);
      })

    console.log('Forma valida', this.forma.valid );
    console.log(this.forma.value);
  }
 
}