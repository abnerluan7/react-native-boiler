import { createAction } from '@reduxjs/toolkit'

import {
  CONCEPT_REDUCER_KEYS,
  ConceptSliceStateTypes
} from '@/store/features/concept'
import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import { ConceptModel } from '@/app/domain/models'

export const setConceptData: ActionCreatorPayload<ConceptModel> = createAction(
  CONCEPT_REDUCER_KEYS.SET_CONCEPT_DATA
)

export const setConceptDataReducer: ReducerFunction<
  ConceptSliceStateTypes,
  ConceptModel
> = (state, action) => {
  state.concept.data = action.payload
  state.draft = action.payload
}
