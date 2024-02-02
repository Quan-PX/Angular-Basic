import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { cilChevronLeft } from '@coreui/icons';
import usersData from 'src/app/models/user.model';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserUpdateComponent implements OnInit {
  icons = { cilChevronLeft };

  user: any;

  usersData: any[] = usersData;

  userUpdateForm = this.fb.group({
    username: [
      { value: '', disabled: true },
      {
        validators: [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ],
      },
    ],
    email: [
      '',
      {
        validator: [Validators.required, Validators.email],
      },
    ],
    password: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    confirmPassword: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
  });

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((user) => {
      console.log(user);
    });

    this.activatedRoute.params.subscribe((user) => {
      const findUserById = usersData.find((ele) => ele.id == user['id']);
      // console.log(findUserById);
      if (user['id']) {
        this.username?.setValue(findUserById.username);
        this.email?.setValue(findUserById.email);
        this.firstName?.setValue(findUserById.firstName);
        this.lastName?.setValue(findUserById.lastName);
      }
    });
  }

  goBack() {
    this.location.back();
  }

  submitUserUpdateForm() {
    console.log(this.userUpdateForm.value);
  }

  get username() {
    return this.userUpdateForm.get('username');
  }

  get email() {
    return this.userUpdateForm.get('email');
  }

  get firstName() {
    return this.userUpdateForm.get('firstName');
  }

  get lastName() {
    return this.userUpdateForm.get('lastName');
  }

  get password() {
    return this.userUpdateForm.get('password');
  }
}
