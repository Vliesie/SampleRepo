import { CollectionState, initialCollectionState } from '@ascendedco/architecture'
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity'
import { UserActions, UserActionTypes } from './user.actions'
import { User } from '../../entity/user.entity'

export interface State extends CollectionState<User> {
  // add additional state properties if necessary
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>()

export const initialState: State = adapter.getInitialState({
  // add additional initial state properties if necessary
  ...initialCollectionState,
})

export function reducer(
  state = initialState,
  action: UserActions,
): State {
  switch (action.type) {

    case UserActionTypes.CreateUser: {
      return { ...state, loading: true }
    }

    case UserActionTypes.UpdateUser: {
      return { ...state, loading: true }
    }

    case UserActionTypes.DeleteUser: {
      return { ...state, loading: true }
    }

    case UserActionTypes.UpsertUser: {
      return {
        ...adapter.upsertOne(action.payload.user, state),
        loaded: true,
        loading: false,
      }
    }

    case UserActionTypes.UpsertUsers: {
      return {
        ...adapter.upsertMany(action.payload.users, state),
        loaded: true,
        loading: false,
      }
    }

    case UserActionTypes.RemoveUser: {
      return adapter.removeOne(action.payload.id, state)
    }

    case UserActionTypes.RemoveUsers: {
      return adapter.removeMany(action.payload.ids, state)
    }

    case UserActionTypes.ClearUsers: {
      return adapter.removeAll(state)
    }

    default: {
      return state
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors()

export const selectAllUsers = selectAll
export const selectUserEntities = selectEntities
export const selectUserIds = selectIds
export const selectUserTotal = selectTotal
