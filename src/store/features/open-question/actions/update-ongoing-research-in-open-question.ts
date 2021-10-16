import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import { OngoingResearchModel } from '@/app/domain/models'

import { OpenQuestionReducerKeys, OpenQuestionSliceStateTypes } from '../types'

export const updateOngoingResearchInOpenQuestion: ActionCreatorPayload<OngoingResearchModel> =
  createAction(OpenQuestionReducerKeys.UPDATE_ONGOING_RESEARCH_IN_OPEN_QUESTION)

export const updateOngoingResearchInOpenQuestionReducer: ReducerFunction<
  OpenQuestionSliceStateTypes,
  OngoingResearchModel
> = (state, action) => {
  const draftIndex = state.draft.ongoingResearches.findIndex(
    (ongoingResearch) => ongoingResearch.id === action.payload.id
  )

  const originalIndex = state.draft.ongoingResearches.findIndex(
    (ongoingResearch) => ongoingResearch.id === action.payload.id
  )

  if (draftIndex > -1 && originalIndex > -1) {
    state.draft.ongoingResearches[draftIndex] = action.payload
    state.original.ongoingResearches[originalIndex] = action.payload
  }
}
