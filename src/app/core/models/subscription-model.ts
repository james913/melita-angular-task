export interface SubscriptionModel {
  id: number;
  name: string;
  type: Subscription;
  offerId: number;
  usage?: UsageModel[];
}

export enum Subscription {
  INTERNET = 'INTERNET',
  TELEPHONY = "TELEPHONY",
  MOBILE = 'MOBILE',
  TELEVISION = 'TELEVISION'
}

interface UsageModel {
  type: string,
  used: number,
  limit: number
}