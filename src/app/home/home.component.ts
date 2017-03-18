import { LoggerService } from '../services/logger.service';
import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent {
    public title: string = 'My Angular';

    constructor(private loggerService: LoggerService) {
      this.loggerService.log('i am testing');
    }
}
