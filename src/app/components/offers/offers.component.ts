import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OfferModel } from 'src/app/core/models/offers-model';
import { Store } from '@ngrx/store';
import { selectLoading, selectOffers, selectSubscriptions } from 'src/app/core/state/selectors/selector';
import { SubscriptionsComponent } from '../subscriptions/subscriptions.component';
import { MatDialog } from '@angular/material/dialog';
import { UtilsService } from 'src/app/core/services/utils/utils.service';
import { subscriptionSuccess } from 'src/app/core/state/actions/actions';
import { SubscriptionModel } from 'src/app/core/models/subscription-model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  private loading$: Observable<boolean> = new Observable();
  private offers$: Observable<readonly OfferModel[]> = new Observable();
  private subscriptions$: Observable<readonly SubscriptionModel[]> = new Observable();

  loading = false;
  offers!: readonly OfferModel[];
  subscriptions!: readonly SubscriptionModel[];

  constructor(
    private store: Store<any>,
    private dialog: MatDialog,
    private utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.loading$.subscribe(loading => this.loading = loading);
    this.offers$ = this.store.select(selectOffers);
    this.offers$.subscribe(offersData => this.offers = offersData);
    this.subscriptions$ = this.store.select(selectSubscriptions);
    this.subscriptions$.subscribe(subscriptions => this.subscriptions = subscriptions);
  }

  openDialog(offer: OfferModel): void {
    if (this.subscriptions.find(sub => sub.offerId === offer.id)) {
      const dialogRef = this.dialog.open(SubscriptionsComponent, {
        width: '600px',
        data: {
          offerId: offer.id, subscriptions: this.subscriptions
        }
      });
    } else {
      this.utilsService.getSubscription(offer.id).subscribe(r => {
        this.store.dispatch(subscriptionSuccess({ subscriptions: r.subscriptions }));
        const dialogRef = this.dialog.open(SubscriptionsComponent, {
          width: '600px',
          data: {
            offerId: offer.id, subscriptions: this.subscriptions
          }
        });
      });
    }
  }

  logout() {
    this.utilsService.logout();
  }
}
