import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'

import {
  setOngoingResearchStep,
  addResearchStageReducer,
  setCurrentResearchStage,
  deleteResearchStage,
  setOngoingResearchDataReducer,
  addOngoingResearchReducer,
  setOngoingResearchBasicInfoReducer,
  resetOngoingResearchStateReducer
} from '../actions'
import { updateResearchStage } from '../actions/update-research-stage'
import {
  OngoingResearchSliceStateTypes,
  OngoingResearchSliceName,
  ONGOING_RESEARCH_INITIAL_STATE,
  RESET_ONGOING_RESEARCH_STATE,
  SET_ONGOING_RESEARCH_STEP,
  ADD_RESEARCH_STAGE,
  SET_CURRENT_RESEARCH_STAGE,
  UPDATE_RESEARCH_STAGE,
  DELETE_RESEARCH_STAGE,
  SET_ONGOING_RESEARCH_DATA,
  ADD_ONGOING_RESEARCH,
  SET_ONGOING_RESEARCH_BASIC_INFO
} from '../types'

export const ongoingResearchSlice = createSlice<
  OngoingResearchSliceStateTypes,
  SliceCaseReducers<OngoingResearchSliceStateTypes>
>({
  name: OngoingResearchSliceName,
  initialState: { ...ONGOING_RESEARCH_INITIAL_STATE },
  reducers: {
    [ADD_ONGOING_RESEARCH]: addOngoingResearchReducer,
    [RESET_ONGOING_RESEARCH_STATE]: resetOngoingResearchStateReducer,
    [SET_ONGOING_RESEARCH_STEP]: setOngoingResearchStep.reducer,
    [ADD_RESEARCH_STAGE]: addResearchStageReducer,
    [SET_CURRENT_RESEARCH_STAGE]: setCurrentResearchStage.reducer,
    [UPDATE_RESEARCH_STAGE]: updateResearchStage.reducer,
    [DELETE_RESEARCH_STAGE]: deleteResearchStage.reducer,
    [SET_ONGOING_RESEARCH_DATA]: setOngoingResearchDataReducer,
    [SET_ONGOING_RESEARCH_BASIC_INFO]: setOngoingResearchBasicInfoReducer
  }
})
