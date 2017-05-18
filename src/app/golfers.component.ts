import { Component, OnInit } from '@angular/core';

import { Golfer }            from './golfer';
import { GolferService }     from './golfer.service';

@Component({
  selector: 'my-golfers',
  templateUrl: `./golfers.component.html`,
  styleUrls: ['./golfers.component.css']
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
