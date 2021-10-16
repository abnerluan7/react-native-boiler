import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'

import {
  setOpenQuestionStepReducer,
  addOngoingResearchToOpenQuestionReducer,
  setOpenQuestionFormReducer,
  resetOpenQuestionStateReducer,
  setOpenQuestionTextFragmentReducer,
  removeOngoingResearchFromOpenQuestionReducer,
  setOpenQuestionDataReducer,
  updateOngoingResearchInOpenQuestionReducer
} from '../actions'
import {
  ADD_ONGOING_RESEARCH_TO_OPEN_QUESTION,
  openQuestionInitialState,
  OpenQuestionSliceName,
  OpenQuestionSliceStateTypes,
  REMOVE_ONGOING_RESEARCH_FROM_OPEN_QUESTION,
  RESET_OPEN_QUESTION_STATE,
  SET_OPEN_QUESTION_DATA,
  SET_OPEN_QUESTION_FORM,
  SET_OPEN_QUESTION_STEP,
  SET_OPEN_QUESTION_TEXT_FRAGMENT,
  UPDATE_ONGOING_RESEARCH_IN_OPEN_QUESTION
} from '../types'

export const openQuestionSlice = createSlice<
  OpenQuestionSliceStateTypes,
  SliceCaseReducers<OpenQuestionSliceStateTypes>
>({
  name: OpenQuestionSliceName,
  initialState: { ...openQuestionInitialState },
  reducers: {
    [SET_OPEN_QUESTION_TEXT_FRAGMENT]: setOpenQuestionTextFragmentReducer,
    [RESET_OPEN_QUESTION_STATE]: resetOpenQuestionStateReducer,
    [SET_OPEN_QUESTION_STEP]: setOpenQuestionStepReducer,
    [SET_OPEN_QUESTION_FORM]: setOpenQuestionFormReducer,
    [ADD_ONGOING_RESEARCH_TO_OPEN_QUESTION]:
      addOngoingResearchToOpenQuestionReducer,
    [REMOVE_ONGOING_RESEARCH_FROM_OPEN_QUESTION]:
      removeOngoingResearchFromOpenQuestionReducer,
    [SET_OPEN_QUESTION_DATA]: setOpenQuestionDataReducer,
    [UPDATE_ONGOING_RESEARCH_IN_OPEN_QUESTION]:
      updateOngoingResearchInOpenQuestionReducer
  }
})
