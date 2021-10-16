import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import { OngoingResearchModel } from '@/app/domain/models'

import {
  ADD_ONGOING_RESEARCH_TO_OPEN_QUESTION,
  OpenQuestionSliceName,
  OpenQuestionSliceStateTypes
} from '../types'

export const addOngoingResearchToOpenQuestion: ActionCreatorPayload<OngoingResearchModel> =
  createAction(
    `${OpenQuestionSliceName}/${ADD_ONGOING_RESEARCH_TO_OPEN_QUESTION}`
  )

export const addOngoingResearchToOpenQuestionReducer: ReducerFunction<
  OpenQuestionSliceStateTypes,
  OngoingResearchModel
> = (state, action) => {
  const exists = state.draft.ongoingResearches.find(
    (ongoingResearch) => ongoingResearch.id === action.payload.id
  )

  if (!exists) {
    state.draft.ongoingResearches.push(action.payload)
  }
}
