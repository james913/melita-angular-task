import { createSelector } from '@ngrx/store';
import { OffersState } from '../../models/offers.state';
import { AppState } from '../app.state';


export const selectOffersFeature = (state: AppState) => state.offers;

export const selectLoading = createSelector(
  selectOffersFeature,
  (state: OffersState) => state.loading
);
export const selectIsLogin = createSelector(
  selectOffersFeature,
  (state: OffersState) => state.isLogin
);
export const selectSubscriptions = createSelector(
  selectOffersFeature,
  (state: OffersState) => state.subscriptions
);
export const selectAuthToken = createSelector(
  selectOffersFeature,
  (state: OffersState) => state.authToken
);