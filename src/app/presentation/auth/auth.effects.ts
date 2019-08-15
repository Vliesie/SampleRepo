import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'

import { catchError, map, switchMap, tap } from 'rxjs/operators'
import { of } from 'rxjs'
import { AuthActions, AuthActionTypes, Clear, Error, Login, SetAuth } from './auth.actions'
import { AngularFireAuth } from '@angular/fire/auth'
import { fromPromise } from 'rxjs/internal-compatibility'
import { MatSnackBar } from '@angular/material'
import { Router } from '@angular/router'

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions<AuthActions>, private auth: AngularFireAuth,
              private router: Router, private snackBar: MatSnackBar) {}

  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthActionTypes.Login),
    switchMap((action: Login) =>
      fromPromise(this.auth.auth.signInWithEmailAndPassword(action.payload.email, action.payload.password)).pipe(
        map(payload => { return new SetAuth(payload) }),
        tap(() => this.router.navigate(['dashboard'])),
        catchError(err => of(new Error({ error: err, message: err.message })))
      )
    )
  )

  @Effect()
  logout$ = this.actions$.pipe(
    ofType(AuthActionTypes.Logout),
    switchMap(() =>
      fromPromise(this.auth.auth.signOut()).pipe(
        map(() => new Clear()),
        tap(() => this.router.navigate(['login'])),
        catchError(err => of(new Error({ error: err, message: err.message })))
      )
    )
  )

  @Effect({ dispatch: false })
  error$ = this.actions$.pipe(
    ofType(AuthActionTypes.Error),
    tap((action: Error) => {
      this.snackBar.open(action.payload.message)
    })
  )
}
