import { PossibilityModel } from '@/app/domain/models'

import { DebateSliceState } from './debate-types'

export const DEBATE_SLICE_NAME = '@Debate'

export const RESET_DEBATE_STATE = 'resetDebateState'
export const SET_DEBATE_TEXT_FRAGMENT = 'setDebateTextFragment'
export const SET_DEBATE_STEP = 'setDebateStep'
export const SET_DEBATE_BASIC_INFORMATION_FORM = 'setDebateBasicInformationForm'
export const SET_DEBATE_POSSIBILITIES = 'setDebatePossibilities'
export const SET_DEBATE_DATA = 'setDebateData'
export const SET_PREVIEW_RESOURCE_BREADCRUMB = 'setPreviewResourceBreadcrumb'

export const DEBATE_REDUCER_KEYS = {
  RESET_DEBATE_STATE: `${DEBATE_SLICE_NAME}/${RESET_DEBATE_STATE}`,
  SET_DEBATE_DATA: `${DEBATE_SLICE_NAME}/${SET_DEBATE_DATA}`,
  SET_DEBATE_TEXT_FRAGMENT: `${DEBATE_SLICE_NAME}/${SET_DEBATE_TEXT_FRAGMENT}`,
  SET_DEBATE_STEP: `${DEBATE_SLICE_NAME}/${SET_DEBATE_STEP}`,
  SET_DEBATE_BASIC_INFORMATION_FORM: `${DEBATE_SLICE_NAME}/${SET_DEBATE_BASIC_INFORMATION_FORM}`,
  SET_DEBATE_POSSIBILITIES: `${DEBATE_SLICE_NAME}/${SET_DEBATE_POSSIBILITIES}`,
  SET_PREVIEW_RESOURCE_BREADCRUMB: `${DEBATE_SLICE_NAME}/${SET_PREVIEW_RESOURCE_BREADCRUMB}`
}

export const INITIAL_POSSIBILITY_VALUE: PossibilityModel = {
  possibility: '',
  arguments: [
    {
      argument: '',
      counterArguments: []
    }
  ]
}

export const DEBATE_INITIAL_STATE: DebateSliceState = {
  draft: {
    id: '',
    conceptId: '',
    hypothesisId: '',
    textFragment: '',
    title: '',
    reason: '',
    possibilities: [
      { ...INITIAL_POSSIBILITY_VALUE },
      { ...INITIAL_POSSIBILITY_VALUE }
    ]
  },
  breadcrumb: {
    inputName: '',
    text: ''
  },
  step: {
    current: 'basic',
    prev: null
  }
}
