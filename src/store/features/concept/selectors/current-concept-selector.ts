import { createSelector } from 'reselect'

import { AppState } from '@/store/types'

const draftSelector = (state: AppState) => state.concept.draft
const originalSelector = (state: AppState) => state.concept.concept.data

export const currentConceptSelector = createSelector(
  draftSelector,
  originalSelector,
  (draft, original) => {
    return {
      draft,
      original
    }
  }
)
