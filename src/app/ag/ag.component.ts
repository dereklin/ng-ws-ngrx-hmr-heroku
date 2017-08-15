import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import * as fromRoot from '../reducers';
import * as student from '../actions/student';

const DIRECTIONS = ['row', 'row-reverse', 'column', 'column-reverse'];
@Component({
  selector: 'ag',
  templateUrl: 'ag.component.html',
  styleUrls: ['ag.component.scss']
})
export class AgComponent {
  constructor(private store: Store<fromRoot.State>) { }

  public selectRow() {
    const myIndex = Math.floor(Math.random() * 1000);
    this.store.dispatch(new student.SelectStudentAction(myIndex));
  }
}
