import { Action } from '@ngrx/store'

export enum AuthActionTypes {
  LoadAuth = '[Auth] Load Auth',
  SetAuth = '[Auth] Set Auth',
  Login = '[Auth] Login',
  Logout = '[Auth] Logout',
  Register = '[Auth] Register',
  Error = '[Auth] Error',
  Clear = '[Auth] Clear'
}

export class LoadAuth implements Action {
  readonly type = AuthActionTypes.LoadAuth
}

export class SetAuth implements Action {
  readonly type = AuthActionTypes.SetAuth
  constructor(public payload: any) {}
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login
  constructor(public payload: { email: string, password: string }) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout
}

export class Error implements Action {
  readonly type = AuthActionTypes.Error
  constructor(public payload: { error: any, message: string }) {}
}

export class Clear implements Action {
  readonly type = AuthActionTypes.Clear
}

export type AuthActions = LoadAuth | SetAuth | Login | Logout | Error | Clear
