import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

export function normalSubject() {
  const interval$ = Observable.interval(1000).take(7);
  const subject = new Subject();
  subject.map((value) => `Observer one ${value}`).subscribe((value) => {
    console.log(value);
  });
  // interval$.subscribe(subject);
  subject.next('test');

  setTimeout(() => {
    subject.map((value) => `Observer two ${value}`).subscribe((value) => {
      console.log(value);
    });
  }, 2000);

}

export function replaySubject() {
  const subject = new ReplaySubject(3);

  subject.next('one');
  subject.next('two');
  subject.next('three');
  subject.next('four');

  setTimeout(() => {
    subject.map((value) => `Latest Observer ${value}`).subscribe((value) => {
      console.log(value);
    });
    subject.next('five');
  }, 2000);

}
