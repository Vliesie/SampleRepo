import { LoadUsers } from 'src/app/presentation/user/user.actions';
import { reducers } from './../../../presentation/index';
import { UserActions } from './../../../presentation/user/user.actions';
import { User } from './../../../entity/user.entity';
import { getUsersLoading, getAllUsers } from './../../../presentation/user/user.selectors';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { validateFields } from '../../utilities/form.utilities'
import { select, Store, ReducerManager } from '@ngrx/store'
import { State } from '../../../presentation'
import { Observable } from 'rxjs'
import { async } from 'q';
import { MatTableDataSource } from '@angular/material';
import { Routes } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})




export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Email', 'Number', 'Department', 'Branch'];

  loading$: Observable<Boolean>
  searchValue: string = "";
  users$: Observable<User[]>;
  form: FormGroup

  constructor(private store: Store<Routes>) { }

  ngOnInit() {
    this.loading$ = this.store.pipe(select(getUsersLoading));
    this.users$ = this.store.pipe(select(getAllUsers));



  }


}
