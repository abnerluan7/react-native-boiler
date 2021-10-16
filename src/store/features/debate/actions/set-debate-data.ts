import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import { DebateModel } from '@/app/domain/models'

import { DEBATE_REDUCER_KEYS, DebateSliceState } from '../types'

type Payload = {
  debate: DebateModel
}

export const setDebateData: ActionCreatorPayload<Payload> = createAction(
  DEBATE_REDUCER_KEYS.SET_DEBATE_DATA
)

export const setDebateDataReducer: ReducerFunction<DebateSliceState, Payload> =
  (state, action) => {
    state.draft = { ...action.payload.debate }
  }
