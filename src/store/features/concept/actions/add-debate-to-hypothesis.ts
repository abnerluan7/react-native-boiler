import { createAction } from '@reduxjs/toolkit'

import { ConceptSliceStateTypes } from '@/store/features/concept'
import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import { DebateModel } from '@/app/domain/models'

import { CONCEPT_REDUCER_KEYS } from '../types'

type Payload = {
  debate: DebateModel
}

export const addDebateToHypothesis: ActionCreatorPayload<Payload> =
  createAction(CONCEPT_REDUCER_KEYS.ADD_DEBATE_TO_HYPOTHESIS)

export const addDebateToHypothesisReducer: ReducerFunction<
  ConceptSliceStateTypes,
  Payload
> = (state, action) => {
  const hypothesis = state.draft.hypotheses.find(
    (hypothesis) => hypothesis.id === action.payload.debate.hypothesisId
  )

  if (!hypothesis.debates) {
    hypothesis.debates = []
  }

  hypothesis.debates.push(action.payload.debate)
}
