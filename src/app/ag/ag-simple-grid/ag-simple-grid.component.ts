import { StudentService } from '../../services/student.service';
import { GridOptions } from 'ag-grid/main';
import { Subscription } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import {
  HostListener, AfterViewInit, ChangeDetectorRef,
  Component, OnDestroy, OnInit
} from '@angular/core';
import * as fromRoot from '../../reducers';
import * as student from '../../actions/student';

@Component({
  selector: 'ag-simple-grid',
  templateUrl: 'ag-simple-grid.component.html',
  styleUrls: ['ag-simple-grid.component.scss']
})
export class AgSimpleGridComponent implements OnInit, OnDestroy, AfterViewInit {
  public gridOptions: GridOptions;
  public extraOptions: any;
  public studentTableData$: Observable<any[]>;
  public selectedStudent$: Observable<any>;
  private getStudentDataSub: Subscription;
  constructor(private store: Store<fromRoot.State>,
              private cdRef: ChangeDetectorRef,
              private studentService: StudentService) {
    this.gridOptions = {
      columnDefs: [
        { field: 'name', headerName: 'Name' },
        { field: 'account', headerName: 'Account' },
        { field: 'street', headerName: 'Street' },
        { field: 'city', headerName: 'City' },
        { field: 'state', headerName: 'State' },
        { field: 'email', headerName: 'Email' }
      ],
      enableRangeSelection: true,
      rowSelection: 'multiple',
      rowHeight: 22
    } as GridOptions;
    this.extraOptions = {
      width: '100%',
      height: '100%'
    };
    this.studentTableData$ = this.store.select(fromRoot.getStudents);
    this.selectedStudent$ = this.store.select(fromRoot.getSelectedStudent);
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

  // tslint:disable-next-line:member-access
  @HostListener('window:resize', ['$event'])
  public onResize(event: any) {
    setTimeout(() => {
      this.gridOptions.api.sizeColumnsToFit();
    }, 500);
  }
}
