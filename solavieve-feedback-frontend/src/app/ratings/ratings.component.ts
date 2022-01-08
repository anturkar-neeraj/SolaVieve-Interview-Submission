import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RatingsChange } from '../utils/types'
@Component({
  selector: 'ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})



export class RatingsComponent implements OnInit {
  @Input('ratingLabel') ratingLabel: string;
  @Input('name') name;
  @Output() onRatingsChange = new EventEmitter<RatingsChange>();

  constructor() { }

  ngOnInit() {
  }

  onStartRatingChange(e) {
    let changeObject: RatingsChange = {
      name: e.target.name, value: e.target.value
    }
    this.onRatingsChange.emit(changeObject);
  }

}
