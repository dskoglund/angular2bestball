import { Component, Input } from '@angular/core';

import { Golfer } from './golfer';

@Component({
  selector: 'golfer-detail',
  template: `
  <div *ngIf="golfer">
    <md-card>
      <md-card-title>{{golfer.name}} Details!</md-card-title>
      <md-card-content>
        <div>
          <label>id: </label>{{golfer.id}}
        </div>
        <div>
          <label>name: </label>
          <md-input-container>
            <input mdInput [(ngModel)]="golfer.name" placeholder="name">
          </md-input-container>
        </div>
      </md-card-content>
    </md-card>
  </div>
 `
})
export class GolferDetailComponent {
  @Input() golfer: Golfer;
}
