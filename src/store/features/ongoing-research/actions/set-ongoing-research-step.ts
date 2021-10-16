import { createAction } from '@reduxjs/toolkit'

import { ActionReducerFunction } from '@/store/types/common'

import {
  OngoingResearchSliceStateTypes,
  OngoingResearchSliceName,
  SET_ONGOING_RESEARCH_STEP
} from '../types'

export const setOngoingResearchStep: ActionReducerFunction<
  'basic' | 'research-stages' | 'summary',
  OngoingResearchSliceStateTypes
> = {
  action: createAction(
    `${OngoingResearchSliceName}/${SET_ONGOING_RESEARCH_STEP}`
  ),
  reducer: (state, action) => {
    state.step.prev = state.step.current
    state.step.current = action.payload
  }
}
