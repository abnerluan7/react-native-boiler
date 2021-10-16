import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'

import {
  ADD_PROOF_CARD_RESOURCE,
  ADD_PROOF_CARD_RESOURCE_HINT,
  ADD_PROOF_CARD_RESOURCE_SNIPPET,
  DELETE_PROOF_CARD_RESOURCE,
  proofCardInitialState,
  ProofCardSliceName,
  ProofCardSliceStateTypes,
  REMOVE_PROOF_CARD_RESOURCE_HINT,
  RESET_PROOF_CARD_STATE,
  SET_PROOF_CARD_ACTION,
  SET_PROOF_CARD_RESOURCE,
  SET_PROOF_CARD_RESOURCE_CONTROL,
  SET_PROOF_CARD_TEXT_FRAGMENT,
  SET_PROOF_CARD_STEP,
  UPDATE_CURRENT_PROOF_CARD_ID,
  SET_PROOF_CARD_RESOURCE_TYPE,
  SET_PROOF_CARD_CONCEPT_ID,
  SET_PROOF_CARD_DRAFT
} from '@/store/features/proof-card/types'

import {
  addProofCardResourceHintReducer,
  addProofCardResourceReducer,
  addProofCardResourceSnippetReducer,
  deleteProofCardResource,
  loadProofCardReducer,
  removeProofCardResourceHintReducer,
  resetProofCardState,
  setProofCardActionReducer,
  setProofCardResourceControlReducer,
  setProofCardResourceReducer,
  setProofCardStepReducer,
  setProofCardTextFragmentReducer,
  updateCurrentProofCardId,
  setProofCardResourceTypeReducer,
  setProofCardConceptIdReducer,
  setProofCardDraftReducer
} from '../actions'

export const proofCardSlice = createSlice<
  ProofCardSliceStateTypes,
  SliceCaseReducers<ProofCardSliceStateTypes>
>({
  name: ProofCardSliceName,
  initialState: { ...proofCardInitialState },
  reducers: {
    [SET_PROOF_CARD_TEXT_FRAGMENT]: setProofCardTextFragmentReducer,
    [SET_PROOF_CARD_STEP]: setProofCardStepReducer,
    [SET_PROOF_CARD_RESOURCE_TYPE]: setProofCardResourceTypeReducer,
    [SET_PROOF_CARD_RESOURCE]: setProofCardResourceReducer,
    [ADD_PROOF_CARD_RESOURCE]: addProofCardResourceReducer,
    [DELETE_PROOF_CARD_RESOURCE]: deleteProofCardResource.reducer,
    [ADD_PROOF_CARD_RESOURCE_SNIPPET]: addProofCardResourceSnippetReducer,
    [SET_PROOF_CARD_ACTION]: setProofCardActionReducer,
    [RESET_PROOF_CARD_STATE]: resetProofCardState.reducer,
    [SET_PROOF_CARD_RESOURCE_CONTROL]: setProofCardResourceControlReducer,
    [UPDATE_CURRENT_PROOF_CARD_ID]: updateCurrentProofCardId.reducer,
    [ADD_PROOF_CARD_RESOURCE_HINT]: addProofCardResourceHintReducer,
    [REMOVE_PROOF_CARD_RESOURCE_HINT]: removeProofCardResourceHintReducer,
    [SET_PROOF_CARD_DRAFT]: setProofCardDraftReducer,
    [SET_PROOF_CARD_CONCEPT_ID]: setProofCardConceptIdReducer
  },
  extraReducers: (builder) => {
    loadProofCardReducer(builder)
  }
})
