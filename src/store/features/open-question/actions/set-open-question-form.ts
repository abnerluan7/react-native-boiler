import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import { OPEN_QUESTION_FORM_VALUES } from '@/app/presentation/common/constants/pages'

import {
  OpenQuestionSliceStateTypes,
  OpenQuestionSliceName,
  SET_OPEN_QUESTION_FORM
} from '../types'

export const setOpenQuestionForm: ActionCreatorPayload<
  typeof OPEN_QUESTION_FORM_VALUES
> = createAction(`${OpenQuestionSliceName}/${SET_OPEN_QUESTION_FORM}`)

export const setOpenQuestionFormReducer: ReducerFunction<
  OpenQuestionSliceStateTypes,
  typeof OPEN_QUESTION_FORM_VALUES
> = (state, action) => {
  state.draft.difficultyLevel = action.payload.difficultyLevel
  state.draft.howToTackle = action.payload.howToTackle
  state.draft.importanceLevel = action.payload.importanceLevel
  state.draft.question = action.payload.question
  state.draft.whyIsImportant = action.payload.whyIsImportant
}
