import { createAction } from '@reduxjs/toolkit'

import {
  ProofCardReducerKeys,
  ProofCardSliceStateTypes
} from '@/store/features/proof-card/types'
import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

type ActionTypes = { action: 'add' | 'edit' }

export const setProofCardAction: ActionCreatorPayload<ActionTypes> =
  createAction(ProofCardReducerKeys.SET_PROOF_CARD_ACTION)

export const setProofCardActionReducer: ReducerFunction<
  ProofCardSliceStateTypes,
  ActionTypes
> = (state, action) => {
  state.action = action.payload.action
}
