import { createAction } from '@reduxjs/toolkit'

export const addDraftHypothesis = createAction<number>(
  '@concept/addDraftHypothesis'
)
