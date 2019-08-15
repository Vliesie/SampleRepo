import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { State } from '../../../presentation'
import { Logout } from '../../../presentation/auth/auth.actions'
import { getUsersLoading, getAllUsers } from './../../../presentation/user/user.selectors';
import { LoadUsers } from 'src/app/presentation/user/user.actions';
import {MediaMatcher} from '@angular/cdk/layout';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {



  constructor(private store: Store<State>) { }

  ngOnInit() {


    this.store.dispatch(new LoadUsers());
  }

  logout() {
    this.store.dispatch(new Logout())
  }
}
