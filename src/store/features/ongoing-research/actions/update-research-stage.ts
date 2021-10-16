import { createAction } from '@reduxjs/toolkit'

import { ActionReducerFunction } from '@/store/types/common'

import {
  OngoingResearchSliceStateTypes,
  OngoingResearchSliceName,
  UPDATE_RESEARCH_STAGE
} from '../types'

export const updateResearchStage: ActionReducerFunction<
  {
    id: string
    value: string
  },
  OngoingResearchSliceStateTypes
> = {
  action: createAction(`${OngoingResearchSliceName}/${UPDATE_RESEARCH_STAGE}`),
  reducer: (state, action) => {
    const stageIndex = state.draft.stages.findIndex(
      (stage) => stage.id === action.payload.id
    )

    state.draft.stages[stageIndex].description = action.payload.value
  }
}
