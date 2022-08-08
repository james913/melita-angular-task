import { createAction, props } from '@ngrx/store';
import { OfferModel } from '../../models/offers-model';


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