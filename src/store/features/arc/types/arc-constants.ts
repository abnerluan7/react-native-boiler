import { ArcSliceState } from './arc-types'

export const ARC_SLICE_NAME = '@Arc'

export const SET_ARC_CURRENT_CONCEPT = 'setArcCurrentConcept'

export const ARC_SLICE_REDUCER_KEYS = {
  SET_ARC_CURRENT_CONCEPT: `${ARC_SLICE_NAME}/${SET_ARC_CURRENT_CONCEPT}`
}

export const ARC_SLICE_INITIAL_STATE: ArcSliceState = {
  conceptId: '',
  fatherConceptId: '',
  grandfatherConceptId: '',
  isMainConcept: false
}
