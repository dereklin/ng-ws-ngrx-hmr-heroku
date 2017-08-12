import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { TechnologyCarouselModule } from '../technology-carousel';
import { HomeModule } from '../home/home.module';
import { NavigationModule } from '../navigation';
import { CoreComponent } from './core.component';
import { NotFoundPageComponent } from './not-found-page';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
// Angular Imports

// This Module's Components

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    NavigationModule,
    HomeModule,
    TechnologyCarouselModule,
    FlexLayoutModule.forRoot()
  ],
  declarations: [
    CoreComponent,
    NotFoundPageComponent
  ],
  exports: [
    CoreComponent,
    NotFoundPageComponent
  ]
})
export class CoreModule {

}
