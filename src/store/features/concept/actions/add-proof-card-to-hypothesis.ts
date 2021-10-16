import { createAction } from '@reduxjs/toolkit'

import { ConceptSliceStateTypes } from '@/store/features/concept'
import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import { ProofCardModel } from '@/app/domain/models'

import { CONCEPT_REDUCER_KEYS } from '../types'

type Payload = ProofCardModel

export const addProofCardToHypothesis: ActionCreatorPayload<Payload> =
  createAction(CONCEPT_REDUCER_KEYS.ADD_PROOF_CARD_TO_HYPOTHESIS)

export const addProofCardToHypothesisReducer: ReducerFunction<
  ConceptSliceStateTypes,
  Payload
> = (state, action) => {
  const hypothesis = state.draft.hypotheses.find(
    (hypothesis) => hypothesis.id === action.payload.hypothesisId
  )
  if (!hypothesis?.proofCards) {
    hypothesis.proofCards = []
  }
  hypothesis.proofCards.push(action.payload)
}
