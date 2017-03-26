import { Injectable, Inject } from '@angular/core';

@Injectable()
export class WindowService {
  constructor(@Inject('windowObject') private $window: any) {

  }

  public window(): any {
    return this.$window;
  }

  public resize(timeout: number = 0) {
    let e = document.createEvent('HTMLEvents');
    e.initEvent('resize', true, false);
    setTimeout(() => {
      this.$window.dispatchEvent(e);
    }, timeout);
  }
}
