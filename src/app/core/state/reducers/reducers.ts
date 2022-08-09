import { createReducer, on } from '@ngrx/store';
import { OfferModel } from '../../models/offers-model';
import { OffersState } from '../../models/offers.state';
import { SubscriptionModel } from '../../models/subscription-model';
import { loadingInit, authTokenSuccess, offersSuccess, subscriptionSuccess, logoutSuccess } from '../actions/actions';

export const offersInitialState: OffersState = {
  authToken: null,
  loading: false,
  isLogin: false,
  offers: [],
  subscriptions: []
}

export const offersReducer = createReducer(
  offersInitialState,
  on(loadingInit, (state) => {
    return { ...state, loading: true };
  }),
  on(authTokenSuccess, (state, action) => {
    const authToken = action.authToken;
    return { ...state, isLogin: true, loading: false, authToken: authToken };
  }),
  on(offersSuccess, (state, action) => {
    const offers: OfferModel[] = action.offers;
    return { ...state, loading: false, offers: offers }
  }),
  on(subscriptionSuccess, (state, action) => {
    const subscriptions: SubscriptionModel[] = action.subscriptions;
    return { ...state, loading: false, subscriptions: state.subscriptions.concat(subscriptions) }
  }),
  on(logoutSuccess, (state) => {
    return { ...state, loading: false, isLogin: false, authToken: null }
  })
); 