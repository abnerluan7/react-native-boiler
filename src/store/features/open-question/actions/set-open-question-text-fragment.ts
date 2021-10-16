import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import {
  SET_OPEN_QUESTION_TEXT_FRAGMENT,
  OpenQuestionSliceStateTypes,
  OpenQuestionSliceName
} from '../types'

type SetOpenQuestionTextFragmentParams = {
  conceptId: string
  hypothesisId: string
  textFragment: string
  id: string
}

export const setOpenQuestionTextFragment: ActionCreatorPayload<SetOpenQuestionTextFragmentParams> =
  createAction(`${OpenQuestionSliceName}/${SET_OPEN_QUESTION_TEXT_FRAGMENT}`)

export const setOpenQuestionTextFragmentReducer: ReducerFunction<
  OpenQuestionSliceStateTypes,
  SetOpenQuestionTextFragmentParams
> = (state, action) => {
  state.draft.textFragment = action.payload.textFragment
  state.draft.conceptId = action.payload.conceptId
  state.draft.hypothesisId = action.payload.hypothesisId
  state.draft.id = action.payload.id
}
