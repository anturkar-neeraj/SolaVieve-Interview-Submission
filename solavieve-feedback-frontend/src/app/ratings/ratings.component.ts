import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {
  @Input('ratingLabel') ratingLabel: string;
  @Input('name') name;
  @Output() onRatingsChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onStartRatingChange(e) {
    let changeObject = {
      name: e.target.name, value: e.target.value
    }
    this.onRatingsChange.emit(changeObject);
  }

}
