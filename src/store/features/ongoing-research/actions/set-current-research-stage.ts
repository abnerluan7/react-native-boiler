import { createAction } from '@reduxjs/toolkit'

import { ActionReducerFunction } from '@/store/types/common'

import {
  OngoingResearchSliceStateTypes,
  OngoingResearchSliceName,
  SET_CURRENT_RESEARCH_STAGE
} from '../types'

export const setCurrentResearchStage: ActionReducerFunction<
  {
    id: string
    value: boolean
  },
  OngoingResearchSliceStateTypes
> = {
  action: createAction(
    `${OngoingResearchSliceName}/${SET_CURRENT_RESEARCH_STAGE}`
  ),
  reducer: (state, action) => {
    const currentStageIndex = state.draft.stages.findIndex(
      (stage) => stage.isCurrent
    )
    const newCurrentStageIndex = state.draft.stages.findIndex(
      (stage) => stage.id === action.payload.id
    )

    if (currentStageIndex !== newCurrentStageIndex) {
      if (state.draft.stages[currentStageIndex]) {
        state.draft.stages[currentStageIndex].isCurrent = false
      }

      state.draft.stages[newCurrentStageIndex].isCurrent = action.payload.value
    }
  }
}
