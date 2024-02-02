import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  ButtonModule,
  CardModule,
  FormModule,
  TooltipModule,
} from '@coreui/angular-pro';
import { cilCommentBubble, cilLockLocked, cilUser } from '@coreui/icons';
import { IconModule } from '@coreui/icons-angular';
import { AuthServerProvider } from 'src/app/services/auth/auth-jwt.service';
import { StateStorageService } from 'src/app/services/auth/stateStorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    CardModule,
    FormModule,
    ButtonModule,
    IconModule,
    TooltipModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  standalone: true,
})
export class LoginComponent {
  icons = { cilUser, cilLockLocked, cilCommentBubble };

  constructor(
    private authServerProvider: AuthServerProvider,
    private stateStorage: StateStorageService,
    private route: Router
  ) {}

  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    password: new FormControl('', Validators.required),
    rememberMe: new FormControl(true),
  });

  submitFormLogin() {
    console.log(this.loginForm.value);
    this.username?.markAsDirty();
    this.password?.markAsDirty();
    if (this.loginForm.valid) {
      this.authServerProvider.login(this.loginForm.getRawValue()).subscribe({
        next: (response) => {
          this.route.navigate(['/'])
          alert("Đăng nhạp thành công!!!")
        },
        error: (err) => {
          alert(`Cannot Login my App: ${err}`);
        },
      });
    }
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get rememberMe() {
    return this.loginForm.get('rememberMe');
  }
}
