import { CollacardNavigationState } from './collacard-navigation-types'

export const COLLACARD_NAVIGATION_SLICE_NAME = '@CollacardNavigation'

export const SET_COLLACARD_NAVIGATION = 'setCollacardNavigation'
export const POP_NAVIGATION_STACK = 'popNavigationStack'
export const SET_PREVENT_REFETCH_STATUS = 'setPreventRefetchStatus'
export const CLEAR_NAVIGATION_STACK = 'clearNavigationStack'
export const SET_ROOT_CONCEPT_ID = 'setRootConceptId'

export const COLLACARD_NAVIGATION_REDUCER_KEYS = {
  SET_COLLACARD_NAVIGATION: `${COLLACARD_NAVIGATION_SLICE_NAME}/${SET_COLLACARD_NAVIGATION}`,
  POP_NAVIGATION_STACK: `${COLLACARD_NAVIGATION_SLICE_NAME}/${POP_NAVIGATION_STACK}`,
  SET_PREVENT_REFETCH_STATUS: `${COLLACARD_NAVIGATION_SLICE_NAME}/${SET_PREVENT_REFETCH_STATUS}`,
  CLEAR_NAVIGATION_STACK: `${COLLACARD_NAVIGATION_SLICE_NAME}/${CLEAR_NAVIGATION_STACK}`,
  SET_ROOT_CONCEPT_ID: `${COLLACARD_NAVIGATION_SLICE_NAME}/${SET_ROOT_CONCEPT_ID}`
}

export const COLLACARD_NAVIGATION_INITIAL_STATE: CollacardNavigationState = {
  rootConceptId: '',
  action: null,
  preventRefetch: false,
  from: {
    id: null,
    collacard: null,
    type: null
  },
  stack: []
}
