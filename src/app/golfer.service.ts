import { Injectable } from '@angular/core';

import { Golfer }     from './golfer';
import { GOLFERS }    from './mock-golfers';

@Injectable()
export class GolferService {
  getGolfers(): Promise<Golfer[]> {
    return Promise.resolve(GOLFERS);
  }
  getGolfersSlowly(): Promise<Golfer[]> {
    return new Promise(resolve => {
    setTimeout(() => resolve(this.getGolfers()), 2000)
    })
  }
}
