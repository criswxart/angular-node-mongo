import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { AsidenavbarComponent } from './asidenavbar/asidenavbar.component';
import { FooternavbarComponent } from './footernavbar/footernavbar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PAGES_ROUTES } from '../pages/pages.routes';

@NgModule({
  imports: [
    CommonModule,
    PAGES_ROUTES
  ],
  declarations: [
      TopnavbarComponent,
      AsidenavbarComponent,
      FooternavbarComponent,
      BreadcrumbsComponent
  ],
    exports: [
        TopnavbarComponent,
        AsidenavbarComponent,
        FooternavbarComponent,
        BreadcrumbsComponent
    ]
})
export class LayoutModule { }
