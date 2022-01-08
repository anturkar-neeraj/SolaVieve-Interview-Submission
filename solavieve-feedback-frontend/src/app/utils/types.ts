export type Feedback = {
    experience?: number,
    paymentProcess?: number,
    customerService?: number,
    comment?: string
}

export type RatingsChange = {
    name: 'experience' | 'paymentProcess' | 'customerService',
    value: number;
}