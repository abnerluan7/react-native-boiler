import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import {
  OngoingResearchSliceStateTypes,
  ONGOING_RESEARCH_REDUCER_KEYS
} from '../types'

type Payload = {
  id: string
  conceptId: string
  openQuestionId: string
  hypothesisId: string
  fragment: string
}

export const addOngoingResearch: ActionCreatorPayload<Payload> = createAction(
  ONGOING_RESEARCH_REDUCER_KEYS.ADD_ONGOING_RESEARCH
)

export const addOngoingResearchReducer: ReducerFunction<
  OngoingResearchSliceStateTypes,
  Payload
> = (state, action) => {
  state.draft.id = action.payload.id
  state.conceptId = action.payload.conceptId
  state.fragment = action.payload.fragment
  state.hypothesisId = action.payload.hypothesisId
  state.openQuestionId = action.payload.openQuestionId
}
