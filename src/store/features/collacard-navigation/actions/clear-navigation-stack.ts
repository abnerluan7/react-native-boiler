import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import {
  CollacardNavigationState,
  COLLACARD_NAVIGATION_REDUCER_KEYS
} from '../types'

export const clearNavigationStack: ActionCreatorPayload<void> = createAction(
  COLLACARD_NAVIGATION_REDUCER_KEYS.CLEAR_NAVIGATION_STACK
)

export const clearNavigationStackReducer: ReducerFunction<
  CollacardNavigationState,
  void
> = (state) => {
  state.stack = []
}
