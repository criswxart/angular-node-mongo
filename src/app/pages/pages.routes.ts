import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UsuarioComponent} from './usuario/usuario.component';
import { CreateformComponent } from './usuario/createform.component';
import { FormprofesionalComponent } from './profesional/formprofesional.component';
import { ProfesionalComponent } from './profesional/profesional.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'usuarios', component: UsuarioComponent},
      {path: 'usuarios/create', component: CreateformComponent},
      {path: 'usuarios/create/:id', component: CreateformComponent},
      {path: 'usuarios/page/:page', component: UsuarioComponent},
      {path: 'profesionales', component: ProfesionalComponent},
      {path: 'profesionales/create', component: FormprofesionalComponent},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  }
];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);