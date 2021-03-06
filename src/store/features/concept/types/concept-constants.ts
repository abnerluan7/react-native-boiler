export const CONCEPT_SLICE_NAME = '@concept'

export const FETCH_CONCEPT = 'fetchConcept'
export const DELETE_HYPOTHESIS = 'deleteHypothesis'
export const ADD_HYPOTHESIS_IMAGE = 'addHypothesisImage'
export const ADD_OPEN_QUESTION_TO_HYPOTHESIS = 'addOpenQuestionToHypothesis'
export const ADD_PROOF_CARD_TO_HYPOTHESIS = 'addProofCardToHypothesis'
export const DELETE_PROOF_CARD_FROM_DRAFT = 'deleteProofCardFromDraft'
export const SET_CONCEPT_DATA = 'setConceptData'
export const ADD_DEBATE_TO_HYPOTHESIS = 'addDebateToHypothesis'
export const PUBLISH_CONCEPT = 'publishConcept'

export const CONCEPT_REDUCER_KEYS = {
  PUBLISH_CONCEPT: `${CONCEPT_SLICE_NAME}/${PUBLISH_CONCEPT}`,
  ADD_OPEN_QUESTION_TO_HYPOTHESIS: `${CONCEPT_SLICE_NAME}/${ADD_OPEN_QUESTION_TO_HYPOTHESIS}`,
  ADD_PROOF_CARD_TO_HYPOTHESIS: `${CONCEPT_SLICE_NAME}/${ADD_PROOF_CARD_TO_HYPOTHESIS}`,
  FETCH_CONCEPT: `${CONCEPT_SLICE_NAME}/${FETCH_CONCEPT}`,
  DELETE_HYPOTHESIS: `${CONCEPT_SLICE_NAME}/${DELETE_HYPOTHESIS}`,
  ADD_HYPOTHESIS_IMAGE: `${CONCEPT_SLICE_NAME}/${ADD_HYPOTHESIS_IMAGE}`,
  SET_CONCEPT_DATA: `${CONCEPT_SLICE_NAME}/${SET_CONCEPT_DATA}`,
  ADD_DEBATE_TO_HYPOTHESIS: `${CONCEPT_SLICE_NAME}/${ADD_DEBATE_TO_HYPOTHESIS}`
}
