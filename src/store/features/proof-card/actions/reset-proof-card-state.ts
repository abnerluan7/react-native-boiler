import { createAction } from '@reduxjs/toolkit'

import {
  proofCardInitialState,
  ProofCardSliceName,
  ProofCardSliceStateTypes,
  RESET_PROOF_CARD_STATE
} from '@/store/features/proof-card/types'
import { ActionReducerFunction } from '@/store/types/common'

export const resetProofCardState: ActionReducerFunction<
  void,
  ProofCardSliceStateTypes
> = {
  action: createAction(`${ProofCardSliceName}/${RESET_PROOF_CARD_STATE}`),
  reducer: (state) => {
    state = { ...proofCardInitialState }
    return state
  }
}
