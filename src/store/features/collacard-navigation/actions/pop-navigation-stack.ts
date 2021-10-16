import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import {
  CollacardNavigationState,
  COLLACARD_NAVIGATION_REDUCER_KEYS
} from '../types'

type Payload = {
  index: number
}

export const popNavigationStack: ActionCreatorPayload<Payload> = createAction(
  COLLACARD_NAVIGATION_REDUCER_KEYS.POP_NAVIGATION_STACK
)

export const popNavigationStackReducer: ReducerFunction<
  CollacardNavigationState,
  Payload
> = (state, action) => {
  const newFrom = state.stack[action.payload.index - 1]
  if (newFrom) {
    state.action = newFrom.action
    state.from.collacard = newFrom.collacard
    state.from.type = newFrom.type
    state.from.id = newFrom.id
  }

  if (!newFrom) {
    state.action = null
    state.from = {
      collacard: null,
      id: '',
      type: null
    }
  }
  state.stack.splice(action.payload.index, 1)
}
