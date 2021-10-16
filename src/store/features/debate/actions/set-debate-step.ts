import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import { DEBATE_REDUCER_KEYS, DebateSliceState, StepTypes } from '../types'

type Payload = {
  step: StepTypes
}

export const setDebateStep: ActionCreatorPayload<Payload> = createAction(
  DEBATE_REDUCER_KEYS.SET_DEBATE_STEP
)

export const setDebateStepReducer: ReducerFunction<DebateSliceState, Payload> =
  (state, action) => {
    state.step.prev = state.step.current
    state.step.current = action.payload.step
  }
