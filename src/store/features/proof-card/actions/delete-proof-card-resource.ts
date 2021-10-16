import { createAction } from '@reduxjs/toolkit'

import {
  ProofCardSliceName,
  ProofCardSliceStateTypes,
  DELETE_PROOF_CARD_RESOURCE
} from '@/store/features/proof-card/types'
import { ActionReducerFunction } from '@/store/types/common'

export const deleteProofCardResource: ActionReducerFunction<
  { id: string },
  ProofCardSliceStateTypes
> = {
  action: createAction(`${ProofCardSliceName}/${DELETE_PROOF_CARD_RESOURCE}`),
  reducer: (state, action) => {
    const resourceIndex = state.draft.proofCard.resources.findIndex(
      (resource) => resource.id === action.payload.id
    )

    state.draft.proofCard.resources.splice(resourceIndex, 1)
    state.draft.resourceControl.splice(resourceIndex, 1)

    if (state.draft.proofCard.resources.length >= 1) {
      state.draft.resourceControl[0].isCurrent = true
    }
  }
}
