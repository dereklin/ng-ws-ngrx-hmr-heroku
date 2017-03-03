import { LazyLoadEvent } from 'primeng/components/common/api';
import { StudentService } from '../services/student.service';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs/Rx';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import * as fromRoot from '../reducers';
import * as student from '../actions/student';

@Component({
    selector: 'p-data',
    templateUrl: 'p-data.component.html',
    styleUrls: ['p-data.component.scss']
})
export class PDataComponent implements OnInit, OnDestroy {
  public studentTableData$: Observable<any[]>;
  public studentTableCols: any[];
  public totalRecords: number = 0;
  public recordsPerPage: number = 500;
  public studentTableData: any[];
  private studentsSource: any[];
  private $getStudentData: Subscription;
  private $studentData: Subscription;
  constructor(private store: Store<fromRoot.State>,
              private cdRef: ChangeDetectorRef,
              private studentService: StudentService) {
    this.studentTableCols = [
        {field: 'name', headerName: 'Name'},
        {field: 'account', headerName: 'Account'},
        {field: 'street', headerName: 'Street'},
        {field: 'city', headerName: 'City'},
        {field: 'state', headerName: 'State'},
        {field: 'email', headerName: 'Email'}
    ];
    this.studentTableData$ = this.store.select(fromRoot.getStudents);
  }

  public ngOnInit() {
    this.$getStudentData = this.studentService.getStudents().subscribe((res) => {
      this.store.dispatch(new student.LoadStudentAction(res));
    });
    this.$studentData = this.studentTableData$.subscribe((students: any) => {
      this.studentsSource = students;
      this.totalRecords = this.studentsSource.length;
      this.studentTableData = this.studentsSource.slice(0, this.recordsPerPage);
    });
  }

  public loadStudentsLazy(event: LazyLoadEvent) {
        setTimeout(() => {
            if (this.studentsSource) {
                this.studentTableData =
                  this.studentsSource.slice(event.first, (event.first + event.rows));
            }
        }, 250);
    }

  public ngOnDestroy() {
    this.$getStudentData.unsubscribe();
    this.store.dispatch(new student.StopLoadingAction());
  }

}
