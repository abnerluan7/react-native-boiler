import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import {
  OngoingResearchSliceStateTypes,
  ONGOING_RESEARCH_REDUCER_KEYS
} from '../types'

type Payload = {
  name: string
  whatIsResearchTryingToProve: string
  whyIsImportant: string
}

export const setOngoingResearchBasicInfo: ActionCreatorPayload<Payload> =
  createAction(ONGOING_RESEARCH_REDUCER_KEYS.SET_ONGOING_RESEARCH_BASIC_INFO)

export const setOngoingResearchBasicInfoReducer: ReducerFunction<
  OngoingResearchSliceStateTypes,
  Payload
> = (state, action) => {
  state.draft.name = action.payload.name
  state.draft.whatIsResearchTryingToProve =
    action.payload.whatIsResearchTryingToProve
  state.draft.whyIsImportant = action.payload.whyIsImportant
}
