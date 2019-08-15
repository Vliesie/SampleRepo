
import { AuthActions, AuthActionTypes } from './auth.actions';

export interface State {
  loading: boolean
  loaded: boolean
  auth: any
}

export const initialState: State = {
  loading: false,
  loaded: false,
  auth: null
}

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {

    case AuthActionTypes.LoadAuth: return { ...state, loading: true }
    case AuthActionTypes.SetAuth: return { ...state, loading: false, loaded: true, auth: action.payload }
    case AuthActionTypes.Login: return { ...state, loading: true }
    case AuthActionTypes.Error: return { ...state, loading: false, loaded: true }
    case AuthActionTypes.Clear: return initialState

    default: return state
  }
}
