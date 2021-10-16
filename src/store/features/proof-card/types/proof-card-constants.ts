import { v4 } from 'uuid'

import { makeQueryManagementData } from '@/store/helpers'

import { ProofCardResourceModel } from '@/app/domain/models'

import {
  ProofCardResourceControlType,
  ProofCardSliceStateTypes
} from './proof-card-types'

export const ProofCardSliceName = '@proofCard'

export const SET_PROOF_CARD_TEXT_FRAGMENT = `setProofCardTextFragment`
export const SET_PROOF_CARD_STEP = `setProofCardStep`
export const ADD_PROOF_CARD_RESOURCE_SNIPPET = `addProofCardResourceSnippet`
export const SET_PROOF_CARD_RESOURCE = `setProofCardResource`
export const SET_PROOF_CARD_RESOURCE_TYPE = `setProofCardResourceType`
export const SET_PROOF_CARD_RESOURCE_CONTROL = 'setProofCardResourceControl'
export const ADD_PROOF_CARD_RESOURCE = `addProofCardResource`
export const DELETE_PROOF_CARD_RESOURCE = `deleteProofCardResource`
export const SET_PROOF_CARD_ACTION = `setProofCardAction`
export const RESET_PROOF_CARD_STATE = `resetProofCardState`
export const UPDATE_CURRENT_PROOF_CARD_ID = `updateCurrentProofCardId`
export const LOAD_PROOF_CARD = 'loadProofCard'
export const ADD_PROOF_CARD_RESOURCE_HINT = 'addProofCardResourceHint'
export const REMOVE_PROOF_CARD_RESOURCE_HINT = 'removeProofCardResourceHint'
export const SET_PROOF_CARD_DRAFT = 'setProofCardDraft'
export const SET_PROOF_CARD_CONCEPT_ID = 'setProofCardConceptId'

export const ProofCardReducerKeys = {
  SET_PROOF_CARD_RESOURCE_CONTROL: `${ProofCardSliceName}/${SET_PROOF_CARD_RESOURCE_CONTROL}`,
  LOAD_PROOF_CARD: `${ProofCardSliceName}/${LOAD_PROOF_CARD}`,
  SET_PROOF_CARD_ACTION: `${ProofCardSliceName}/${SET_PROOF_CARD_ACTION}`,
  ADD_PROOF_CARD_RESOURCE_HINT: `${ProofCardSliceName}/${ADD_PROOF_CARD_RESOURCE_HINT}`,
  ADD_PROOF_CARD_RESOURCE_SNIPPET: `${ProofCardSliceName}/${ADD_PROOF_CARD_RESOURCE_SNIPPET}`,
  REMOVE_PROOF_CARD_RESOURCE_HINT: `${ProofCardSliceName}/${REMOVE_PROOF_CARD_RESOURCE_HINT}`,
  SET_PROOF_CARD_RESOURCE: `${ProofCardSliceName}/${SET_PROOF_CARD_RESOURCE}`,
  SET_PROOF_CARD_RESOURCE_TYPE: `${ProofCardSliceName}/${SET_PROOF_CARD_RESOURCE_TYPE}`,
  SET_PROOF_CARD_STEP: `${ProofCardSliceName}/${SET_PROOF_CARD_STEP}`,
  ADD_PROOF_CARD_RESOURCE: `${ProofCardSliceName}/${ADD_PROOF_CARD_RESOURCE}`,
  SET_PROOF_CARD_TEXT_FRAGMENT: `${ProofCardSliceName}/${SET_PROOF_CARD_TEXT_FRAGMENT}`,
  SET_PROOF_CARD_DRAFT: `${ProofCardSliceName}/${SET_PROOF_CARD_DRAFT}`,
  SET_PROOF_CARD_CONCEPT_ID: `${ProofCardSliceName}/${SET_PROOF_CARD_CONCEPT_ID}`
}

export const proofCardInitialState: ProofCardSliceStateTypes = {
  draft: {
    proofCard: {
      conceptId: '',
      hypothesisId: '',
      id: '',
      resources: [],
      textFragment: ''
    },
    resourceControl: []
  },
  original: {
    ...makeQueryManagementData()
  },
  action: null,
  step: {
    current: null,
    prev: null
  },
  conceptId: '',
  resourceType: null,
  currentResource: ''
}

export const resourceInitialState: ProofCardResourceModel = {
  id: v4(),
  snippet: {
    text: [],
    hints: []
  },
  type: null,
  abstract: '',
  authors: '',
  documentDate: '',
  file: '',
  isPublished: false,
  mimeType: ''
}

export const resourceControlInitialState: ProofCardResourceControlType = {
  id: '',
  isCurrent: false,
  paperMaxPages: 0
}
