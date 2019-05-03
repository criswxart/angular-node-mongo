import { Component, OnInit } from '@angular/core';
import { AsidenavbarService } from '../../services/service.index';

@Component({
  selector: 'app-asidenavbar',
  templateUrl: './asidenavbar.component.html',
  styleUrls: []
})
export class AsidenavbarComponent implements OnInit {

  constructor(public asidenavbar: AsidenavbarService) { }

  ngOnInit() {
  }

}
