import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import { OngoingResearchModel } from '@/app/domain/models'

import {
  OngoingResearchSliceStateTypes,
  ONGOING_RESEARCH_REDUCER_KEYS
} from '../types'

export const setOngoingResearchData: ActionCreatorPayload<OngoingResearchModel> =
  createAction(ONGOING_RESEARCH_REDUCER_KEYS.SET_ONGOING_RESEARCH_DATA)

export const setOngoingResearchDataReducer: ReducerFunction<
  OngoingResearchSliceStateTypes,
  OngoingResearchModel
> = (state, action) => {
  state.original = action.payload
  state.draft = action.payload
}
