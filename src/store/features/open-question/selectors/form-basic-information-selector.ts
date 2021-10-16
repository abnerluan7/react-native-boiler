import { createSelector } from 'reselect'

import { AppState } from '@/store/types'

const getOpenQuestionDraftSelector = (state: AppState) =>
  state.openQuestion.draft

export const formBasicInformationSelector = createSelector(
  getOpenQuestionDraftSelector,
  (draft) => ({
    question: draft.question,
    importanceLevel: draft.importanceLevel,
    difficultyLevel: draft.difficultyLevel,
    whyIsImportant: draft.whyIsImportant,
    howToTackle: draft.howToTackle
  })
)
