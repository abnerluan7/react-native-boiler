import { OpenQuestionModel } from '@/app/domain/models'

import { OpenQuestionSliceStateTypes } from './open-question-types'

export const OpenQuestionSliceName = '@openQuestion'

export const SET_OPEN_QUESTION_STEP = 'setOpenQuestionStep'
export const SET_OPEN_QUESTION_TEXT_FRAGMENT = 'setOpenQuestionTextFragment'
export const RESET_OPEN_QUESTION_STATE = 'resetOpenQuestionState'
export const SET_OPEN_QUESTION_FORM = 'setOpenQuestionForm'
export const ADD_ONGOING_RESEARCH_TO_OPEN_QUESTION =
  'addOngoingResearchToOpenQuestion'
export const REMOVE_ONGOING_RESEARCH_FROM_OPEN_QUESTION =
  'removeOngoingResearchFromOpenQuestion'
export const DELETE_ONGOING_RESEARCH_FROM_OPEN_QUESTION =
  'deleteOngoingResearchFromOpenQuestion'
export const SET_OPEN_QUESTION_DATA = 'setOpenQuestionData'
export const UPDATE_ONGOING_RESEARCH_IN_OPEN_QUESTION =
  'updateOngoingResearchInOpenQuestion'

export const OpenQuestionReducerKeys = {
  ADD_OPEN_QUESTION: `${OpenQuestionSliceName}/addOpenQuestion`,
  LOAD_OPEN_QUESTION: `${OpenQuestionSliceName}/loadOpenQuestion`,
  UPDATE_OPEN_QUESTION: `${OpenQuestionSliceName}/updateOpenQuestion`,
  REMOVE_ONGOING_RESEARCH_FROM_OPEN_QUESTION: `${OpenQuestionSliceName}/removeOngoingResearchFromOpenQuestion`,
  DELETE_ONGOING_RESEARCH_FROM_OPEN_QUESTION: `${OpenQuestionSliceName}/deleteOngoingResearchFromOpenQuestion`,
  SET_OPEN_QUESTION_DATA: `${OpenQuestionSliceName}/${SET_OPEN_QUESTION_DATA}`,
  UPDATE_ONGOING_RESEARCH_IN_OPEN_QUESTION: `${OpenQuestionSliceName}/${UPDATE_ONGOING_RESEARCH_IN_OPEN_QUESTION}`
}

export const openQuestionInitialValue: OpenQuestionModel = {
  conceptId: '',
  difficultyLevel: 1,
  howToTackle: '',
  hypothesisId: '',
  id: '',
  importanceLevel: 1,
  isFundingAvailable: false,
  question: '',
  textFragment: '',
  whyIsImportant: '',
  ongoingResearches: [],
  userVote: {
    difficulty: {
      score: 0,
      totalVotes: 0,
      userVote: 0,
      userVoteId: '',
      date: null
    },
    significance: {
      score: 0,
      totalVotes: 0,
      userVote: 0,
      userVoteId: '',
      date: null
    }
  }
}

export const openQuestionInitialState: OpenQuestionSliceStateTypes = {
  draft: {
    ...openQuestionInitialValue
  },
  original: {
    ...openQuestionInitialValue
  },
  step: {
    current: 'basic',
    prev: null
  }
}
