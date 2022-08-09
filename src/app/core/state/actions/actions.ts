import { createAction, props } from '@ngrx/store';
import { OfferModel } from '../../models/offers-model';
import { SubscriptionModel } from '../../models/subscription-model';


export const loadingInit = createAction(
  '[Login] Start Loading'
);

export const authTokenSuccess = createAction(
  '[Login] Authtoken success',
  props<{ authToken: string }>()
);

export const offersSuccess = createAction(
  '[Offers] Offers Success',
  props<{ offers: OfferModel[] }>()
);

export const subscriptionSuccess = createAction(
  '[Offers] Subscription Success',
  props<{ subscriptions: SubscriptionModel[] }>()
);

export const logoutSuccess = createAction(
  '[Offers] LogoutSuccess'
)