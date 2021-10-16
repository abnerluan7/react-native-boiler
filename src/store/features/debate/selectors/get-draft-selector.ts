import { createSelector } from '@reduxjs/toolkit'

import { AppState } from '@/store/types'

const debateDraftSelector = (state: AppState) => state.debate.draft

export const getDraftSelector = createSelector(
  debateDraftSelector,
  ({ reason, title, possibilities }) => {
    return {
      reason,
      title,
      possibilities
    }
  }
)
