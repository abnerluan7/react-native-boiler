import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import {
  OpenQuestionSliceStateTypes,
  OpenQuestionSliceName,
  SET_OPEN_QUESTION_STEP
} from '../types'

type StepTypes = { step: 'basic' | 'add-research' | 'summary' }

export const setOpenQuestionStep: ActionCreatorPayload<StepTypes> =
  createAction(`${OpenQuestionSliceName}/${SET_OPEN_QUESTION_STEP}`)

export const setOpenQuestionStepReducer: ReducerFunction<
  OpenQuestionSliceStateTypes,
  StepTypes
> = (state, action) => {
  state.step.prev =
    state.step.current === action.payload.step ? 'basic' : state.step.current
  state.step.current = action.payload.step
}
