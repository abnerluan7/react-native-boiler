import { createAction } from '@reduxjs/toolkit'

import { ActionReducerFunction } from '@/store/types/common'

import {
  OngoingResearchSliceStateTypes,
  OngoingResearchSliceName,
  DELETE_RESEARCH_STAGE
} from '../types'

export const deleteResearchStage: ActionReducerFunction<
  string,
  OngoingResearchSliceStateTypes
> = {
  action: createAction(`${OngoingResearchSliceName}/${DELETE_RESEARCH_STAGE}`),
  reducer: (state, action) => {
    const newStages = state.draft.stages
      .filter((stage) => stage.id !== action.payload)
      .map((stage, index) => ({ ...stage, ordering: index + 1 }))

    const hasAnyCurrentStage = !!newStages.find((stage) => stage.isCurrent)

    if (!hasAnyCurrentStage && newStages.length > 0) {
      newStages[0].isCurrent = true
    }

    state.draft.stages = newStages
  }
}
