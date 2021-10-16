import { createAction } from '@reduxjs/toolkit'

import {
  ProofCardReducerKeys,
  ProofCardResourceControlType,
  ProofCardSliceStateTypes
} from '@/store/features/proof-card/types'
import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import { ProofCardResourceModel } from '@/app/domain/models'

type SetProofCardResourceParams = {
  control: ProofCardResourceControlType
  resource: ProofCardResourceModel
}

export const setProofCardResource: ActionCreatorPayload<SetProofCardResourceParams> =
  createAction(ProofCardReducerKeys.SET_PROOF_CARD_RESOURCE)

export const setProofCardResourceReducer: ReducerFunction<
  ProofCardSliceStateTypes,
  SetProofCardResourceParams
> = (state, action) => {
  const resourceIndex = state.draft.resourceControl.findIndex(
    (resource: ProofCardResourceControlType) =>
      resource.id === action.payload.control.id
  )
  if (resourceIndex !== -1) {
    state.draft.resourceControl.map((resource) => (resource.isCurrent = false))
    state.draft.proofCard.resources[resourceIndex] = action.payload.resource
    state.draft.resourceControl[resourceIndex] = action.payload.control
    state.draft.resourceControl[resourceIndex].isCurrent = true
  }
}
