import { CommonModule} from '@angular/common';
import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { PAGES_ROUTES } from './pages.routes';
import { LayoutModule } from '../layout/layout.module';
import { PagesComponent } from './pages.component';
import { CreateformComponent } from './usuario/createform.component';
import { FormprofesionalComponent } from './profesional/formprofesional.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfesionalComponent } from './profesional/profesional.component';
//paginations
import {NgxPaginationModule} from 'ngx-pagination';
//Datepicker
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';


@NgModule({
    declarations: [
        DashboardComponent,
        UsuarioComponent,
        PagesComponent,
        CreateformComponent,
        ProfesionalComponent,
        FormprofesionalComponent
        
    ],
    imports: [
        PAGES_ROUTES,
        LayoutModule,
        CommonModule,
        FormsModule,
        NgxPaginationModule,
        BrowserAnimationsModule,
        MatDatepickerModule, 
        MatMomentDateModule,
        ReactiveFormsModule

    ],
    exports: [
        DashboardComponent,
        UsuarioComponent,
        PagesComponent,
        CreateformComponent,
        FormprofesionalComponent
        

    ]
})

export class PagesModule {}