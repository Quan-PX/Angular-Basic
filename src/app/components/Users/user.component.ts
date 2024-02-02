import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IColumn } from '@coreui/angular-pro';
import { cilChevronRight } from '@coreui/icons';
import { StateStorageService } from 'src/app/services/auth/stateStorage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  icons = { cilChevronRight };

  users: any;

  constructor(
    private stateStorage: StateStorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    // throw new Error('Method not implemented.');
    this.loadListUser();
  }

  // usersData: IItem[] = usersData;

  columns: IColumn[] = [
    {
      key: 'username',
      // label: 'name',
      filter: false,
      sorter: false,
      _props: { color: 'danger', class: 'fw-bold' },
    },
    {
      key: 'registered',
      // label: 'Registered',
      filter: false,
      sorter: false,
    },
    {
      key: 'email',
      // label: 'Role',
      filter: false,
      sorter: false,
    },
    {
      key: 'firstName',
      // label: 'Status',
      filter: false,
      sorter: false,
    },
    {
      key: 'lastName',
      // label: 'Status',
      filter: false,
      sorter: false,
    },
    {
      key: '',
      // label: 'handle',
      filter: false,
      sorter: false,
    },
  ];

  // ngOnInit(){
  //   this.activatedRoute.params.subscribe((usersData) => {
  //     this.u
  //   })
  // }

  loadListUser() {
    const param = {
      page: 0,
      limit: 10,
    };

    this.userService.getAllUser().subscribe(
      (next) => {
        this.users = next.body;
        console.log(this.users);
      },
      (err) => alert('Get list err')
    );
  }

  redirectToNewUser() {
    this.router.navigate(['user/new']);
    // console.log(this.stateStorage.getTokenInLocalStorage(), this.stateStorage.getTokenInSessionStorage(), this.stateStorage.getCurrentTokenTime(), "here")
  }
}
