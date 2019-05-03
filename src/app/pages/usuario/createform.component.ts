import { Component, OnInit } from '@angular/core';
import { Usuario } from './Usuario';
import { UsuarioService } from '../../services/service.index';
import {Router, ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styles: []
})
export class CreateformComponent implements OnInit {
  
  private usuario:Usuario = new Usuario();
  private titulo:string = "Crear Cliente";
  private errores:string[];

  constructor(private usuarioService: UsuarioService, private router: Router,
    private activatedRoute: ActivatedRoute) { }
  
  //Inicalizar componente
  ngOnInit() {
    this.cargarUsuario();
  }

  createUsuario(): void {
    this.usuarioService.createUsuario(this.usuario)
      .subscribe(usuario => {
        this.router.navigate(['/usuarios'])
        Swal.fire({
         position: 'center',
         type: 'success',
         title: `Usuario ${usuario.nombre} creado con éxito!`,
         showConfirmButton: false,
         timer: 1500
        })
      },
      err => {
        this.errores = err.error.errors as string [];
        console.error('Código del error desde el backend: '+ err.status);
        console.error(err.error.errors);
      }
      );
      
  }

  cargarUsuario(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.usuarioService.viewUsuario(id).subscribe(
          (usuario) => this.usuario = usuario
        )
      }
    })
  }

  update():void{
    this.usuarioService.update(this.usuario).subscribe(
      usuario => {
        this.router.navigate(['/usuarios'])
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Cliente actualizado',
          text: `Usuario ${usuario.nombre} ha sido actualizado con éxito!`,
          showConfirmButton: false,
          timer: 1500
         })
      },
      err => {
        this.errores = err.error.errors as string [];
        console.error('Código del error desde el backend: '+ err.status);
        console.error(err.error.errors);
      }
    )
  }

 
}