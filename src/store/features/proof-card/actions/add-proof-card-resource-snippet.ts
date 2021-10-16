import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import { TextEditorContent } from '@/app/domain/common/protocols/text-editor'

import { ProofCardReducerKeys, ProofCardSliceStateTypes } from '../types'

type AddHintType = {
  id: string
  text: TextEditorContent[]
}

export const addProofCardResourceSnippet: ActionCreatorPayload<AddHintType> =
  createAction(ProofCardReducerKeys.ADD_PROOF_CARD_RESOURCE_SNIPPET)

export const addProofCardResourceSnippetReducer: ReducerFunction<
  ProofCardSliceStateTypes,
  AddHintType
> = (state, action) => {
  const index = state.draft.proofCard.resources.findIndex(
    (resource) => resource.id === action.payload.id
  )

  state.draft.proofCard.resources[index].snippet.text = action.payload.text
}
