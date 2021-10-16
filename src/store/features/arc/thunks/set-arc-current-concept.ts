import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import { ArcSliceState, ARC_SLICE_REDUCER_KEYS } from '../types'

type Payload = {
  conceptId: string
  fatherConceptId: string
  grandfatherConceptId: string
  isMainConcept: boolean
}

export const setArcCurrentConcept: ActionCreatorPayload<Payload> = createAction(
  ARC_SLICE_REDUCER_KEYS.SET_ARC_CURRENT_CONCEPT
)

export const setArcCurrentConceptReducer: ReducerFunction<
  ArcSliceState,
  Payload
> = (state, action) => {
  state.conceptId = action.payload.conceptId
  state.fatherConceptId = action.payload.fatherConceptId
  state.grandfatherConceptId = action.payload.grandfatherConceptId
  state.isMainConcept = action.payload.isMainConcept
}
