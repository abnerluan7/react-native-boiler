import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import {
  DEBATE_REDUCER_KEYS,
  DebateSliceState,
  DEBATE_INITIAL_STATE
} from '../types'

export const resetDebateState: ActionCreatorPayload<void> = createAction(
  DEBATE_REDUCER_KEYS.RESET_DEBATE_STATE
)

export const resetDebateStateReducer: ReducerFunction<DebateSliceState, void> =
  (state) => {
    state = DEBATE_INITIAL_STATE
    return state
  }
