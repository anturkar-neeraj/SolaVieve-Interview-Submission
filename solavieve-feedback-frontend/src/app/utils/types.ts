export type Feedback = {
    userId: string,
    experienceRating?: number,
    paymentProcessRating?: number,
    customerServiceRating?: number,
    feedbackComment?: string
}

export type RatingsChange = {
    name: 'experience' | 'paymentProcess' | 'customerService',
    value: number;
}