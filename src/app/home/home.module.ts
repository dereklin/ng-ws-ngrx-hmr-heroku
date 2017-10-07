// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
    imports: [
      MatButtonModule
    ],
    declarations: [
        HomeComponent,
    ],
    exports: [
        HomeComponent,
    ]
})
export class HomeModule {

}
