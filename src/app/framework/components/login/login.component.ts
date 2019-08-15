import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { validateFields } from '../../utilities/form.utilities'
import { select, Store } from '@ngrx/store'
import { State } from '../../../presentation'
import { Login } from '../../../presentation/auth/auth.actions'
import { Observable } from 'rxjs'
import { getAuthLoading } from '../../../presentation/auth/auth.selectors'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading$: Observable<boolean>

  form: FormGroup

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.loading$ = this.store.pipe(select(getAuthLoading))
    this.clearForm()
  }

  clearForm() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    })
  }

  validate() {
    if (this.form.valid) this.store.dispatch(new Login({
      email: this.form.controls['email'].value,
      password: this.form.controls['password'].value
    }))
    else validateFields(this.form)
  }
}
