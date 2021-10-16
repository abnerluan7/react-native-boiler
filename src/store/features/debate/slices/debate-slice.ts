import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'

import {
  resetDebateStateReducer,
  setDebateBasicInformationFormReducer,
  setDebatePossibilitiesReducer,
  setDebateStepReducer,
  setDebateTextFragmentReducer,
  setPreviewResourceBreadcrumbReducer
} from '../actions'
import { setDebateDataReducer } from '../actions/set-debate-data'
import {
  DebateSliceState,
  DEBATE_INITIAL_STATE,
  DEBATE_SLICE_NAME,
  RESET_DEBATE_STATE,
  SET_DEBATE_BASIC_INFORMATION_FORM,
  SET_DEBATE_DATA,
  SET_DEBATE_POSSIBILITIES,
  SET_DEBATE_STEP,
  SET_DEBATE_TEXT_FRAGMENT,
  SET_PREVIEW_RESOURCE_BREADCRUMB
} from '../types'

export const DebateSlice = createSlice<
  DebateSliceState,
  SliceCaseReducers<DebateSliceState>
>({
  name: DEBATE_SLICE_NAME,
  initialState: { ...DEBATE_INITIAL_STATE },
  reducers: {
    [RESET_DEBATE_STATE]: resetDebateStateReducer,
    [SET_DEBATE_TEXT_FRAGMENT]: setDebateTextFragmentReducer,
    [SET_DEBATE_STEP]: setDebateStepReducer,
    [SET_DEBATE_BASIC_INFORMATION_FORM]: setDebateBasicInformationFormReducer,
    [SET_DEBATE_POSSIBILITIES]: setDebatePossibilitiesReducer,
    [SET_DEBATE_DATA]: setDebateDataReducer,
    [SET_PREVIEW_RESOURCE_BREADCRUMB]: setPreviewResourceBreadcrumbReducer
  }
})
