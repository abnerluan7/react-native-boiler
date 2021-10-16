import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import { OpenQuestionModel } from '@/app/domain/models'

import { OpenQuestionSliceStateTypes, OpenQuestionReducerKeys } from '../types'

export const setOpenQuestionData: ActionCreatorPayload<OpenQuestionModel> =
  createAction(OpenQuestionReducerKeys.SET_OPEN_QUESTION_DATA)

export const setOpenQuestionDataReducer: ReducerFunction<
  OpenQuestionSliceStateTypes,
  OpenQuestionModel
> = (state, action) => {
  state.original = action.payload
  state.draft = action.payload
}
