import { createAction } from '@reduxjs/toolkit'

import { ConceptSliceStateTypes } from '@/store/features/concept'
import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import { OpenQuestionModel } from '@/app/domain/models'

import { CONCEPT_REDUCER_KEYS } from '../types'

type Payload = OpenQuestionModel

export const addOpenQuestionToHypothesis: ActionCreatorPayload<Payload> =
  createAction(CONCEPT_REDUCER_KEYS.ADD_OPEN_QUESTION_TO_HYPOTHESIS)

export const addOpenQuestionToHypothesisReducer: ReducerFunction<
  ConceptSliceStateTypes,
  Payload
> = (state, action) => {
  if (action.payload.hypothesisId) {
    const hypothesis = state.draft.hypotheses.find(
      (hypothesis) => hypothesis.id === action.payload.hypothesisId
    )
    if (!hypothesis.openQuestions) {
      hypothesis.openQuestions = []
    }
    hypothesis.openQuestions.push(action.payload)
  }

  if (!action.payload.hypothesisId) {
    state.draft.openQuestions.push(action.payload)
  }
}
