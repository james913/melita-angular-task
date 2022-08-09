import { Component, OnInit } from '@angular/core';
import { UtilsService } from './core/services/utils/utils.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'melita-task';

  constructor(
    private utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    this.utilsService.redirect('login');
  }

}
