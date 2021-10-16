import { createAction } from '@reduxjs/toolkit'

import { HypothesisModel } from '@/app/domain/models'

export const editDraftHypothesisTitle = createAction<{
  title: HypothesisModel['title']
  index: number
}>('@concept/editDraftHypothesisTitle')
