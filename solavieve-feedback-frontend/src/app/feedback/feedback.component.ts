import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Feedback } from '../utils/types';

@Component({
  selector: 'feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  experienceLabel: string = 'Rate your experience from 0 to 5 starts:';
  paymentProcessSatisfactionLabel: string = 'How satisfied are you with the payment process?';
  customerServiceSatisfactionLabel: string = 'How satisfied are you with our customer service?';
  commentExperienceLabel: string = 'Please leave a comment about your experience below: ';
  experience: string = 'experience';
  paymentProcess: string = 'paymentProcess';
  customerService: string = 'customerService';
  modalHidden: boolean = true;
  feedback: Feedback;
  constructor() { }

  ngOnInit() {
    this.feedback = {
      experience: 0,
      paymentProcess: 0,
      customerService: 0,
      comment: ''
    }
  }

  onSubmitClick() {
    this.modalHidden = false;
    console.log(this.feedback);
  }

  onCloseClick() {
    this.modalHidden = true;
  }

  onRatingsChange(e) {
    this.feedback[e.name] = parseInt(e.value, 10);
    console.log(this.feedback);
  }

}
