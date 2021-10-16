import { OngoingResearchModel } from '@/app/domain/models'

import { OngoingResearchSliceStateTypes } from './ongoing-research-types'

export const OngoingResearchSliceName = '@ongoingResearch'

export const ADD_ONGOING_RESEARCH = 'addOngoingResearch'
export const ADD_RESEARCH_STAGE = 'addResearchStage'
export const SET_ONGOING_RESEARCH_STEP = 'setOngoingResearchStep'
export const RESET_ONGOING_RESEARCH_STATE = 'resetOngoingResearchState'
export const DELETE_RESEARCH_STAGE = 'deleteResearchStage'
export const SET_CURRENT_RESEARCH_STAGE = 'setCurrentResearchStage'
export const UPDATE_RESEARCH_STAGE = 'updateResearchStage'
export const SET_ONGOING_RESEARCH_DATA = 'setOngoingResearchData'
export const SET_ONGOING_RESEARCH_BASIC_INFO = 'setOngoingResearchBasicInfo'

export const ONGOING_RESEARCH_REDUCER_KEYS = {
  SET_ONGOING_RESEARCH_DATA: `${OngoingResearchSliceName}/${SET_ONGOING_RESEARCH_DATA}`,
  ADD_ONGOING_RESEARCH: `${OngoingResearchSliceName}/${ADD_ONGOING_RESEARCH}`,
  ADD_RESEARCH_STAGE: `${OngoingResearchSliceName}/${ADD_RESEARCH_STAGE}`,
  SET_ONGOING_RESEARCH_BASIC_INFO: `${OngoingResearchSliceName}/${SET_ONGOING_RESEARCH_BASIC_INFO}`
}

const ONGOING_RESEARCH_MODEL: OngoingResearchModel = {
  id: '',
  name: '',
  stages: [],
  openQuestions: [],
  whatIsResearchTryingToProve: '',
  whyIsImportant: ''
}

export const ONGOING_RESEARCH_INITIAL_STATE: OngoingResearchSliceStateTypes = {
  original: { ...ONGOING_RESEARCH_MODEL },
  draft: { ...ONGOING_RESEARCH_MODEL },
  conceptId: '',
  openQuestionId: '',
  hypothesisId: '',
  fragment: '',
  step: {
    current: 'basic',
    prev: null
  }
}
