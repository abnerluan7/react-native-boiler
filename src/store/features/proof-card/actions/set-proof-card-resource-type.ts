import { createAction } from '@reduxjs/toolkit'

import {
  ProofCardReducerKeys,
  ProofCardSliceStateTypes,
  ProofCardType
} from '@/store/features/proof-card/types'
import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

export const setProofCardResourceType: ActionCreatorPayload<{
  resourceType: ProofCardType['resourceType']
}> = createAction(ProofCardReducerKeys.SET_PROOF_CARD_RESOURCE_TYPE)

export const setProofCardResourceTypeReducer: ReducerFunction<
  ProofCardSliceStateTypes,
  { resourceType: ProofCardType['resourceType'] }
> = (state, action) => {
  state.resourceType = action.payload.resourceType
}
