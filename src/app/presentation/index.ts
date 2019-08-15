import { ActionReducerMap } from '@ngrx/store'
import * as fromAuth from './auth/auth.reducer'
import { AuthEffects } from './auth/auth.effects'
import * as fromUser from './user/user.reducer'
import { UserEffects } from './user/user.effects'
import { routerReducer, RouterReducerState } from '@ngrx/router-store'
import * as fromRouter from './router/router.reducer'

export interface State {
  auth: fromAuth.State
  user: fromUser.State
  router: RouterReducerState<fromRouter.State>
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  user: fromUser.reducer,
  router: routerReducer
}

export const effects = [
  AuthEffects,
  UserEffects,
]
