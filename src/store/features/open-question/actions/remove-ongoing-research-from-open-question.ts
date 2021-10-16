import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import { OpenQuestionReducerKeys, OpenQuestionSliceStateTypes } from '../types'

export const removeOngoingResearchFromOpenQuestion: ActionCreatorPayload<{
  id: string
}> = createAction(
  OpenQuestionReducerKeys.REMOVE_ONGOING_RESEARCH_FROM_OPEN_QUESTION
)

export const removeOngoingResearchFromOpenQuestionReducer: ReducerFunction<
  OpenQuestionSliceStateTypes,
  { id: string }
> = (state, action) => {
  const index = state.draft.ongoingResearches.findIndex(
    (ongoingResearch) => ongoingResearch.id === action.payload.id
  )

  if (index !== -1) {
    state.draft.ongoingResearches.splice(index, 1)
  }
}
