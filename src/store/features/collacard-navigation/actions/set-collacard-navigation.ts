import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import {
  CollacardNavigationState,
  COLLACARD_NAVIGATION_REDUCER_KEYS
} from '../types'

type Payload = {
  from?: CollacardNavigationState['from']
  action?: CollacardNavigationState['action']
  preventRefetch?: CollacardNavigationState['preventRefetch']
}

export const setCollacardNavigation: ActionCreatorPayload<Payload> =
  createAction(COLLACARD_NAVIGATION_REDUCER_KEYS.SET_COLLACARD_NAVIGATION)

export const setCollacardNavigationReducer: ReducerFunction<
  CollacardNavigationState,
  Payload
> = (state, action) => {
  if (action.payload.from) {
    state.from = action.payload.from
    state.stack.push({
      ...action.payload.from,
      action: action.payload.from.action ?? action.payload.action
    })
  }

  if (action.payload.preventRefetch) {
    state.preventRefetch = action.payload.preventRefetch
  }

  if (action.payload.action) {
    state.action = action.payload.action
  }
}
