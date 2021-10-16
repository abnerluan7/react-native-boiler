import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import { ProofCardReducerKeys, ProofCardSliceStateTypes } from '../types'

type AddHintType = {
  id: string
  hint: string
}

export const removeProofCardResourceHint: ActionCreatorPayload<AddHintType> =
  createAction(ProofCardReducerKeys.REMOVE_PROOF_CARD_RESOURCE_HINT)

export const removeProofCardResourceHintReducer: ReducerFunction<
  ProofCardSliceStateTypes,
  AddHintType
> = (state, action) => {
  const index = state.draft.proofCard.resources.findIndex(
    (resource) => resource.id === action.payload.id
  )

  state.draft.proofCard.resources[index].snippet.hints =
    state.draft.proofCard.resources[index].snippet.hints.filter(
      (hint) => hint !== action.payload.hint
    )
}
