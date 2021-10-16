import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import { DEBATE_REDUCER_KEYS, DebateSliceState } from '../types'

type Payload = {
  title: string
  reason: string
}

export const setDebateBasicInformationForm: ActionCreatorPayload<Payload> =
  createAction(DEBATE_REDUCER_KEYS.SET_DEBATE_BASIC_INFORMATION_FORM)

export const setDebateBasicInformationFormReducer: ReducerFunction<
  DebateSliceState,
  Payload
> = (state, action) => {
  state.draft.title = action.payload.title
  state.draft.reason = action.payload.reason
}
