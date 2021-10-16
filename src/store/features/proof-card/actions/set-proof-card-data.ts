import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import { ProofCardModel } from '@/app/domain/models'

import {
  ProofCardReducerKeys,
  ProofCardSliceStateTypes,
  resourceControlInitialState
} from '../types'

export const setProofCardDraft: ActionCreatorPayload<ProofCardModel> =
  createAction(ProofCardReducerKeys.SET_PROOF_CARD_DRAFT)

export const setProofCardDraftReducer: ReducerFunction<
  ProofCardSliceStateTypes,
  ProofCardModel
> = (state, action) => {
  state.draft.proofCard = action.payload
  state.draft.resourceControl = action.payload.resources.map((resource) => ({
    ...resourceControlInitialState,
    id: resource.id
  }))
}
