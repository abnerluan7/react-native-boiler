import { createAction } from '@reduxjs/toolkit'

import {
  ProofCardReducerKeys,
  ProofCardSliceStateTypes
} from '@/store/features/proof-card/types'
import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

type Payload = {
  conceptId: string
}

export const setProofCardConceptId: ActionCreatorPayload<Payload> =
  createAction(ProofCardReducerKeys.SET_PROOF_CARD_CONCEPT_ID)

export const setProofCardConceptIdReducer: ReducerFunction<
  ProofCardSliceStateTypes,
  Payload
> = (state, action) => {
  state.conceptId = action.payload.conceptId
}
