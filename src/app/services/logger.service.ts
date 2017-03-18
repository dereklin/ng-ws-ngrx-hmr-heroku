import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  public logs: string[] = []; // capture logs for testing
  public log(message: string) {
    this.logs.push(message);
    console.log(message);
  }
}
