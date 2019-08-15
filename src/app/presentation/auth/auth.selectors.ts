import { createFeatureSelector, createSelector } from '@ngrx/store'
import { State } from './auth.reducer'

export const getAuthFeature = createFeatureSelector<State>('auth')
export const getAuthLoaded = createSelector(getAuthFeature, (state) => state.loaded)
export const getAuthLoading = createSelector(getAuthFeature, (state) => state.loading)
