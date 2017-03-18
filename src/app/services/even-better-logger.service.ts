import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';

@Injectable()
export class EvenBetterLoggerService extends LoggerService {
  constructor() { super(); }

  public log(message: string) {
    let name = 'test';
    super.log(`Message to ${name}: ${message}`);
  }
}
