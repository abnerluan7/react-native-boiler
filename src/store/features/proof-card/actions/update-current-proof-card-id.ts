import { createAction } from '@reduxjs/toolkit'

import {
  ProofCardResourceControlType,
  ProofCardSliceName,
  ProofCardSliceStateTypes,
  UPDATE_CURRENT_PROOF_CARD_ID
} from '@/store/features/proof-card/types'
import { ActionReducerFunction } from '@/store/types/common'

export const updateCurrentProofCardId: ActionReducerFunction<
  string,
  ProofCardSliceStateTypes
> = {
  action: createAction(`${ProofCardSliceName}/${UPDATE_CURRENT_PROOF_CARD_ID}`),
  reducer: (state, action) => {
    const resourceIndex = state.draft.resourceControl.findIndex(
      (resource: ProofCardResourceControlType) => !!resource.isCurrent
    )
    if (resourceIndex !== -1) {
      state.draft.proofCard.resources[resourceIndex].id = action.payload
      state.draft.resourceControl[resourceIndex].id = action.payload
    }
  }
}
