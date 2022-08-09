import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UtilsService } from 'src/app/core/services/utils/utils.service';
import { Store } from '@ngrx/store';
import { selectLoading } from 'src/app/core/state/selectors/selector';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loading$: Observable<boolean> = new Observable();
  loading = false;
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private utilsService: UtilsService,
    private store: Store<any>,
  ) {
    this._initForm();
  }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.loading$.subscribe(loading => this.loading = loading);
  }

  showError(id: string): string {
    let errorMessage = 'Please complete the fields';
    switch (id) {
      case 'user':
        if (this.loginForm.controls['user'].errors?.['maxlength']) {
          errorMessage = 'The maxlength for the user id is 14';
        }
        break;
      case 'password':
        if (this.loginForm.controls['password'].errors?.['maxlength']) {
          errorMessage = 'The maxlength for the password is 14';
        }
        break;
    }
    return errorMessage;
  }

  getToken(): void {
    if (this.loginForm.valid) {
      const data = {
        user: this.loginForm.get('user')?.value,
        password: this.loginForm.get('password')?.value
      };
      this.utilsService.login(data);
    }
  }

  private _initForm(): void {
    this.loginForm = this.formBuilder.group({
      user: ['', [Validators.required, Validators.maxLength(14)]],
      password: ['', [Validators.required, Validators.maxLength(14)]]
    });
  }

}
