import { Component, OnInit } from '@angular/core';
import { Feedback } from '../utils/types';
import { StringConstants } from '../utils/strings';
import { FeedbackService } from '../feedback.service';

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
  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.feedback = {
      userId: "4653a6f5-fc2f-40df-babb-e77ec30673a3",
      experienceRating: 0,
      paymentProcessRating: 0,
      customerServiceRating: 0,
      feedbackComment: ''
    }
  }

  async onSubmitClick() {
    const response = await this.feedbackService.postFeedback(this.feedback);
    if (response['success'])
      this.modalHidden = false;
  }

  onCloseClick() {
    this.modalHidden = true;
  }

  onRatingsChange(e) {
    this.feedback[e.name] = parseInt(e.value, 10);

  }

}
