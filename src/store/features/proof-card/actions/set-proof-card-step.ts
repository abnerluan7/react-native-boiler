import { createAction } from '@reduxjs/toolkit'

import {
  ProofCardReducerKeys,
  ProofCardSliceStateTypes,
  ProofCardStepTypes
} from '@/store/features/proof-card/types'
import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

export const setProofCardStep: ActionCreatorPayload<{
  step: ProofCardStepTypes
  prev?: ProofCardStepTypes
}> = createAction(ProofCardReducerKeys.SET_PROOF_CARD_STEP)

export const setProofCardStepReducer: ReducerFunction<
  ProofCardSliceStateTypes,
  {
    step: ProofCardStepTypes
    prev?: ProofCardStepTypes
  }
> = (state, action) => {
  state.step.prev = action.payload.prev ?? state.step.current
  state.step.current = action.payload.step
}
