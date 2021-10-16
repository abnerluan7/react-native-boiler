import { createAction } from '@reduxjs/toolkit'

import { HypothesisModel } from '@/app/domain/models'

export const editDraftHypothesisContent = createAction<{
  contentHTML: HypothesisModel['contentHTML']
  index: number
}>('@concept/editDraftHypothesisContent')
