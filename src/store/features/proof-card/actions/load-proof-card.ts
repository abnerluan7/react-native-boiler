import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit'

import { getDependency } from '@/ioc/helpers'
import { ServicesTypes } from '@/ioc/types'

import {
  ProofCardReducerKeys,
  ProofCardSliceStateTypes,
  resourceControlInitialState
} from '@/store/features/proof-card/types'
import { QueryStatusList } from '@/store/types/common'

import { LoadProofCard } from '@/app/domain/services'

const loadProofCardService = getDependency<LoadProofCard>(
  ServicesTypes.PROOF_CARD.LOAD_PROOF_CARD
)

export const loadProofCard = createAsyncThunk(
  ProofCardReducerKeys.LOAD_PROOF_CARD,
  async (id: string, { rejectWithValue }) => {
    const responseOrError = await loadProofCardService.load(id)

    if (responseOrError.isSuccess()) {
      return responseOrError.value
    }
    return rejectWithValue(responseOrError.value)
  }
)

export const loadProofCardReducer = (
  builder: ActionReducerMapBuilder<ProofCardSliceStateTypes>
) => {
  builder
    .addCase(loadProofCard.pending, (state) => {
      state.original.error = ''
      if (!state.original.preventLoading) {
        state.original.status = QueryStatusList.LOADING
      }
    })
    .addCase(loadProofCard.fulfilled, (state, { payload }) => {
      state.original.status = QueryStatusList.SUCCESS
      state.original.preventLoading = false
      state.original.data = payload
      state.draft.proofCard = payload
      state.draft.resourceControl = payload.resources.map((resource) => ({
        ...resourceControlInitialState,
        id: resource.id
      }))
      const hasCurrent = state.draft.resourceControl.some(
        (resourceControl) => resourceControl.isCurrent
      )
      if (state.draft.resourceControl.length > 0 && !hasCurrent) {
        state.draft.resourceControl[0].isCurrent = true
      }
    })
    .addCase(loadProofCard.rejected, (state, { error }) => {
      state.original.error = error.message as string
      state.original.status = QueryStatusList.ERROR
    })
}
