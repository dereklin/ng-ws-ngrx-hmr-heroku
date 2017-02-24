import { BrowserModule } from '@angular/platform-browser';
import { OwlCarouselModule } from '../owl-carousel';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { TechnologyCarouselComponent } from './technology-carousel.component';

@NgModule({
    imports: [
        BrowserModule,
        OwlCarouselModule
    ],
    declarations: [
        TechnologyCarouselComponent,
    ],
    exports: [
        TechnologyCarouselComponent,
    ]
})
export class TechnologyCarouselModule {

}
