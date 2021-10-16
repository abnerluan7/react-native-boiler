import { createAction } from '@reduxjs/toolkit'

import {
  ProofCardReducerKeys,
  ProofCardResourceControlType,
  ProofCardSliceStateTypes
} from '@/store/features/proof-card/types'
import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

type SetProofCardResourceControlType = Required<
  Pick<ProofCardResourceControlType, 'id'>
> &
  Partial<Omit<ProofCardResourceControlType, 'id'>>

export const setProofCardResourceControl: ActionCreatorPayload<SetProofCardResourceControlType> =
  createAction(ProofCardReducerKeys.SET_PROOF_CARD_RESOURCE_CONTROL)

export const setProofCardResourceControlReducer: ReducerFunction<
  ProofCardSliceStateTypes,
  SetProofCardResourceControlType
> = (state, action) => {
  const index = state.draft.resourceControl.findIndex(
    (resource) => resource.id === action.payload.id
  )
  state.draft.resourceControl.map((resource) => (resource.isCurrent = false))

  state.draft.resourceControl[index] = {
    ...state.draft.resourceControl[index],
    isCurrent: true,
    ...action.payload
  }
}
