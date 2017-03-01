import { AfterViewInit, Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { GridOptions } from 'ag-grid/main';

@Component({
    selector: 'ag-grid-table',
    templateUrl: 'ag-grid-table.component.html',
    styleUrls: ['ag-grid-table.component.scss']
})
export class AgGridTableComponent implements OnChanges, AfterViewInit {
  @Input() public gridOptions: GridOptions;
  @Input() public extraOptions: any;
  @Input() public rowData: any[];
  @Input() public selectedRow: any;

  public ngAfterViewInit() {
    setTimeout(() => {
      this.gridOptions.api.sizeColumnsToFit();
    }, 0);
  }

  public ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if (this.selectedRow && this.selectedRow.name) {
      this.gridOptions.api.deselectAll();
      this.gridOptions.api.forEachNode((node) => {
        if (node.data.name === this.selectedRow.name) {
          node.setSelected(true);
          this.gridOptions.api.ensureIndexVisible(node.rowIndex);
        }
      });
    }
  }
}
