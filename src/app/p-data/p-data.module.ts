import { PrimengDataTableModule } from '../primeng-data-table';
import { PDataComponent } from './p-data.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataTableModule } from 'primeng/components/datatable/datatable';
// Angular Imports

// This Module's Components

@NgModule({
    imports: [
        CommonModule,
        PrimengDataTableModule,
        DataTableModule
    ],
    declarations: [
        PDataComponent,
    ],
    exports: [
        PDataComponent,
    ]
})
export class PDataModule {

}
