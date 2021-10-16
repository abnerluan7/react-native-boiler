import { createAction } from '@reduxjs/toolkit'

import {
  ProofCardReducerKeys,
  ProofCardSliceStateTypes
} from '@/store/features/proof-card/types'
import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

type Payload = {
  conceptId: string
  hypothesisId: string
  textFragment: string
  id: string
}

export const setProofCardTextFragment: ActionCreatorPayload<Payload> =
  createAction(ProofCardReducerKeys.SET_PROOF_CARD_TEXT_FRAGMENT)

export const setProofCardTextFragmentReducer: ReducerFunction<
  ProofCardSliceStateTypes,
  Payload
> = (state, action) => {
  state.draft.proofCard.textFragment = action.payload.textFragment
  state.draft.proofCard.conceptId = action.payload.conceptId
  state.draft.proofCard.hypothesisId = action.payload.hypothesisId
  state.draft.proofCard.id = action.payload.id
}
