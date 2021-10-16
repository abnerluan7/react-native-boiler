import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'

import { setArcCurrentConceptReducer } from '../thunks'
import {
  ArcSliceState,
  ARC_SLICE_INITIAL_STATE,
  ARC_SLICE_NAME,
  SET_ARC_CURRENT_CONCEPT
} from '../types'

export const arcSlice = createSlice<
  ArcSliceState,
  SliceCaseReducers<ArcSliceState>
>({
  name: ARC_SLICE_NAME,
  initialState: { ...ARC_SLICE_INITIAL_STATE },
  reducers: {
    [SET_ARC_CURRENT_CONCEPT]: setArcCurrentConceptReducer
  }
})
