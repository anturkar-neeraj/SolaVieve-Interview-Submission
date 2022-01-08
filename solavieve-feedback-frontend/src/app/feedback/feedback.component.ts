import { Component, OnInit } from '@angular/core';
import { Feedback } from '../utils/types';
import { StringConstants } from '../utils/strings';

@Component({
  selector: 'feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  experienceLabel: string = StringConstants.EXPERIENCE_LABEL;
  paymentProcessSatisfactionLabel: string = StringConstants.PAYMENT_PROCESS_SATISFACTION_LABEL;
  customerServiceSatisfactionLabel: string = StringConstants.CUSTOMER_SERVICE_SATISFACTION_LABEL;
  commentExperienceLabel: string = StringConstants.COMMENT_LABEL;
  experience: string = StringConstants.EXPERIENCE_RATINGS;
  paymentProcess: string = StringConstants.PAYMENT_PROCESS_RATINGS;
  customerService: string = StringConstants.CUSTOMER_SERVICE_RATINGS;
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

  }

}
