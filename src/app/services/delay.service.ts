import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

@Injectable()
export class DelayService implements Resolve<any> {

  public resolve(route: ActivatedRouteSnapshot) {
    return Observable.create((observer) => {
      observer.next(true);
      observer.complete();
    });
    // .delay(0);
  }
}
