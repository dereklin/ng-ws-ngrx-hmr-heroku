import { FlexLayoutModule } from '@angular/flex-layout';
import { AgSimpleGridComponent } from './ag-simple-grid/ag-simple-grid.component';
import { AgGridTableModule } from '../ag-grid-table';
import { CommonModule } from '@angular/common';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { AgComponent } from './ag.component';

@NgModule({
    imports: [
      CommonModule,
      AgGridTableModule,
      FlexLayoutModule.forRoot()
    ],
    declarations: [
        AgComponent,
        AgSimpleGridComponent
    ],
    exports: [
        AgComponent,
    ]
})
export class AgModule {

}
