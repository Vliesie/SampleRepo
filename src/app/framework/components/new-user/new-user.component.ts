import { User } from './../../../entity/user.entity';
import { CreateUser } from './../../../presentation/user/user.actions';
import { getUsersLoading } from './../../../presentation/user/user.selectors';
import { reducers } from './../../../presentation/index';
import { Component, OnInit } from '@angular/core';
import { validateFields } from '../../utilities/form.utilities'
import { select, Store } from '@ngrx/store'
import { State } from '../../../presentation'
import { Login } from '../../../presentation/auth/auth.actions'
import { Observable } from 'rxjs'
import { getAuthLoading } from '../../../presentation/auth/auth.selectors'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import * as Workuser from '../../../presentation/user/user.actions'

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})


export class NewUserComponent implements OnInit {

  loading$: Observable<boolean>;

  form: FormGroup;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.clearForm()
    this.loading$ = this.store.pipe(select(getUsersLoading));
  }

  clearForm() {

    this.form = new FormGroup({
      Email: new FormControl(null, [Validators.required, Validators.email]),
      Name: new FormControl(null, Validators.required),
      Number: new FormControl(null, Validators.required),
      Department: new FormControl(null, Validators.required),
      Branch: new FormControl(null, Validators.required),
      Id: new FormControl(null, Validators.required),
    })
  }
  Create(){

    const user: User = {
      updated: new Date("2017-10-01"),
      created:  new Date("2017-10-01"),
      id: this.form.controls['Id'].value,
      Name: this.form.controls['Name'].value,
      Email: this.form.controls['Email'].value,
      location: this.form.controls['Branch'].value,
      Number: this.form.controls['Number'].value,
      Department: this.form.controls['Department'].value,
    }
    this.store.dispatch(new CreateUser({user}));

  }

}
