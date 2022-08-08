import { OfferModel } from "./offers-model";
import { SubscriptionModel } from "./subscription-model";

export interface OffersState {
  loading: boolean;
  authToken: string | null;
  isLogin: boolean;
  offers: ReadonlyArray<OfferModel>;
  subscriptions: ReadonlyArray<SubscriptionModel>;
}