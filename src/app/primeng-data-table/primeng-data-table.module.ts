import { BrowserModule } from '@angular/platform-browser';
import { DataTableModule } from 'primeng/components/datatable/datatable';
// Angular Imports
import { NgModule } from '@angular/core';

import { PrimengDataTableComponent } from './primeng-data-table.component';

@NgModule({
    imports: [
      DataTableModule,
      BrowserModule
    ],
    declarations: [
        PrimengDataTableComponent,
    ],
    exports: [
        PrimengDataTableComponent,
    ],
    providers: []
})
export class PrimengDataTableModule {

}
