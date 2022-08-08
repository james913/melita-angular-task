import { createReducer, on } from '@ngrx/store';
import { OfferModel } from '../../models/offers-model';
import { OffersState } from '../../models/offers.state';
import { loadingInit, authTokenSuccess, offersSuccess } from '../actions/actions';

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
    console.log(offers)
    return { ...state, loading: false, offers: offers }
  })
); 