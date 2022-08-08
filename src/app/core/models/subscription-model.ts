export interface SubscriptionModel {
  id: number;
  name: string;
  type: Subscription;
}

export enum Subscription {
  INTERNET = 'INTERNET',
  TELEPHONY = "TELEPHONY",
  MOBILE = 'MOBILE',
  TELEVISION = 'TELEVISION'
}