import { Component, OnInit } from '@angular/core';
import { ProfesionalService } from '../../services/service.index';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: []
})
export class TopnavbarComponent implements OnInit {

  constructor(public _profesionalService: ProfesionalService) { }

  ngOnInit() {
  }

  salir(){
    this._profesionalService.logout();
  }
}
