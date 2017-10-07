import { Observable } from 'rxjs/Rx';
import { LoggerService } from '../services/logger.service';
import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { normalSubject, replaySubject } from '../utils/subject-util';
@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent {
  public title: string = 'My Angular';

  constructor(private loggerService: LoggerService) {
    this.loggerService.log('i am testing');
    // const interval$ = Observable.interval(1000).take(7);
    // const subject = new Subject();
    // subject.map((value) => `Observer one ${value}`).subscribe((value) => {
    //   console.log(value);
    // });
    // // interval$.subscribe(subject);

    // setTimeout(() => {
    //   subject.map((value) => `Observer two ${value}`).subscribe((value) => {
    //     console.log(value);
    //   });
    // }, 2000);
    replaySubject();
  }
}
