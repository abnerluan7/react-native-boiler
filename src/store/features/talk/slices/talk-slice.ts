import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'

import {
  initializeTopicFormReducer,
  resetTalkStateReducer,
  setCurrentTopicReducer,
  setTopicFormReducer,
  setTopicStepReducer
} from '../actions'
import {
  TALK_INITIAL_STATE,
  TALK_SLICE_NAME,
  SET_TOPIC_FORM,
  SET_TOPIC_STEP,
  TalkSliceState,
  RESET_TALK_STATE,
  INITIALIZE_TOPIC_FORM,
  SET_CURRENT_TOPIC
} from '../types'

export const TalkSlice = createSlice<
  TalkSliceState,
  SliceCaseReducers<TalkSliceState>
>({
  name: TALK_SLICE_NAME,
  initialState: { ...TALK_INITIAL_STATE },
  reducers: {
    [RESET_TALK_STATE]: resetTalkStateReducer,
    [SET_TOPIC_STEP]: setTopicStepReducer,
    [SET_TOPIC_FORM]: setTopicFormReducer,
    [SET_TOPIC_FORM]: setTopicFormReducer,
    [SET_CURRENT_TOPIC]: setCurrentTopicReducer,
    [INITIALIZE_TOPIC_FORM]: initializeTopicFormReducer
  }
})
