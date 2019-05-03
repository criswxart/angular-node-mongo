import { Component, OnInit } from '@angular/core';
import {Usuario} from './Usuario';
import {UsuarioService} from '../../services/service.index';
import Swal from 'sweetalert2';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[];
  paginador: any;


  constructor(private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let page: number = +params.get('page');

      if (!page) {
        page = 0;
      }

      this.usuarioService.getUsuarios(page)
        .pipe(
          tap(response => {
            console.log('UsuarioComponent: tap 3');
            (response.content as Usuario[]).forEach(usuario => console.log(usuario.nombre));
          })
        ).subscribe(response => {
          this.usuarios = response.content as Usuario[];
       });
    });
  }

  delete(usuario: Usuario): void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Estás seguro?',
      text: `¿Seguro que desea eliminar al usuario ${usuario.nombre} ${usuario.apellidos}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.usuarioService.delete(usuario.id).subscribe(
          response => {
            //metodo filter() permite filtrar solo los elementos que deseamos y devolvernos en un nuevo arrary
            this.usuarios = this.usuarios.filter(user => user != usuario)
            swalWithBootstrapButtons.fire(
              'Usuario eliminado!',
              `Usuario ${usuario.nombre} eliminado con éxito.`,
              'success'
            )

          }
        )
      
      }
    })
  }
}
