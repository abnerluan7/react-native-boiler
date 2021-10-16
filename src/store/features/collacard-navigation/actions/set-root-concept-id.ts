import { createAction } from '@reduxjs/toolkit'

import { ActionCreatorPayload, ReducerFunction } from '@/store/types/common'

import {
  CollacardNavigationState,
  COLLACARD_NAVIGATION_REDUCER_KEYS
} from '../types'

type Payload = {
  conceptId: string
}

export const setRootConceptId: ActionCreatorPayload<Payload> = createAction(
  COLLACARD_NAVIGATION_REDUCER_KEYS.SET_ROOT_CONCEPT_ID
)

export const setRootConceptIdReducer: ReducerFunction<
  CollacardNavigationState,
  Payload
> = (state, action) => {
  state.rootConceptId = action.payload.conceptId
}
