import { createSelector } from 'reselect'

import { AppState } from '@/store/types'

const getOngoingResearchDraftSelector = (state: AppState) =>
  state.ongoingResearch.draft

export const formBasicInformationSelector = createSelector(
  getOngoingResearchDraftSelector,
  (draft) => ({
    name: draft.name,
    whatIsResearchTryingToProve: draft.whatIsResearchTryingToProve,
    whyIsImportant: draft.whyIsImportant
  })
)
