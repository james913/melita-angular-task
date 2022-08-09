import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { OfferModel } from 'src/app/core/models/offers-model';
import { Store } from '@ngrx/store';
import { selectLoading, selectSubscriptions } from 'src/app/core/state/selectors/selector';
import { SubscriptionModel } from 'src/app/core/models/subscription-model';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {

  data!: any;

  constructor(
    public dialogRef: MatDialogRef<SubscriptionsComponent>,
    @Inject(MAT_DIALOG_DATA) private dialogData: SubscriptionModel[],
    private store: Store<any>,
  ) {
    this.data = dialogData;
  }

  ngOnInit(): void {
  }


  selectSubscriptions(): SubscriptionModel[] {
    return this.data.subscriptions.filter((subs: { offerId: any; }) => subs.offerId === this.data.offerId);
  }

}
