import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  ButtonModule,
  CardModule,
  ContainerComponent,
  FormModule,
} from '@coreui/angular-pro';
import { cilEnvelopeOpen, cilLockLocked, cilUser } from '@coreui/icons';
import { IconModule } from '@coreui/icons-angular';
import { UserService } from 'src/app/services/user.service';
import { confirmValidatorPassword } from 'src/app/shared/confirmValidatorPassword';
import { passwordValidator } from 'src/app/shared/customValidatePassword';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [
    CardModule,
    FormModule,
    ReactiveFormsModule,
    ButtonModule,
    IconModule,
    ContainerComponent,
  ],
  standalone: true,
})
export class RegisterComponent {
  icons = { cilUser, cilLockLocked, cilEnvelopeOpen };

  registerForm = this.fb.group({
    username: [
      '',
      {
        validators: [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ],
        // asyncValidators: [], // call API check username here
        // updateOn: blur,
      },
    ],
    email: [
      '',
      {
        validator: [Validators.required, Validators.email],
        // asyncValidators: [], // call API check username here
        // updateOn: blur,
      },
    ],
    password: [
      '',
      {
        validators: [Validators.required, passwordValidator()],
        // asyncValidators: [], // call API check username here
        // updateOn: blur,
      },
    ],
    confirmPassword: ['', [Validators.required, confirmValidatorPassword()]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private userService: UserService, private route: Router) {}

  submitRegisterForm() {
    console.log(this.registerForm.value);
    this.userService.registerUser(this.registerForm.getRawValue()).subscribe(
      (next) => {console.log("Open in here"), this.route.navigate(["/login"])},
      (err) => alert('Tạo tài khoản bị lỗi'),      
    );
    
  }

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }
}
