import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import {
  CollacardNavigationState,
  COLLACARD_NAVIGATION_REDUCER_KEYS
} from '../types'

type Payload = {
  preventRefetch: CollacardNavigationState['preventRefetch']
}

export const setPreventRefetchStatus: ActionCreatorPayload<Payload> =
  createAction(COLLACARD_NAVIGATION_REDUCER_KEYS.SET_PREVENT_REFETCH_STATUS)

export const setPreventRefetchStatusReducer: ReducerFunction<
  CollacardNavigationState,
  Payload
> = (state, action) => {
  state.preventRefetch = action.payload.preventRefetch
}
