import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import {
  OngoingResearchSliceStateTypes,
  OngoingResearchSliceName,
  RESET_ONGOING_RESEARCH_STATE,
  ONGOING_RESEARCH_INITIAL_STATE
} from '../types'

export const resetOngoingResearchState: ActionCreatorPayload<void> =
  createAction(`${OngoingResearchSliceName}/${RESET_ONGOING_RESEARCH_STATE}`)

export const resetOngoingResearchStateReducer: ReducerFunction<
  OngoingResearchSliceStateTypes,
  void
> = (state) => {
  state = ONGOING_RESEARCH_INITIAL_STATE
  return state
}
