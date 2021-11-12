import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api/api.service';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;
  errorMsg;
  constructor(public _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router,) { }

  ngOnInit(): void {
    this.validations();
  }

  validations() {
    this.signInForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  login() {
    if (this.signInForm.invalid) {
      this.validateAllFormFields(this.signInForm)
    } else {
      this._authService.signIn(this.signInForm.value).subscribe((response) => {
        if (response.status.code === 1) {
          this._authService.setAccessToken(response.data.acc_token);
          this._router.navigate(['/category/all']);
        } else {
          this.errorMsg = response.status.message
        }
      });
    }
  }



  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

}
