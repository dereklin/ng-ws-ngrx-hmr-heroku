import { WindowRef } from './window-ref';
import { Injectable, Inject } from '@angular/core';

@Injectable()
export class WindowService {
  constructor(@Inject('windowObject') private $window: any,
              private winRef: WindowRef) { }

  public window(): any {
    return this.winRef.nativeWindow;
  }

  public resize(timeout: number = 0) {
    const e = document.createEvent('HTMLEvents');
    e.initEvent('resize', true, false);
    setTimeout(() => {
      this.winRef.nativeWindow.dispatchEvent(e);
    }, timeout);
  }
}
