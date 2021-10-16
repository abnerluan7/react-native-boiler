import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import { ProofCardReducerKeys, ProofCardSliceStateTypes } from '../types'

type AddHintType = {
  id: string
  hint: string
}

export const addProofCardResourceHint: ActionCreatorPayload<AddHintType> =
  createAction(ProofCardReducerKeys.ADD_PROOF_CARD_RESOURCE_HINT)

export const addProofCardResourceHintReducer: ReducerFunction<
  ProofCardSliceStateTypes,
  AddHintType
> = (state, action) => {
  const index = state.draft.proofCard.resources.findIndex(
    (resource) => resource.id === action.payload.id
  )

  const exists = state.draft.proofCard.resources[index].snippet.hints.indexOf(
    action.payload.hint
  )

  if (exists === -1) {
    state.draft.proofCard.resources[index].snippet.hints.push(
      action.payload.hint
    )
  }
}
