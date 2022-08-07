import { Component } from '@angular/core';
import { HttpService } from './core/services/http/http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'melita-task';

  constructor(private httpService: HttpService) {
    this.httpService.loginUser().subscribe(res => {
      localStorage.setItem('authToken', res.authToken);
    });
  }

  getOffers(): void {
    this.httpService.getOffers().subscribe(res => {
      console.log(res);
    })
  }

}
