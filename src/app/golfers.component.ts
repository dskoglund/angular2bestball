import { Component, OnInit } from '@angular/core';

import { Golfer }            from './golfer';
import { GolferService }     from './golfer.service';

@Component({
  selector: 'my-golfers',
  template: `
    <md-toolbar color="accent">
      <span>{{toolbarTitle}}</span>
    </md-toolbar>
    <golfer-detail [golfer]="selectedGolfer"></golfer-detail>
    <md-list>
      <md-list-item *ngFor = "let golfer of golfers" [class.selected]="golfer === selectedGolfer">
        <div>
          {{golfer.id}}
        </div>
        <div>
          {{golfer.name}}
        </div>
        <button md-raised-button (click)="onSelect(golfer)">View Details</button>
      </md-list-item>
    </md-list>
    `,
    styles: [`
      .selected {
        background-color: #CFD8DC !important;
      }
    `]
})

export class GolfersComponent implements OnInit {
  toolbarTitle = 'Golfers';
  golfers: Golfer[];
  selectedGolfer: Golfer;

  constructor(private golferService: GolferService) { }

  getGolfers(): void {
    this.golferService.getGolfersSlowly().then(golfers => this.golfers = golfers);
  };

  ngOnInit(): void {
   this.getGolfers();
  }

  onSelect(golfer: Golfer): void {
    this.selectedGolfer = golfer;
  }
}
