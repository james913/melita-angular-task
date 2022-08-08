import { OffersState } from "../models/offers.state";
import { ActionReducerMap } from '@ngrx/store';
import { offersReducer } from "./reducers/reducers";

//Define the diferents store inside of the application
export interface AppState {
  offers: OffersState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  offers: offersReducer
}