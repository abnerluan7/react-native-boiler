import { createSelector } from 'reselect'

import { AppState } from '@/store/types'

const draftSelector = (state: AppState) => state.proofCard.draft
const conceptSelector = (state: AppState) => state.concept.concept.data

export const proofCardDraftSelector = createSelector(
  [draftSelector, conceptSelector],
  (draft, concept) => {
    const hypothesisIndex =
      concept?.hypotheses?.findIndex(
        (hypothesis) => hypothesis.id === draft.proofCard.hypothesisId
      ) ?? -1

    return {
      ...draft.proofCard,
      hypothesisIndex
    }
  }
)
