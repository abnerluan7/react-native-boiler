import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import {
  OpenQuestionSliceStateTypes,
  OpenQuestionSliceName,
  openQuestionInitialState,
  RESET_OPEN_QUESTION_STATE
} from '../types'

export const resetOpenQuestionState: ActionCreatorPayload<void> = createAction(
  `${OpenQuestionSliceName}/${RESET_OPEN_QUESTION_STATE}`
)

export const resetOpenQuestionStateReducer: ReducerFunction<
  OpenQuestionSliceStateTypes,
  void
> = (state) => {
  state = { ...openQuestionInitialState }
  return state
}
