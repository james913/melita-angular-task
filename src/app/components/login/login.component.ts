import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/core/services/utils/utils.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private utilsService: UtilsService,
  ) {
    this._initForm();
  }

  ngOnInit(): void {
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
