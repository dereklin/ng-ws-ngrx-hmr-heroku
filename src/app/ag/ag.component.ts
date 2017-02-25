import { Component } from '@angular/core';

const DIRECTIONS = ['row', 'row-reverse', 'column', 'column-reverse'];
@Component({
  selector: 'ag',
  templateUrl: 'ag.component.html',
  styleUrls: ['ag.component.scss']
})
export class AgComponent {
  public direction: string = 'row';

  public toggleDirection() {
    let next = (DIRECTIONS.indexOf(this.direction) + 1) % DIRECTIONS.length;
    this.direction = DIRECTIONS[next];
  }
}
