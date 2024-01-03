import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IColumn, IItem } from '@coreui/angular-pro';
import { cilChevronRight } from '@coreui/icons';
import usersData from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],  
})
export class UserComponent {

  constructor(private router: Router){}

  icons = { cilChevronRight };

  usersData: IItem[] = usersData;

  columns: IColumn[] = [
    {
      key: 'name',      
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
      key: 'role',
      // label: 'Role',
      filter: false,
      sorter: false,
    },
    {
      key: 'status',
      // label: 'Status',
      filter: false,
      sorter: false,
    },
    {
      key: 'handle',
      // label: 'handle',
      filter: false,
      sorter: false,      
    },
  ];


  redirectToNewUser(){
    this.router.navigate(['user/new'])
  }
}
