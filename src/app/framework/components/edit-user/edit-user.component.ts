import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UpdateUser, UpsertUser, DeleteUser } from './../../../presentation/user/user.actions';
import { getCurrentUser, getUsersLoading } from './../../../presentation/user/user.selectors';
import { User } from './../../../entity/user.entity';
import { State } from './../../../presentation/index';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {


  loading$: Observable<boolean>;
  user$: Observable<User>

  form: FormGroup;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.loading$ = this.store.pipe(select(getUsersLoading));
    this.user$ = this.store.pipe(select(getCurrentUser), tap(user => this.updateForm(user)));

    this.form = new FormGroup({

      Email: new FormControl(null),
      Name: new FormControl(null),
      Number: new FormControl(null),
      Department: new FormControl(null),
      Location: new FormControl(null),
      })

  }

  UpdateUser(user: User){

    user = {
      id: user.id,
      Name: this.form.controls['Name'].value,
      Email: this.form.controls['Email'].value,
      location: this.form.controls['Location'].value,
      Number: this.form.controls['Number'].value,
      Department: this.form.controls['Department'].value,
    }


    this.store.dispatch(new UpsertUser({user}));
  }

  DeleteUser(user){
    this.store.dispatch(new DeleteUser(user));
  }

  updateForm(user: User) {
    if (user !== null && user !== undefined) this.form.patchValue({
      Email: user.Email,
      Name: user.Name,
      Number: user.Number,
      Department: user.Department,
      Location: user.location
    })
  }
}
