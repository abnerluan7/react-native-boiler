import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import { DEBATE_REDUCER_KEYS, DebateSliceState } from '../types'

type Payload = {
  conceptId: string
  hypothesisId: string
  textFragment: string
  id: string
}

export const setDebateTextFragment: ActionCreatorPayload<Payload> =
  createAction(DEBATE_REDUCER_KEYS.SET_DEBATE_TEXT_FRAGMENT)

export const setDebateTextFragmentReducer: ReducerFunction<
  DebateSliceState,
  Payload
> = (state, action) => {
  state.draft.textFragment = action.payload.textFragment
  state.draft.conceptId = action.payload.conceptId
  state.draft.hypothesisId = action.payload.hypothesisId
  state.draft.id = action.payload.id
}
