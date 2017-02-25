import { StudentService } from '../../services/student.service';
import { GridOptions } from 'ag-grid/main';
import { Subscription } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import * as fromRoot from '../../reducers';
import * as student from '../../actions/student';

@Component({
  selector: 'ag-simple-grid',
  templateUrl: 'ag-simple-grid.component.html',
  styleUrls: ['ag-simple-grid.component.scss']
})
export class AgSimpleGridComponent implements OnInit, OnDestroy, AfterViewInit {
  public gridOptions: GridOptions;
  public studentTableData$: Observable<any[]>;
  private getStudentDataSub: Subscription;
  constructor(private store: Store<fromRoot.State>,
              private cdRef: ChangeDetectorRef,
              private studentService: StudentService) {
    this.gridOptions = <GridOptions> {
      columnDefs: [
        { field: 'name', headerName: 'Name' },
        { field: 'account', headerName: 'Account' },
        { field: 'street', headerName: 'Street' },
        { field: 'city', headerName: 'City' },
        { field: 'state', headerName: 'State' },
        { field: 'email', headerName: 'Email' }
      ],
      enableRangeSelection: true,
      rowSelection: 'multiple'
    };
    this.studentTableData$ = this.store.select(fromRoot.getStudents);
  }

  public ngOnInit() {
    this.getStudentDataSub = this.studentService.getStudents().subscribe((res) => {
      this.store.dispatch(new student.LoadStudentAction(res));
    });
  }

  public ngOnDestroy() {
    this.getStudentDataSub.unsubscribe();
    this.store.dispatch(new student.StopLoadingAction());
  }

  public ngAfterViewInit() {
    this.gridOptions.api.sizeColumnsToFit();
  }
}
