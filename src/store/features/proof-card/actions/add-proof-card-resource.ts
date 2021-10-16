import { createAction } from '@reduxjs/toolkit'

import {
  ProofCardSliceStateTypes,
  resourceControlInitialState,
  resourceInitialState,
  ProofCardReducerKeys
} from '@/store/features/proof-card/types'
import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import { ProofCardResourceModel } from '@/app/domain/models'

export const addProofCardResource: ActionCreatorPayload<{
  resource: ProofCardResourceModel
}> = createAction(ProofCardReducerKeys.ADD_PROOF_CARD_RESOURCE)

export const addProofCardResourceReducer: ReducerFunction<
  ProofCardSliceStateTypes,
  { resource: ProofCardResourceModel }
> = (state, action) => {
  const index = state.draft.proofCard.resources.findIndex(
    (resource) => resource.id === action.payload.resource.id
  )

  state.draft.resourceControl = state.draft.resourceControl.map((resource) => ({
    ...resource,
    isCurrent: false
  }))

  if (index === -1) {
    state.draft.proofCard.resources.push({
      ...resourceInitialState,
      ...action.payload.resource
    })

    state.draft.resourceControl.push({
      ...resourceControlInitialState,
      isCurrent: true,
      id: action.payload.resource.id
    })
  }

  if (index >= 0) {
    state.draft.resourceControl[index].isCurrent = true
    state.draft.proofCard.resources[index] = {
      ...action.payload.resource,
      snippet: state.draft.proofCard.resources[index].snippet
    }
  }
}
