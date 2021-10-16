import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'

import {
  clearNavigationStackReducer,
  popNavigationStackReducer,
  setCollacardNavigationReducer,
  setPreventRefetchStatusReducer,
  setRootConceptIdReducer
} from '../actions'
import { CollacardNavigationState } from '../types'
import {
  CLEAR_NAVIGATION_STACK,
  COLLACARD_NAVIGATION_INITIAL_STATE,
  COLLACARD_NAVIGATION_SLICE_NAME,
  POP_NAVIGATION_STACK,
  SET_COLLACARD_NAVIGATION,
  SET_PREVENT_REFETCH_STATUS,
  SET_ROOT_CONCEPT_ID
} from '../types/collacard-navigation-constants'

export const CollacardNavigationSlice = createSlice<
  CollacardNavigationState,
  SliceCaseReducers<CollacardNavigationState>
>({
  name: COLLACARD_NAVIGATION_SLICE_NAME,
  initialState: { ...COLLACARD_NAVIGATION_INITIAL_STATE },
  reducers: {
    [SET_COLLACARD_NAVIGATION]: setCollacardNavigationReducer,
    [POP_NAVIGATION_STACK]: popNavigationStackReducer,
    [SET_PREVENT_REFETCH_STATUS]: setPreventRefetchStatusReducer,
    [CLEAR_NAVIGATION_STACK]: clearNavigationStackReducer,
    [SET_ROOT_CONCEPT_ID]: setRootConceptIdReducer
  }
})
